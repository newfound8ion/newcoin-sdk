// EOS imports
import { Api, JsonRpc, RpcError } from "eosjs";
import { Transaction, TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig.js';  // development only
import { PushTransactionArgs } from "eosjs/dist/eosjs-rpc-interfaces";

const ecc = require("eosjs-ecc-priveos");

// Extra backend services
import { JsonRpc as HJsonRpc } from "@eoscafe/hyperion";

// Newcoin services  
import { ActionGenerator as PoolsActionGenerator, ChainApi as PoolsRpcApi } from '@newfound8ion/newcoin.pools-js'
import { PoolPayload as PoolsPayload } from '@newfound8ion/newcoin.pools-js/dist/interfaces/pool.interface';
import { ActionGenerator as MainDAOActionGenerator } from '@newfound8ion/newcoin.pool-js';
import { ActionGenerator as DaosAG, ChainApi as DaosChainApi } from '@newfound8ion/newcoin.daos-js'
import { DAOPayload, GetTableRowsPayload, ProposalPayload } from "@newfound8ion/newcoin.daos-js/dist/interfaces";
import { ActionGenerator as sdkActionGen, EosioActionObject } from "./actions";
import { RpcApi as AaRpcApi } from "atomicassets";
//import { AssetParams } from "atomicassets/build/API/Explorer/Types";

import fetch from 'cross-fetch';


//@ts-ignore
import {
  NCKeyPair, 
  NCCreateUser, NCCreateCollection,
  NCCreatePool, NCStakePool, NCUnstakePool,
  NCStakeMainDao, NCBuyRam,
  NCCreateDao, NCGetDaoWhiteList, 
  NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, NCCreateDaoStakeProposal,
  NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes, 
  NCGetDaoProposals, NCDaoProposalVote, NCDaoWithdrawVoteDeposit,
  NCMintAsset, NCMintFile, NCCreatePermission,
  NCGetAccInfo, NCGetPoolInfo, NCLinkPerm,
  NCPoolsInfo, NCNameType,
  NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, default_schema, file_schema, NCKeyValPair, NCChangeFile, NCModifyAsset
} from "./types";

export {
  NCKeyPair, NCKeyValPair,
  NCCreateUser, NCCreateCollection,
  NCCreatePool, NCStakePool, NCUnstakePool,
  NCStakeMainDao, 
  NCCreateDao, NCGetDaoWhiteList, NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, NCCreateDaoStakeProposal,
  NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes, NCGetDaoProposals, NCDaoProposalVote,
  NCMintAsset,  NCMintFile, NCCreatePermission,
  NCGetAccInfo, NCGetPoolInfo, NCLinkPerm,
  NCPoolsInfo, NCNameType,
  NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, default_schema, file_schema,
  devnet_services, devnet_urls
};

import { normalizeUsername } from "./utils";

import { getClaimNftsActions, getClaimWinBidActions, getCreateAuctionActions, getEditAuctionActions, getEraseAuctionActions, getPlaceBidActions } from "./neftymarket";
import { NCClaimNftsParams, NCClaimWinBidParams, NCCreateAuctionParams, NCEditAuctionParams, NCEraseAuctionParams, NeftyMarketParamsBase, NCPlaceBidParams } from "./neftymarket/types";

import { atomicTxToAssetId, readAsset } from "./io/nft";
import { NCInitUrls, NCInitServices, devnet_urls, devnet_services } from "./io/system";


/**
 * The primary tool to interact with [https://newcoin.org](newcoin.org).
 * 
 * This is an early alpha.
 * 
 * See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.
 */
export class NCO_BlockchainAPI {
  private urls: NCInitUrls;
  private services: NCInitServices;

  private isProxy: boolean;

  // @ts-ignore
  private aa_api: AaRpcApi;
  private nodeos_rpc: JsonRpc;
  private hrpc: HJsonRpc;
  private poolsRpcApi: PoolsRpcApi;
  // private poolRpcApi: PoolRpcApi;
  private cApi: DaosChainApi;

  private aGen: DaosAG;
  private mGen: MainDAOActionGenerator;
  private pGen: PoolsActionGenerator;
  private sdkGen: sdkActionGen;

  private debug: boolean = false;

  static defaults = {
    devnet_services,
    devnet_urls,
    default_schema
  }

  /**
   * Init the api
   * @name newcoin-api
   * @param urls
   * @param services 
   * @returns a Newcoin API instance
   */
  constructor(
    urls: NCInitUrls,
    services: NCInitServices,
    debug: boolean = false,
    isProxy: boolean = false
  ) {
    this.debug = debug;
    this.urls = urls;
    if(this.debug) console.log("Init URLS " + JSON.stringify(urls));

    // this.aa_api  = new AaRpcApi(this.urls.atomicassets_url, "atomicassets", {fetch, rateLimit: 4} as any);
    //this.aa_api = new ExplorerApi(, urls_, { fetch });
    this.nodeos_rpc = new JsonRpc(this.urls.nodeos_url, { fetch });
    this.hrpc = new HJsonRpc(this.urls.hyperion_url, { fetch } as any);
    this.cApi = new DaosChainApi(this.urls.nodeos_url, services.daos_contract, fetch);
    this.poolsRpcApi = new PoolsRpcApi(this.urls.nodeos_url, services.staking_contract, fetch);
    // this.poolRpcApi = new PoolRpcApi(this.urls.nodeos_url, services.maindao_contract, fetch)

    this.aGen = new DaosAG(services.daos_contract, services.staking_contract);
    this.mGen = new MainDAOActionGenerator(services.maindao_contract, services.token_contract);
    this.pGen = new PoolsActionGenerator(services.staking_contract, services.maindao_contract);
    this.sdkGen = new sdkActionGen(services.eosio_contract, services.token_contract);

    this.services = services;

    this.isProxy = isProxy;
  }

  // Native EOS services
  /**
   * Create a key pair assuming a secure environment (not frontend)
   * @params none
   * @returns An EOS key pair
   */
  async createKeyPair() {

    await ecc.initialize();

    let opts = { secureEnv: true };
    let p = await ecc.randomKey(0, opts);
    //let x = ecc.isValidPrivate(p);

    let t: NCKeyPair = { prv_key: p, pub_key: ecc.privateToPublic(p) };
    return t as NCKeyPair;
  }

  /**
   * Create a user - multistage operation creating new user account, 
   * defailt collection, schema and template for the account
   * @param NCCreateUser
   * @returns NCReturnTxs
   */
  async createUser(inpt: NCCreateUser) {

    const CREATE_ACCOUNT_DEFAULTS = {
      ram_amt: 8192,
      cpu_amount: '100.0000 NCO',
      net_amount: '100.0000 NCO',
      xfer: false,
    };

    const {
      newUser, newacc_pub_active_key, newacc_pub_owner_key,
      payer, payer_prv_key,
      ram_amt, net_amount, cpu_amount, xfer
    } = { ...CREATE_ACCOUNT_DEFAULTS, ...inpt };

    let res: NCReturnTxs = {};
  

    let newacc_action = this.sdkGen.newaccount(newUser, payer, newacc_pub_active_key, newacc_pub_owner_key);
    let buyram_action = this.sdkGen.buyrambytes(newUser, payer, ram_amt);
    let delegatebw_action = this.sdkGen.delegateBw(newUser, payer, net_amount, cpu_amount, xfer);

    if(this.debug) console.log("before create account transaction");
    const tres = await this.SubmitTx(
      [newacc_action, buyram_action, delegatebw_action],
      [],
      [payer_prv_key]
    ) as TransactResult;// [] contained      
    res.TxID_createAcc = tres.transaction_id;
    if(this.debug) console.log("createuser transaction complete");

    return res;
  }

 async buyRam(inpt: NCBuyRam) {

  let buyram_action = this.sdkGen.buyrambytes(inpt.user, inpt.payer, inpt.ram_amt);
  const tres = await this.SubmitTx(
    [buyram_action],
    [],
    [inpt.payer_prv_key]
  ) as TransactResult;// [] contained       
  return { TxID_createAcc: tres.transaction_id } as NCReturnTxs;

 }

  /**
   * Create default collection for the account
   * @param  NCCreateCollection
   * @returns Create Collection and template transactions' ids
   */
  async createCollection(inpt: NCCreateCollection) {

    let t: any;
    let res: NCReturnTxs = {};
    let tres: TransactResult;

    if (inpt.collection_name == undefined) inpt.collection_name = normalizeUsername(inpt.user, "z");
    if (inpt.schema_name == undefined) inpt.schema_name = normalizeUsername(inpt.user, "w");
    
    // @ts-ignore
    let sbt_sch_name = normalizeUsername(inpt.user, "s");

    let mkt_fee = inpt.mkt_fee ? inpt.mkt_fee : 0.05;
    let allow_notify = inpt.allow_notify ? inpt.allow_notify : true;

    t = this.sdkGen.createCollection(
      inpt.user,
      inpt.collection_name,
      [inpt.user],
      [inpt.user],
      mkt_fee,
      allow_notify
    );
    if(this.debug) console.log(t);
    if(this.debug) console.log("createcol transaction");
    tres = await this.SubmitTx([t],
      [],
      [inpt.user_prv_active_key]
    ) as TransactResult;
    res.TxID_createCol = tres.transaction_id;
    if(this.debug) console.log(tres);

    if(this.debug) console.log("creating schema ");
    let schema_fields = inpt.schema_fields ? inpt.schema_fields : default_schema;
    t = this.sdkGen.createSchema(
      inpt.user,
      inpt.collection_name, inpt.schema_name,
      schema_fields);
    if(this.debug) console.log(t);
    
    if(this.debug) console.log("createsch transaction");
    tres = await this.SubmitTx([t],
      [],
      [inpt.user_prv_active_key]
    ) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);

    /*if(this.debug) console.log("creating SBT schema");
    let t1 = this.sdkGen.createSchema(
      inpt.user,
      inpt.collection_name, sbt_sch_name,
      SBT_NFT_schema);
    if(this.debug) console.log(t1);

    if(this.debug) console.log("createsch SBT transaction");
    tres = await this.SubmitTx([t1],
      [],
      [inpt.user_prv_active_key]
    ) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);*/

    if(this.debug) console.log("creating template");
    let template = inpt.template_fields ? inpt.template_fields : [];
    let xferable = inpt.xferable ? inpt.xferable : true;
    let burnable = inpt.burnable ? inpt.burnable : true;
    t = this.sdkGen.createTemplate(inpt.user, inpt.collection_name, inpt.schema_name, xferable, burnable, template);
    if(this.debug) console.log(t);

    if(this.debug) console.log("creating template transaction");
    tres = await this.SubmitTx([t],
      [],
      [inpt.user_prv_active_key]
    ) as TransactResult;
    res.TxID_createTpl = res.TxID_createTpl;
    if(this.debug) console.log(tres);

    return res;
  }

  /**
   * Create a new permission subordinate to the Active permission. 
   * (future optional: allow under owner, TBD)
   * @param NCCreatePermission
   * @returns Create permission transaction id
   */
  async createPermission(inpt: NCCreatePermission) {
    let t = this.sdkGen.createPermission(inpt.author, inpt.perm_name, inpt.perm_pub_key);
    let res = await this.SubmitTx([t],
      [],[inpt.author_prv_active_key]                      
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_createPerm = res.transaction_id;
    return r;
  }

  /**
   * Link a permission to a specific action of a specific contract. 
   * @param NCLinkPerm
   * author: the permission's owner to be linked  
   * code: the owner of the action to be linked                                         
   * type: the action to be linked                                                      
   * 'active', 'owner' ...                                                        
   * @returns Link permission transaction id
   */
  async linkPermission(inpt: NCLinkPerm) {
    const linkauth_input = {
      account: inpt.author,             // this link
      code: inpt.action_owner,          // 
      type: inpt.action_to_link,        // 
      requirement: inpt.perm_to_link,   // 
    };

    // the action which will make the linking 
    let action = {
      account: 'eosio',
      name: 'linkauth',
      data: linkauth_input,
      authorization: [{
        actor: inpt.author,
        permission: 'active'
      }]
    };

    let res = await this.SubmitTx([action],
      [],
      [inpt.author_prv_active_key]
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_linkPerm = res.transaction_id;
    return r;
  }


  /* =====================================================================================
   * Main DAO service: common staking pool transfrming NCO (external convertible currency) 
   * into internal GNCO currency. 
   * 
   * Staked amount is subject to a staking fee, redemption delay and/or 
   * instant unstaking fee.  
   * @param   NCStakeMainDao 
   * @returns NCReturnTxs
   */
  async stakeMainDAO(inpt: NCStakeMainDao) {
    let r: NCReturnTxs = {};

    const stakeTx = await this.mGen.stake(
      [{ actor: inpt.payer, permission: "active" }],
      inpt.payer,
      inpt.amt);

    if(this.debug) console.log("action: " + JSON.stringify(stakeTx));
    const res = await this.SubmitTx(stakeTx,
      [], [inpt.payer_prv_key]) as TransactResult;

    r.TxID_stakeMainDAO = res.transaction_id;
    return r;
  }

  /**
  * Instant UnStake mainDAO with penalty
  * @param NCStakeMainDao 
  * @returns NCReturnTxs
  */
  async instUnstakeMainDAO(inpt: NCStakeMainDao) {
    let r: NCReturnTxs = {};

    const stakeTx = await this.mGen.instunstake(
      [{ actor: inpt.payer, permission: "active" }],
      inpt.payer,
      inpt.amt);

    if(this.debug) console.log("action: " + JSON.stringify(stakeTx));
    const res = await this.SubmitTx(stakeTx,
      [],
      [inpt.payer_prv_key]) as TransactResult;

    r.TxID_unstakeMainDAO = res.transaction_id;
    return r;

  }

  /**
   * Delayed UnStake mainDAO delay without penalty
   * @param NCStakeMainDao 
   * @returns NCReturnTxs
   */
  async dldUnstakeMainDAO(inpt: NCStakeMainDao) {
    let r: NCReturnTxs = {};
    const stakeTx = await this.mGen.dldunstake(
      [{ actor: inpt.payer, permission: "active" }],
      inpt.payer,
      inpt.amt);

    if(this.debug) console.log("action: " + JSON.stringify(stakeTx));
    const res = await this.SubmitTx(stakeTx,
      [],
      [inpt.payer_prv_key]) as TransactResult;

    r.TxID_unstakeMainDAO = res.transaction_id;
    return r;

  }


  // ========================================================================
  /** Staking pools service, issuing social tokens
   *
   * Create a staking pool for an account. 
   * Selection of ticker and inflation/deflation optionality
   * @param   NCCreatePool
   * @returns Create Pool transaction id
   */
   async createPool(inpt: NCCreatePool) {
    inpt.ticker = (inpt.ticker || inpt.owner.substring(0, 5)).toUpperCase();
    inpt.is_inflatable ??= true;
    inpt.is_deflatable ??= true;
    inpt.is_treasury ??= false;

    if(this.debug) console.log("Creating pool: " + JSON.stringify(inpt));
    let t = this.sdkGen.createPool(
      inpt.owner,
      inpt.ticker,
      inpt.is_inflatable,
      inpt.is_deflatable,
      inpt.is_treasury,
      "test pool for " + inpt.owner
    );

    let res = await this.SubmitTx([t],
      [], [inpt.owner_prv_active_key]
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_createPool = res.transaction_id;
    return r;
  }

  /**
   * Stake to creator pool 
   * @param 
   * @returns Create Pool transaction id
   */
  async stakePool(inpt: NCStakePool) {

    let p: PoolsPayload = { owner: inpt.owner };
    let r: NCReturnTxs = {};
    type RetT = { rows: PoolsPayload[] };

    if(this.debug) console.log("Get poolbyowner: ", JSON.stringify(p));
    let q = await this.poolsRpcApi.getPoolByOwner(p);
    let t = await q.json() as RetT;

    const pool_id = t.rows[0].id as string;
    const pool_code = t.rows[0].code as string;

    if(this.debug) console.log("pool:" + JSON.stringify(t));

    const stakeTx = await this.pGen.stakeToPool(
      [{ actor: inpt.payer, permission: "active" }],
      inpt.payer, inpt.amt, pool_id);

    if(this.debug) console.log("action: " + JSON.stringify(stakeTx));
    const res = await this.SubmitTx(stakeTx,
      [],
      [inpt.payer_prv_key]) as TransactResult;

    r.TxID_stakePool = res.transaction_id;
    r.pool_id = pool_id;
    r.pool_code = pool_code;
    return r;
  }
  
  // DAO functionality
  /**
   * Unstake creator pool
   * @param   NCUnstakePool
   * @returns Create Pool transaction id
   */
  async unstakePool(inpt: NCUnstakePool) {

    const t = await this.pGen.withdrawFromPool(
      [{ actor: inpt.payer, permission: "active" }], //{ actor: "io", permission: "active"}
      inpt.payer,
      inpt.amt);

    if(this.debug) console.log("action: " + JSON.stringify(t));
    const res = await this.SubmitTx(t,
      [],
      [inpt.payer_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_unstakePool = res.transaction_id;
    return r;
  }

/**
 * DAO creation. One per account.
 * @param inpt : NCCreateDao
 * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
 */
  async createDao(inpt: NCCreateDao) {

    const t = await this.aGen.createDao(
      [{ actor: inpt.author, permission: "active" }],
      inpt.author,
      inpt.descr
    );
    const res = await this.SubmitTx(t,
      [], [inpt.author_prv_key]) as TransactResult;

    let p: DAOPayload = { owner: inpt.author };
    if(this.debug) console.log("Get dao by owner: ", JSON.stringify(p));
    let q = await this.cApi.getDAOByOwner(p);
    let w = await q.json();
    if(this.debug) console.log("received from getDaoByOwner" + JSON.stringify(w));

    let r: NCReturnTxs = {};
    r.TxID_createDao = res.transaction_id;
    r.dao_id = w.rows[0].id.toString();
    // r.dao_id = r.dao_id.toString() ; 
    return r;
  }
  

/**
 * 
 * @param inpt : NCCreateDaoProposal
 * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
 */
  async createDaoProposal(inpt: NCCreateDaoProposal) {
    const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));

    const t = await this.aGen.createProposal(
      [{ actor: inpt.proposer, permission: "active" }],
      inpt.proposer, Number(dao_id),
      inpt.title, inpt.summary,
      inpt.url, inpt.vote_start, inpt.vote_end
    );

    const res = await this.SubmitTx(t,
      [], [inpt.proposer_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_createDaoProposal = res.transaction_id;
    r.dao_id = dao_id;

    const ps = await this.getDaoProposals({...inpt, dao_id }); // r.dao_id, inpt.proposer
    r.proposal_id = ps.rows[ps.rows.length-1].id;
    return r;
  }


/**
 * 
 * @param inpt : NCCreateDaoUserWhitelistProposal
 * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
 */
  async createDaoUserWhitelistProposal(inpt: NCCreateDaoUserWhitelistProposal) {
    const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));

    const t = await this.aGen.createWhiteListProposal(
      [{ actor: inpt.proposer, permission: "active" }],
      inpt.proposer, Number(dao_id), inpt.user,
      inpt.vote_start, inpt.vote_end
    );

    const res = await this.SubmitTx(t,
      [],
      [inpt.proposer_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_createDaoProposal = res.transaction_id;
    r.dao_id = dao_id;
    let ps = await this.getDaoWhitelistProposals({...inpt, dao_id });  //  { dao_id: dao_id, proposal_author: inpt.proposer } as NCGetDaoProposals );
    r.proposal_id = ps.rows[ps.rows.length - 1].id;
    return r;
  }

  /**
 * 
 * @param inpt : NCCreateDaoUserWhitelistProposal
 * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
 */
   async createDaoStakeProposal(inpt: NCCreateDaoStakeProposal) {
    const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));

    const t = await this.aGen.createStakeProposal(
      [{ actor: inpt.proposer, permission: "active" }],
      inpt.proposer, Number(dao_id), 
      inpt.to, inpt.quantity,
      inpt.vote_start, inpt.vote_end
    );

    const res = await this.SubmitTx(t,
      [],
      [inpt.proposer_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_createDaoProposal = res.transaction_id;
    r.dao_id = dao_id;
    let ps = await this.getDaoStakeProposals(
      { dao_id: dao_id, proposal_author: inpt.proposer } as NCGetDaoProposals );
    r.proposal_id = ps.rows[ps.rows.length - 1].id;
    return r;
  }


  /**
 * 
 * @param inpt : NCApproveDaoProposal
 * @returns NCReturnTxs.TxID_approveDaoProposal
 */
  async approveDaoProposal(inpt: NCApproveDaoProposal) {
    const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));

    if (inpt.proposal_id == undefined) throw ("Proposal undefined ID");

    const t = await this.aGen.approveProposal(
      [{ actor: inpt.approver, permission: "active" }],
      Number(dao_id), inpt.proposal_id
    );

    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.approver_prv_key)], [inpt.approver_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_approveDaoProposal = res.transaction_id;
    return r;
  }

/**
 * 
 * @param inpt : NCApproveDaoProposal
 * @returns NCReturnTxs.TxID_approveDaoProposal
 */
  async approveDaoWhitelistProposal(inpt: NCApproveDaoProposal) {
    const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));

    if (inpt.proposal_id == undefined) throw ("Proposal undefined ID");

    const t = await this.aGen.approveWhiteListProposal(
      [{ actor: inpt.approver, permission: "active" }],
      Number(dao_id), inpt.proposal_id
    );

    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.approver_prv_key)], [inpt.approver_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_approveDaoProposal = res.transaction_id;
    return r;
  }

/**
 * 
 * @param inpt : NCExecuteDaoProposal
 * @returns NCReturnTxs.TxID_executeDaoProposal
 */
  async executeDaoProposal(inpt: NCExecuteDaoProposal) {
    const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));

    if (inpt.proposal_id == undefined) throw ("Proposal ID undefined");

    const t = await this.aGen.executeProposal(
      [{ actor: inpt.exec, permission: "active" }],
      Number(dao_id), inpt.proposal_id
    );

    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.exec_prv_key)], [inpt.exec_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_executeDaoProposal = res.transaction_id;
    return r;
  }

/**
 * @param inpt : NCExecuteDaoProposal
 * @returns NCReturnTxs.TxID_executeDaoProposal
 */
  async executeDaoWhitelistProposal(inpt: NCExecuteDaoProposal) {
    const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));

    if (inpt.proposal_id == undefined) throw ("Proposal ID undefined");

    const t = await this.aGen.executeWhiteListProposal(
      [{ actor: inpt.exec, permission: "active" }], Number(dao_id), inpt.proposal_id
    );

    const res = await this.SubmitTx(t, [], [inpt.exec_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_executeDaoProposal = res.transaction_id;
    return r;
  }

/**
 * @param inpt : NCCreateDao
 * @returns NCReturnTxs.TxID_voteDaoProposal
 */
  async voteOnProposal(inpt: NCDaoProposalVote) {

    const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
    //if(this.debug) console.log("Vote for DAO proposal", JSON.stringify(inpt));
    const t = await this.aGen.vote(
      [{ actor: inpt.voter, permission: "active" }],
      inpt.voter, inpt.quantity, inpt.proposal_type || "standart",
      dao_id, inpt.proposal_id, inpt.option
    );

    if(this.debug) console.log("Vote for DAO proposal: ", JSON.stringify(t));
    const res = await this.SubmitTx(t,
      [], [inpt.voter_prv_key]) as TransactResult;

    //if(this.debug) console.log("received from VoteForDaoProposal" + JSON.stringify(res));
    return { TxID_voteDaoProposal: res.transaction_id } as NCReturnTxs;
  }

  async withdrawVoteDeposit(inpt: NCDaoWithdrawVoteDeposit) {
    //const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
    if(this.debug) console.log("withdraw vote deposit make action", JSON.stringify(inpt));
    const t = await this.aGen.withdraw(
      [{ actor: inpt.voter, permission: "active" }],
      inpt.voter, +inpt.vote_id
    );

    if(this.debug) console.log("Withdraw vote deposit send action: ", JSON.stringify(t));
    const res = await this.SubmitTx(t,
      [], [inpt.voter_prv_key]) as TransactResult;

    //if(this.debug) console.log("received from withdraw: " + JSON.stringify(res));
    return { TxID_WithdrawVoteDeposit: res.transaction_id } as NCReturnTxs;
  }


   /**
   * Mint an asset
   * @param inpt: NCMintAsset
   * @returns Create Pool transaction id
   */
    async mintAsset(inpt: NCMintAsset) {
      if (inpt.col_name == undefined) inpt.col_name = normalizeUsername(inpt.creator, "z");
      if (inpt.sch_name == undefined) inpt.sch_name = normalizeUsername(inpt.creator, "w");
      if (inpt.tmpl_id == undefined) inpt.tmpl_id = -1;
  
      if (inpt.immutable_data == undefined)
        inpt.immutable_data = [{ key: 'name', value: ['string', inpt.creator + '_' + (new Date()).getTime()] }];
  
      if (inpt.mutable_data == undefined) inpt.mutable_data = [];
  
      const t = this.sdkGen.mintAsset(
        inpt.creator, inpt.col_name, inpt.sch_name, inpt.tmpl_id,
        inpt.immutable_data, inpt.mutable_data
      );
  
      let res = await this.SubmitTx([t], [], [inpt.payer_prv_key]) as TransactResult;

      let r: NCReturnTxs = {};
      r.TxID_mintAsset = res.transaction_id;
      r.asset_id = "asset default ID";
      r.asset_id = (await atomicTxToAssetId(res.transaction_id))[0];
      console.log("minted asset tx " + res.transaction_id + " asset id: " + r.asset_id);
      return r;

      // another option is by search via asset id
      /*let p: DAOPayload = { owner: inpt.author };
      if(this.debug) console.log("Get dao by owner: ", JSON.stringify(p));
      let q = await this.cApi.getDAOByOwner(p);
      let w = await q.json();
      if(this.debug) console.log("received from getDaoByOwner" + JSON.stringify(w));
  
      let r: NCReturnTxs = {};
      r.TxID_createDao = res.transaction_id;
      r.dao_id = w.rows[0].id.toString();
      // r.dao_id = r.dao_id.toString() ;*/
    }
  
    async modifyAsset(inpt: NCModifyAsset) {
      
      const t = this.sdkGen.modifyAsset(inpt.editor, inpt.owner, inpt.asset_id, inpt.new_data);
      console.log("modify asset: " + JSON.stringify(t));
      let res = await this.SubmitTx([t], [], [inpt.payer_prv_key]) as TransactResult;
      let r: NCReturnTxs = {};
      r.TxID_modifyAsset = res.transaction_id;
      r.asset_id = inpt.asset_id;
      return r;    
    }

/*
  async findAssetId(inpt: NCGetAsset)
  {
    let opt : AssetParams = { name: "",};
    //async getAssets(options, page: number = 1, limit: number = 100, data = {}): Promise<ApiAsset[]> options
    this.aa_api.getAssets(opt, page, limit: number = 100, {}): Promise<ApiAsset[]> options
    const exampleAsset = {
      owner: 'pink.gg',
      id: '1099511628276'
  };
      const asset = await api.getAsset(exampleAsset.owner, exampleAsset.id);
      const result = await asset.toObject();

  }
  
  async findAssets(author) : Promise<string>
  {
      // time: today
      // author: name
  }
*/

   /**
   * Create File
   * @param inpt: NCMintFile
   * @returns Create file transaction id
   */
    async createFile(inpt: NCMintFile) {

      let col_name = normalizeUsername(inpt.creator, "y");
      let sch_name = normalizeUsername(inpt.creator, "v");
      let tmpl_id = -1;
      let immutable_data : any[] = [ ];
      let mutable_data = [
        {'key': 'name', 'value': ['string', inpt.name]},
        {'key': 'path','value': ['string', inpt.path]}, 
        {'key': 'content','value': ['string',  inpt.content]},
        {'key': 'image','value': ['string',  inpt.image??"emptystring" ]}
      ];

      let n : NCMintAsset = {
        creator: inpt.creator,
        payer: inpt.payer,
        immutable_data: immutable_data,
        mutable_data: mutable_data,
        col_name: col_name,
        sch_name: sch_name,
        tmpl_id: tmpl_id,
        payer_prv_key: inpt.payer_prv_key  
      } 

      try { 
        let mint_res  = await this.mintAsset(n) ;
        mint_res.TxID_mintFile = mint_res.TxID_mintAsset;
        console.log("minted file: ");
        console.log(mint_res); 
        return mint_res;

      } catch(e) {
        let err_no_col = "assertion failure with message: No collection with this name exists";
        let err = (e as Error).message;
        console.log("Error message:  " + err);
        if (err != err_no_col) return;

        let nco_struct : NCCreateCollection = {
            user: inpt.creator, 
            collection_name: col_name,
            schema_name: sch_name,
            schema_fields: file_schema,
            template_name: normalizeUsername(inpt.creator, "t"),
            template_fields: [], 
            user_prv_active_key: inpt.payer_prv_key,
            allow_notify: true,
            mkt_fee    : 0.00,
            xferable   : false,
            burnable   : false, // undeletable from ceramic
            max_supply : 0xffffff 
        };

        let res = await this.createCollection(nco_struct);
        if(this.debug) console.log("createcollection of files result: ")
        if(this.debug) console.log(res);
        

        try { 
          let mint_res  = await this.mintAsset(n) ;
          mint_res.TxID_mintFile = mint_res.TxID_mintAsset;
          console.log("minted file ");
          return mint_res;
        } catch(e) {
          let err = (e as Error).message;
          console.log("Second Minting error message:  " + err);
        }

        return -1;

      }; 

    }

    async changeFile(inpt: NCChangeFile) 
    {
      const old = await readAsset(inpt.asset_id);
      console.log("changing file : ... " + JSON.stringify(old.mutable_data));
      let data = { 
        name:    inpt.new_name ?? old.mutable_data.name,
        path:    inpt.new_path?? old.mutable_data.path,
        content: inpt.new_content?? old.mutable_data.content,
        image:   inpt.new_image??old.mutable_data.image
      };

      let n : NCModifyAsset = {
        editor: inpt.editor,
        owner: inpt.editor,
        asset_id: inpt.asset_id,
        new_data: data as any,
        payer: inpt.payer??inpt.editor,
        payer_prv_key: inpt.payer_prv_key

      };
      let res = await this.modifyAsset(n);
      res.TxID_changeFile=res.TxID_modifyAsset;
      console.log("modify asset res: "+ JSON.stringify(res));
      return res;
    }

// Getters 2
  
/**
 * @param inpt : getDaoIdByOwner
 * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
 */
 async getDaoIdByOwner(owner?: string, noFail?: boolean) : Promise<string> {
  if (!owner)
    throw new Error("DAO undefined");

  let p: DAOPayload = { owner: owner }
  if(this.debug) console.log("Get dao by owner: ", JSON.stringify(p));
  let q = await this.cApi.getDAOByOwner(p);
  let w = await q.json();
  
  if(this.debug) console.log("received from getDaoByOwner" + JSON.stringify(w));
  if (!w.rows.length && !noFail)
    throw new Error('User has no dao');

  const r: string = w.rows[0]?.id?.toString();
  if(!r && !noFail)
    throw new Error("DAO undefined");
  
  return r;
}

async getDaoProposals(inpt: NCGetDaoProposals) {
  
  if(this.debug) console.log("Get proposal list: ", JSON.stringify(inpt));
  const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner, true));
  if(!dao_id) return { dao_id: null };

  if(inpt.proposal_author && (inpt.proposal_id == undefined))
  {
      let w = await this.cApi.getProposalByProposer( { daoID: dao_id,  proposal_author: inpt.proposal_author } as ProposalPayload );
      inpt.proposal_id = await w.json();
  }

  if(inpt.proposal_id) inpt.lower_bound = inpt.upper_bound = inpt.proposal_id;

  const opt = {
        json: true,
        code: "daos.nco",
        scope: dao_id,
        table: "proposals",
        lower_bound: inpt.lower_bound,
        upper_bound: inpt.upper_bound,
        limit: ~~(inpt.limit??"10"),
        reverse: inpt.reverse,
        index_position: "1",
    } as GetTableRowsPayload;
  let w = await (await this.cApi.getTableRows( opt )).json();

  if(this.debug) console.log("received proposal list" + JSON.stringify(w));    
  return { ...w, dao_id };
}

async getDaoWhitelistProposals(inpt: NCGetDaoProposals) {
  
  if(this.debug) console.log("Get whitelist proposal list: ", JSON.stringify(inpt));
  const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner, true));
  if(!dao_id) return { dao_id: null };

  if(inpt.proposal_author && (inpt.proposal_id == undefined))
  {
      let w = await this.cApi.getWhiteListProposalByProposer( { daoID: dao_id,  proposal_author: inpt.proposal_author } as ProposalPayload );
      inpt.proposal_id = await w.json();
  }

  if(inpt.proposal_id) inpt.lower_bound = inpt.upper_bound = inpt.proposal_id;

  const opt = {
        json: true,
        code: "daos.nco",
        scope: dao_id,
        table: "whlistprpls",
        lower_bound: inpt.lower_bound,
        upper_bound: inpt.upper_bound,
        limit: ~~(inpt.limit??"10"),
        reverse: inpt.reverse,
        index_position: "1",
  } as GetTableRowsPayload;
  let w = await (await this.cApi.getTableRows( opt )).json();
  
  if(this.debug) console.log("received proposal list" + JSON.stringify(w));    
  return { ...w, dao_id };
}

async getDaoStakeProposals(inpt: NCGetDaoProposals) {
  
  if(this.debug) console.log("Get stake proposal list: ", JSON.stringify(inpt));
  const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner, true));
  if(!dao_id) return { dao_id: null };

  if(inpt.proposal_author && (inpt.proposal_id == undefined))
  {
      let w = await this.cApi.getProposalByProposer( { daoID: dao_id,  proposal_author: inpt.proposal_author } as ProposalPayload );
      inpt.proposal_id = await w.json();
  }

  if(inpt.proposal_id) inpt.lower_bound = inpt.upper_bound = inpt.proposal_id;

  const opt = {
        json: true,
        code: "daos.nco",
        scope: dao_id,
        table: "stakeprpls",
        lower_bound: inpt.lower_bound,
        upper_bound: inpt.upper_bound,
        limit: ~~(inpt.limit??"10"),
        reverse: inpt.reverse,
        index_position: "1",
  } as GetTableRowsPayload;
  
  let w = await (await this.cApi.getTableRows( opt )).json();
  
  if(this.debug) console.log("received proposal list" + JSON.stringify(w));    
  return { ...w, dao_id };
}


  async getDaoWhitelist(inpt: NCGetDaoWhiteList) {
    const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
    //let q = await this.cApi.getDAOWhiteList({ id: inpt.dao_id as string });
    //let w = await q.json();
    const opt = {
        json: true,
        code: "daos.nco",
        scope: dao_id,
        table: "whitelist",
        key_type: "name",
        lower_bound: inpt.lower_bound,
        upper_bound: inpt.upper_bound,
        limit: ~~(inpt.limit??"10"),
        reverse: inpt.reverse,
        index_position: "1",
    } as GetTableRowsPayload;
    let w = await (await this.cApi.getTableRows( opt )).json();
    if(this.debug) console.log("received white list" + JSON.stringify(w)); 
    return { ...w, dao_id };
  }
    

  async getVotes(inpt: NCGetVotes) {
    let w;

    const opt = {
      json: true,
      code: "daos.nco",
      scope: inpt.voter,
      table: "votes",
      key_type: "i64",
      lower_bound: inpt.lower_bound,
      upper_bound: inpt.upper_bound,
      limit: ~~(inpt.limit??"10"),
      reverse: inpt.reverse,
      index_position: "1",
    } as GetTableRowsPayload;

    w = await (await this.cApi.getTableRows(opt)).json();
    if(this.debug) console.log("received from getVotes " + JSON.stringify(w.rows));
    return w;
  }

 
  /**
   * Get account balance
   * @param acc: NCGetAccInfo
   * @param acc.token_name will set correct contract
   * @returns Tx data
   */
  async getAccountBalance(acc: NCGetAccInfo) {

    if (!acc.contract) {

      if (acc.token_name == "GNCO")
        acc.contract = this.services.maindao_contract;
      else
        if (acc.token_name != "NCO")
          acc.contract = this.services.staking_contract;
        else
          acc.contract = this.services.eosio_contract;
    }

    let rc: NCReturnInfo = { acc_balances: [] };
    try {
      let t = await fetch(`https://nodeos-dev.newcoin.org/v1/chain/get_currency_balance`, { // TODO
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account: acc.owner,
          code: acc.contract
        }),
      });
      rc.acc_balances = await t.json();
      //if(this.debug) if(this.debug) console.log(rc);
      return rc;
    } catch (e) {
      if(this.debug) console.log('\nCaught exception: ' + e);
      if (e instanceof RpcError && this.debug) console.log(JSON.stringify(e.json, null, 2));
      throw e;
    }
  }

  /**
   * Transfer GNCO between accounts
   * @param NCTxBal
   * @returns Transfer transaction id
   */
  async txGNCOBalance(inpt: NCTxBal) {
    const r = await this._txBalance(this.services.maindao_contract, inpt);
    return r;
  }

  /**
   * Transfer NCO between accounts
   * @param NCTxBal
   * @returns Transfer transaction id
   */
  async txNCOBalance(inpt: NCTxBal) {
    const r = await this._txBalance(this.services.token_contract, inpt);
    return r;
  }

  /**
   * Transfer creator tokens between accounts
   * @param   NCTxBal 
   * @returns Transfer transaction id
   */
  async txDAOTokenBalance(inpt: NCTxBal) {
    const r = await this._txBalance(this.services.staking_contract, inpt);
    return r;
  }

  /**
 * Get pool info
 * @param 
 * @returns Tx data
 */
  async getPoolInfo(payload: NCGetPoolInfo) {
    const api = new PoolsRpcApi("https://nodeos-dev.newcoin.org", "pools2.nco", fetch); // TODO

    try {
      const fn = payload.code ? "getPoolByCode" : "getPoolByOwner";
      let q = await api[fn](payload);
      let t = await q.json() as NCPoolsInfo;
      return t;

    } catch (e) {
      if(this.debug) console.log('\nCaught exception: ' + e);

      if (e instanceof RpcError)
        if(this.debug) console.log(JSON.stringify(e.json, null, 2));
    }

    return {} as NCPoolsInfo;
    ``
  }


  /**
   * Get trasaction data
   * @returns Tx data
   */
   async getTxData(txid: string) {
    let txi = await this.hrpc.get_transaction(txid);
    if(this.debug) console.log(txi); // get template number  txi.actions[1].act.data.template_id
    return txi;
  }

  // AUX functions
  /**
   * Transfer NCO between accounts
   * @returns Transfer transaction id
   */
    async _txBalance(contract: string, inpt: NCTxBal): Promise<NCReturnTxs> {
      let r: NCReturnTxs = {};
      let tx = this.sdkGen.txBalance(contract, inpt.payer, inpt.to, inpt.amt, inpt.memo ??= "");
      let res = await this.SubmitTx([tx],
        [],
        [inpt.payer_prv_key]
      ) as TransactResult;
      r.TxID = res.transaction_id;
      return r;
    }



  // Neftymarket
  private getActionParams<T>(params: T): NeftyMarketParamsBase & T {
    return {
      atomicassetsContract: this.services.atomicassets_contract,
      neftymarketContract: this.services.neftymarket_contract,
      ...params,
    };
  }

  private async submitAuctionTx(actions: EosioActionObject[], payer_prv_key: string): Promise<NCReturnTxs> {
    const response = await this.SubmitTx(
      actions, 
      [], 
      [payer_prv_key]
    ) as TransactResult;
    return {
      TxID: response.transaction_id,
    };
  }

  // Nefty market actions
  /**
   * Create a new auction with the specified parameters
   * @returns create auction transaction id
   */
  async createAuction(params: NCCreateAuctionParams, key: string) {
    const actions = getCreateAuctionActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }

  /**
   * Place a new bid into an active auction
   * @returns bid transaction id
   */
  async placeAuctionBid(params: NCPlaceBidParams, key: string) {
    const actions = getPlaceBidActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }
  
  /**
   * Claim NFTs whenever you win an auction
   * @returns claim transaction id
   */
  async claimNftsFromAuction(params: NCClaimNftsParams, key: string) {
    const actions = getClaimNftsActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }

  /**
   * Claim the winning bid as the seller of an auction
   * @returns claim transaction id
   */
  async claimAuctionWinBid(params: NCClaimWinBidParams, key: string) {
    const actions = getClaimWinBidActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }

  /**
   * Erase an auction as long as it has no bids
   * @returns delete transaction id
   */
  async eraseAuction(params: NCEraseAuctionParams, key: string) {
    const actions = getEraseAuctionActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }

  /**
   * Edit an auction with the specified parameters, internally it erases the existing one
   * and creates a new one with the specified parameters.
   * @returns transaction id
   */
  async editAuction(params: NCEditAuctionParams, key: string ) {
    const actions = getEditAuctionActions(this.getActionParams(params));
    return this.submitAuctionTx(actions, key);
  }



  async SubmitTx (
    actions: any[],
    public_keys: string[],   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
    private_keys: string[],  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"]
    )  {
    return this[this.isProxy ? "SubmitTxProxy" : "SubmitTxNative"](actions, public_keys, private_keys);
  }


  async SubmitTxProxy(
    actions: any[],
    public_keys: string[],   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
    private_keys: string[],  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"]
    ) {
      const args = JSON.stringify({
        actions,
        public_keys,
        private_keys
      });
    
      try {
  
        const r = await fetch(
          this.urls.nodeos_url,
          { method: "POST", body: args, headers: { "Authorization": `newsafe ${private_keys[0]}`, "Content-Type": "application/json" } });

        const txt = await r.text();

        return JSON.parse(txt);
      } catch(e) {
        console.log((e as any).message)
        throw e;
      }
  }


  async SubmitTxNative(
    actions: any[],
    public_keys: string[],   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
    private_keys: string[],  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"]
    ) {
  
    // if(!private_keys?.length)
    // {
    private_keys = private_keys instanceof Array ? private_keys : [private_keys];
    debugger;
    public_keys = private_keys.map(k => ecc.privateToPublic(k));
    debugger;
    // }

    const signatureProvider = new JsSignatureProvider(private_keys);
    signatureProvider.availableKeys = public_keys;

    //@ts-ignore
    const rpc = this.nodeos_rpc;
    const api = new Api({ rpc, signatureProvider }); //required to submit transactions

    const info = await rpc.get_info();
    const lastBlockInfo = await rpc.get_block(info.last_irreversible_block_num)
    const tzOff = new Date(info.head_block_time).getTimezoneOffset();
    var t = new Date((new Date(info.head_block_time)).getTime() + 10 * 60 * 1000 - tzOff * 1000 * 60).toISOString().slice(0, -1);//+10m

    const transactionObj: Transaction =
    {
      actions: actions,
      expiration: t,
      ref_block_prefix: lastBlockInfo.ref_block_prefix,  //info.last_irreversible_block_num 
      ref_block_num: lastBlockInfo.block_num & 0xffff, // 22774
    };

    //if (this.debug) console.log("actions before serialization: " + JSON.stringify(transactionObj.actions));
    
    const a = await api.serializeActions(transactionObj.actions);
    const transaction = { ...transactionObj, actions: a };
    const serializedTransaction = api.serializeTransaction(transaction);

    const availableKeys = await api.signatureProvider.getAvailableKeys();
    const requiredKeys = await api.authorityProvider.getRequiredKeys({ transaction, availableKeys });
    const abis = await api.getTransactionAbis(transaction);
    // const pushTransactionArgs: PushTransactionArgs = { serializedTransaction, signatures };
    
    let tx = {
      chainId: info.chain_id, // from getinfo
      requiredKeys: requiredKeys,
      serializedTransaction: serializedTransaction,
      serializedContextFreeData: undefined,
      abis: abis
    };

    const pushTransactionArgs: PushTransactionArgs = await api.signatureProvider.sign(tx);
    return api.pushSignedTransaction(pushTransactionArgs);
  };


  
}
