// EOS imports
import { Api, JsonRpc, RpcError } from "eosjs";
import { Transaction, TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';  // development only
import { PushTransactionArgs, ReadOnlyTransactResult } from "eosjs/dist/eosjs-rpc-interfaces";
// @ts-ignore
import ecc from "eosjs-ecc-priveos";

// Extra backend services
import { GetTransaction, JsonRpc as HJsonRpc } from "@eoscafe/hyperion";
import { ExplorerApi } from 'atomicassets';

// Newcoin services  
import { ActionGenerator as PoolsActionGenerator, RpcApi as PoolsRpcApi } from '@newcoin-foundation/newcoin.pools-js/'
import { PoolPayload as PoolsPayload } from '@newcoin-foundation/newcoin.pools-js/dist/interfaces/pool.interface';
import { ActionGenerator as MainDAOActionGenerator,  RpcApi as PoolRpcApi } from '@newcoin-foundation/newcoin.pool-js';
import { ActionGenerator as DaosAG, ChainApi as DaosChainApi, Interfaces as DaoInterfaces } from '@newcoin-foundation/newcoin.daos-js'
import { ActionGenerator as sdkActionGen } from "./actions";


// @ts-ignore
import * as node_fetch from 'node-fetch';
import fetch from 'cross-fetch';
import { info } from "console";

import * as NCO from "./types";
import {
  NCKeyPair,
  NCCreateUser, NCCreateCollection,
  NCCreatePool, NCStakePool, NCUnstakePool,
  NCAddToWhiteList, NCRemoveFromWhiteList,
  NCStakeMainDao,
  NCCreateDao, NCCreateDaoProposal, NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes,
  NCMintAsset, NCTxNcoBal, NCCreatePermission,
  NCGetAccInfo, NCGetPoolInfo, NCLinkPerm,
  NCPoolsInfo, NCNameType,
  NCReturnTxs, NCReturnInfo, default_schema, NCTxBal, NCGetDaoProposals, NCDaoProposalVote
} from "./types";
export * from './types';
import { normalizeUsername } from "./utils";
import { DAOPayload, ProposalPayload } from "@newcoin-foundation/newcoin.daos-js/dist/interfaces";
import { isThrowStatement } from "typescript";


const CREATE_ACCOUNT_DEFAULTS = {
  ram_amt: 8192,
  cpu_amount: '100.0000 NCO',
  net_amount: '100.0000 NCO',
  xfer: false,
};

/**
 * The primary tool to interact with [https://newcoin.org](newcoin.org).
 * 
 * This is an early alpha.
 * 
 * See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.
 */
export const devnet_urls: NCInitUrls =
{
  nodeos_url: "https://nodeos-dev.newcoin.org",
  hyperion_url: "https://hyperion-dev.newcoin.org",
  atomicassets_url: "https://atomic-dev.newcoin.org/"
}

export const devnet_services: NCInitServices =
{
  eosio_contract: "eosio",
  token_contract: "eosio.token",
  maindao_contract: "pool.nco",
  staking_contract: "pools2.nco",
  daos_contract: "daos.nco"
}

export type NCInitUrls = {
  nodeos_url: string,
  hyperion_url: string,
  atomicassets_url: string
};

export type NCInitServices = {
  eosio_contract: string,
  token_contract: string,
  maindao_contract: string,
  staking_contract: string,
  daos_contract: string
}

export class NCO_BlockchainAPI {
  private urls: NCInitUrls;
  private services: NCInitServices;
  
  //private aa_api: ExplorerApi;
  private nodeos_rpc: JsonRpc;
  private hrpc: HJsonRpc;
  private poolsRpcApi: PoolsRpcApi;
  private poolRpcApi: PoolRpcApi;
  private cApi: DaosChainApi;
  
  private aGen: DaosAG;
  private mGen: MainDAOActionGenerator;
  private pGen: PoolsActionGenerator;
  private sdkGen: sdkActionGen;

  static defaults = {
    devnet_services,
    devnet_urls
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
    services: NCInitServices
  ) {

    this.urls = urls;

    //this.aa_api = new ExplorerApi(this.urls.atomicassets_url, "atomicassets", { fetch: node_fetch });
    this.nodeos_rpc = new JsonRpc(this.urls.nodeos_url, { fetch });
    this.hrpc = new HJsonRpc(this.urls.hyperion_url, { fetch });
    this.cApi = new DaosChainApi(this.urls.nodeos_url, services.daos_contract, fetch);
    this.poolsRpcApi = new PoolsRpcApi(this.urls.nodeos_url, services.staking_contract, fetch);
    this.poolRpcApi = new PoolRpcApi(this.urls.nodeos_url, services.maindao_contract, fetch)

    this.aGen = new DaosAG(services.daos_contract, services.staking_contract);
    this.mGen = new MainDAOActionGenerator(services.maindao_contract, services.token_contract);
    this.pGen = new PoolsActionGenerator(services.staking_contract, services.maindao_contract);
    this.sdkGen = new sdkActionGen(services.eosio_contract, services.token_contract);
    
    this.services = services;
  }

  /**
   * Create a key pair assuming a secure environment (not frontend)
   * @returns A key pair
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
   * Create a user
   * @returns Create User transaction id
   */
  async createUser(inpt: NCO.NCCreateUser) {

    const {
      newUser, newacc_pub_active_key, newacc_pub_owner_key,
      payer, payer_prv_key,
      ram_amt, net_amount, cpu_amount, xfer
    } = { ...CREATE_ACCOUNT_DEFAULTS, ...inpt };

    let t: any;
    let res: NCReturnTxs = {};
    let tres: TransactResult;

    let newacc_action = this.sdkGen.newaccount(newUser, payer, newacc_pub_active_key, newacc_pub_owner_key);
    let buyram_action = this.sdkGen.buyrambytes(newUser, payer, ram_amt);
    let delegatebw_action = this.sdkGen.delegateBw(newUser, payer, net_amount, cpu_amount, xfer);
    let payer_pub_key = ecc.privateToPublic(payer_prv_key);

    console.log("before create account transaction");
    tres = await this.SubmitTx(
      [newacc_action, buyram_action, delegatebw_action],
      [payer_pub_key],
      [payer_prv_key]
    ) as TransactResult;// [] contained      
    res.TxID_createAcc = tres.transaction_id;
    console.log("createuser transaction complete");

    return res;
  }

  /**
   * Create collection
   * @returns Create Collection and template transactions' ids
   */
  async createCollection(inpt: NCCreateCollection) {

    let t: any;
    let res: NCReturnTxs = {};
    let tres: TransactResult;

    let d = 12 - inpt.user.length;
    if (inpt.collection_name == undefined) inpt.collection_name = normalizeUsername(inpt.user, "z");//(inpt.creator).replace('.', 'z' + 'z'.repeat(d));
    if (inpt.schema_name == undefined) inpt.schema_name = normalizeUsername(inpt.user, "w"); // (inpt.creator).replace('.', 'w' + 'w'.repeat(d));

    let user_public_active_key = ecc.privateToPublic(inpt.user_prv_active_key);
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
    console.log(t);
    console.log("createcol transaction");
    tres = await this.SubmitTx([t],
      [user_public_active_key],
      [inpt.user_prv_active_key]
    ) as TransactResult;
    res.TxID_createCol = tres.transaction_id;

    console.log("creating schema");
    let schema_fields = inpt.schema_fields ? inpt.schema_fields : default_schema;
    t = this.sdkGen.createSchema(
      inpt.user, inpt.user,
      inpt.collection_name, inpt.schema_name,
      schema_fields);
    console.log(t);

    console.log("createsch transaction");
    tres = await this.SubmitTx([t],
      [user_public_active_key],
      [inpt.user_prv_active_key]
    ) as TransactResult;
    res.TxID_createSch = tres.transaction_id;

    console.log("creating template");
    let template = inpt.template_fields ? inpt.template_fields : [];
    let xferable = inpt.xferable ? inpt.xferable : true;
    let burnable = inpt.burnable ? inpt.burnable : true;
    let max_supply = inpt.max_supply ? inpt.max_supply : 0xffffff;
    t = this.sdkGen.createTemplate(inpt.user, inpt.collection_name, inpt.schema_name, xferable, burnable, max_supply, template);
    console.log(t);

    console.log("creating template transaction");
    tres = await this.SubmitTx([t],
      [user_public_active_key],
      [inpt.user_prv_active_key]
    ) as TransactResult;
    res.TxID_createTpl = res.TxID_createTpl;
    return res;
  }

  /**
   * Create a new permission subject to Active permission.
   * @returns Create permission transaction id
   */
  async createPermission(inpt: NCCreatePermission) {
    let t = this.sdkGen.createPermission(inpt.author, inpt.perm_name, inpt.perm_pub_key);
    let res = await this.SubmitTx([t],
      [ecc.privateToPublic(inpt.author_prv_active_key)],
      [inpt.author_prv_active_key]
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_createPerm = res.transaction_id;
    return r;
  }

  /**
   * Link a permission to a specific action of a specific contract. 
   * @returns Link permission transaction id
   */
  async linkPermission(inpt: NCLinkPerm) {
    const linkauth_input = {
      account: inpt.author,      // the permission's owner to be linked and the payer of the RAM needed to store this link
      code: inpt.action_owner,         // the owner of the action to be linked
      type: inpt.action_to_link,      // the action to be linked
      requirement: inpt.perm_to_link,   // 'active', 'owner' ... 
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
      [ecc.privateToPublic(inpt.author_prv_active_key)],
      [inpt.author_prv_active_key]
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_linkPerm = res.transaction_id;
    return r;
  }

  /**
   * Create a staking pool for an account
   * @returns Create Pool transaction id
   */
  async createPool(inpt: NCCreatePool) {
    inpt.ticker = (inpt.ticker || inpt.owner.substring(0, 3)).toUpperCase();
    inpt.is_inflatable ??= true;
    inpt.is_deflatable ??= true;
    inpt.is_treasury   ??= false;

    console.log("Creating pool: " + JSON.stringify(inpt));
    let t = this.sdkGen.createPool(
      inpt.owner, 
      inpt.ticker,
      inpt.is_inflatable,
      inpt.is_deflatable,
      inpt.is_treasury,
      "test pool for " + inpt.owner);

    let res = await this.SubmitTx([t],
      [ecc.privateToPublic(inpt.owner_prv_active_key)],
      [inpt.owner_prv_active_key]
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_createPool = res.transaction_id;
    return r;
  }

  /**
   * Stake mainDAO
   * @param inpt 
   * @returns 
   */
  async stakeMainDAO(inpt: NCStakeMainDao) {
    let r: NCReturnTxs = {};
    
    const stakeTx = await this.mGen.stake(
      [{ actor: inpt.payer, permission: "active" }],
      inpt.payer,
      inpt.amt);

    console.log("action: " + JSON.stringify(stakeTx));
    const res = await this.SubmitTx(stakeTx,
      [ecc.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]) as TransactResult;

    r.TxID_stakeMainDAO = res.transaction_id;
    return r;
  }

  /**
  * inst UnStake mainDAO
  * @param inpt 
  * @returns 
  */
  async instUnstakeMainDAO(inpt: NCStakeMainDao) {
    let r: NCReturnTxs = {};

    const stakeTx = await this.mGen.instunstake(
      [{ actor: inpt.payer, permission: "active" }],
      inpt.payer,
      inpt.amt);

    console.log("action: " + JSON.stringify(stakeTx));
    const res = await this.SubmitTx(stakeTx,
      [ecc.privateToPublic(inpt.payer_prv_key)],
      [inpt.payer_prv_key]) as TransactResult;

    r.TxID_unstakeMainDAO = res.transaction_id;
    return r;

  }

  /**
   * delayed UnStake mainDAO
   * @param inpt 
   * @returns 
   */
  async dldUnstakeMainDAO(inpt: NCStakeMainDao) {
    let r: NCReturnTxs = {};
    const stakeTx = await this.mGen.dldunstake(
      [{ actor: inpt.payer, permission: "active" }],
      inpt.payer,
      inpt.amt);

    console.log("action: " + JSON.stringify(stakeTx));
    const res = await this.SubmitTx(stakeTx,
      [ecc.privateToPublic(inpt.payer_prv_key)],
      [inpt.payer_prv_key]) as TransactResult;

    r.TxID_unstakeMainDAO = res.transaction_id;
    return r;

  }

  /**
   * Stake to pool
   * @returns Create Pool transaction id
   */
  async stakePool(inpt: NCStakePool) {

    let p: PoolsPayload = { owner: inpt.owner };
    let r: NCReturnTxs = {};
    type RetT = { rows: PoolsPayload[] };

    console.log("Get poolbyowner: ", JSON.stringify(p));
    let q = await this.poolsRpcApi.getPoolByOwner(p);
    let t = await q.json() as RetT;
    
    const pool_id = t.rows[0].id as string;
    const pool_code = t.rows[0].code as string;

    console.log("pool:" + JSON.stringify(t));

    const stakeTx = await this.pGen.stakeToPool(
      [{ actor: inpt.payer, permission: "active" }],
      inpt.payer, inpt.amt, pool_id);

    console.log("action: " + JSON.stringify(stakeTx));
    const res = await this.SubmitTx(stakeTx,
      [ecc.privateToPublic(inpt.payer_prv_key)],
      [inpt.payer_prv_key]) as TransactResult;

    r.TxID_stakePool = res.transaction_id;
    r.pool_id = pool_id;
    r.pool_code = pool_code;
    return r;
  }

  async unstakePool(inpt: NCUnstakePool) {

    const t = await this.pGen.withdrawFromPool(
      [{ actor: inpt.payer, permission: "active" }], //{ actor: "io", permission: "active"}
      inpt.payer,
      inpt.amt);

    console.log("action: " + JSON.stringify(t));
    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.payer_prv_key)],
      [inpt.payer_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_unstakePool = res.transaction_id;
    return r;

  }

  async addToWhiteList(inpt: NCAddToWhiteList) {
    //const aGen = new PoolsActionGenerator("pools2.nco", "eosio.token");
    /*const t = await this.aGen.createWhiteListProposal(
      [{ actor: inpt.owner, permission: "active" }],
      ~~inpt.dao_id,
      inpt.account);

    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.owner_prv_key)], [inpt.owner_prv_key]) as TransactResult;
  */
    let r: NCReturnTxs = {};
    r.TxID_addToWhiteList = "0";//res.transaction_id;
    return r;
  }

  async removeFromWhiteList(inpt: NCRemoveFromWhiteList) {
    //const aGen = new PoolsActionGenerator("pools2.nco", "eosio.token");
    //const t = await pGen.removeFromWhiteList(
    //  [{ actor: inpt.owner, permission: "active"}],
    //  inpt.pool_id,
    //  inpt.owner);

    //const res = await SubmitTx(t, 
    //  [ecc.privateToPublic(inpt.owner_prv_key)], [inpt.owner_prv_key], 
    //  this._url) as TransactResult;

    let r: NCReturnTxs = {};
    //r.TxID_removeFromWhiteList = res.transaction_id;
    return r;
  }

  async createDao(inpt: NCCreateDao) {

    const t = await this.aGen.createDao(
      [{ actor: inpt.author, permission: "active" }],
      inpt.author,
      inpt.descr
    );
    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.author_prv_key)], [inpt.author_prv_key]) as TransactResult;

    let p: DAOPayload = { owner: inpt.author };
    //console.log("Get dao by owner: ", JSON.stringify(p));
    let q = await this.cApi.getDAOByOwner(p);
    let w = await q.json();
    console.log("received from getDaoByOwner" + JSON.stringify(w));
      
    let r: NCReturnTxs = {};
    r.TxID_createDao = res.transaction_id;
    r.dao_id = w.rows[0].id.toString();
    // r.dao_id = r.dao_id.toString() ; 
    return r;
  }  
  
  async _getDAOidByOwner(owner: string)
  {
    let p: DAOPayload = { owner: owner }
    //console.log("Get dao by owner: ", JSON.stringify(p));
    let q = await this.cApi.getDAOByOwner(p);
    let w = await q.json();

    //console.log("received from getDaoByOwner" + JSON.stringify(w));
    if(!w.rows.length) throw new Error('User has no dao');

    return w.rows[0].id as number;
  }
  
  async _getProposalsIds(dao_id: number, proposer: string){

    let p: ProposalPayload = {
      daoID: dao_id.toString(),
      proposer: proposer
    };

    //console.log("Get proposal by author: ", JSON.stringify(p));
    let q = await this.cApi.getProposalByProposer(p);
    let w = await q.json();
    //console.log("received from getProposalByOwner" + JSON.stringify(w));
    return [w.rows[0].id as number];  // TODO return all ids
  }


  async createDaoProposal(inpt: NCCreateDaoProposal) {

   if (inpt.dao_id == undefined) {
    
      if (inpt.dao_owner == undefined) throw ("DAO undefined");  
      inpt.dao_id = await this._getDAOidByOwner(inpt.dao_owner);

    }

    const t = await this.aGen.createProposal(
      [{ actor: inpt.proposer, permission: "active" }],
      inpt.proposer, inpt.dao_id,
      inpt.title, inpt.summary,
      inpt.url, inpt.vote_start, inpt.vote_end
    );

    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.proposer_prv_key)], [inpt.proposer_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_createDaoProposal = res.transaction_id;
    r.dao_id = inpt.dao_id;
    return r;
  }

  async approveDaoProposal(inpt: NCApproveDaoProposal) {
    
    // find out DAO id
    if (!((inpt.dao_id || -1) >= 0)) {
      if (inpt.dao_owner == undefined) throw ("DAO undefined");  
      inpt.dao_id = await this._getDAOidByOwner(inpt.dao_owner);

    }

    console.log("inpt:", JSON.stringify(inpt));
    console.log("inpt.proposal_id:", JSON.stringify(inpt.proposal_id), !inpt.proposal_id);

    if(typeof inpt.proposal_id === "undefined")
      throw new Error("missing proposal_id");

    // if (inpt.proposal_id == undefined) {
    //   if (inpt.proposal_author == undefined)
    //     throw ("Proposal undefined neither ID nor name");

    //   let p: ProposalPayload = {
    //     daoID: inpt.dao_id.toString(),
    //     proposer: inpt.proposal_author
    //   };

    //   console.log("Get proposal by author: ", JSON.stringify(p));
    //   let q = await this.cApi.getProposalByProposer(p);
    //   let w = await q.json();

    //   console.log("received from getProposalByOwner" + JSON.stringify(w));
    //   inpt.proposal_id = w.rows[0].id as number;
    // }

    const t = await this.aGen.approveProposal(
      [{ actor: inpt.approver, permission: "active" }],
      inpt.dao_id as number, inpt.proposal_id
    );

    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.approver_prv_key)], [inpt.approver_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_approveDaoProposal = res.transaction_id;
    return r;
  }

  async executeDaoProposal(inpt: NCExecuteDaoProposal) {


    if (inpt.dao_id == undefined) {
      if (inpt.dao_owner == undefined) throw ("DAO undefined");  
      inpt.dao_id = await this._getDAOidByOwner(inpt.dao_owner);
    }

    if (inpt.proposal_id == undefined) {
      if (inpt.proposal_author == undefined)
        throw ("Proposal undefined neither ID nor name");

      const ps = await this._getProposalsIds(inpt.dao_id, inpt.proposal_author);
      inpt.proposal_id = ps[0];
    }

    const t = await this.aGen.executeProposal(
      [{ actor: inpt.exec, permission: "active" }],
      inpt.dao_id, inpt.proposal_id
    );

    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.exec_prv_key)], [inpt.exec_prv_key]) as TransactResult;

    let r: NCReturnTxs = {};
    r.TxID_executeDaoProposal = res.transaction_id;
    return r;
  }

  async getDaoProposals(inpt: NCGetDaoProposals) {
    let q, w;
    if (inpt.dao_id == undefined) {
      if (inpt.dao_owner == undefined) 
        throw new Error("Need DAO id or DAO owner");
      inpt.dao_id = (await this._getDAOidByOwner(inpt.dao_owner)).toString();
      
    }

    if(inpt.proposal_author && !inpt.proposal_id) {
      const opt : DaoInterfaces.ProposalPayload = { daoID: inpt.dao_id as string, proposer: inpt.proposal_author}
      q = await this.cApi.getProposalByProposer(opt);
      w = await q.json();
      inpt.proposal_id = (w.rows[0].id).toString();
    } 

    q = await this.cApi.getProposalByID({ daoID: inpt.dao_id as string, id: inpt.proposal_id });
    w = await q.json();
    console.log("received from getProposalByID" + JSON.stringify(w.rows));
    return { ...w, dao_id: inpt.dao_id };
  }

  async voteOnDaoProposal(inpt: NCDaoProposalVote) {
    if (inpt.dao_id == undefined) {
      if (inpt.dao_owner == undefined) 
        throw new Error("Need DAO id or DAO owner");
      let q = await this.cApi.getDAOByOwner({ owner: inpt.dao_owner });
      let w = await q.json();
      console.log("received from getDaoByOwner" + JSON.stringify(w));
      inpt.dao_id = (w.rows[0].id).toString();
    }

    if(!inpt.dao_id) // mostly to silence ts
      throw new Error("No dao id");

    console.log("Vote for DAO proposal", JSON.stringify(inpt));

    const t = await this.aGen.vote(
      [{ actor: inpt.voter, permission: "active" }],
      inpt.voter, 
      inpt.quantity, 
      inpt.proposal_type || "standart",
      inpt.dao_id,
      inpt.proposal_id,
      inpt.option
    );

    console.log("Vote for DAO proposal: ", JSON.stringify(t));
    const res = await this.SubmitTx(t,
      [ecc.privateToPublic(inpt.voter_prv_key)], [inpt.voter_prv_key]) as TransactResult;

    console.log("received from VoteForDaoProposal" + JSON.stringify(res));
    return { TxID_voteDaoProposal: res.transaction_id } as NCReturnTxs;
  }


  async getProposalVotes(inpt: NCGetVotes)
  {
    let q, w;
    /*if (inpt.dao_id == undefined) {
      if (inpt.dao_owner == undefined) 
        throw new Error("Need DAO id or DAO owner");
      inpt.dao_id = (await this._getDAOidByOwner(inpt.dao_owner)).toString();
      
    }

    if(inpt.proposal_author && !inpt.proposal_id) {
      const opt : DaoInterfaces.ProposalPayload = { daoID: inpt.dao_id as string, proposer: inpt.proposal_author}
      q = await this.cApi.getProposalByProposer(opt);
      w = await q.json();
      inpt.proposal_id = (w.rows[0].id).toString();
    } */
    
    q = await this.cApi.getVote({ owner: inpt.owner as string, id: inpt.id });
    w = await q.json();
    console.log("received from getProposalByID" + JSON.stringify(w.rows));
    return w;
  }

  /**
   * Mint an asset
   * @returns Create Pool transaction id
   */
  async mintAsset(inpt: NCMintAsset) {
    let d = 12 - inpt.creator.length;
    if (inpt.col_name == undefined) inpt.col_name = normalizeUsername(inpt.creator, "z");
    if (inpt.sch_name == undefined) inpt.sch_name = normalizeUsername(inpt.creator, "w");
    if (inpt.tmpl_id == undefined) inpt.tmpl_id = -1;

    if (inpt.immutable_data == undefined)
      inpt.immutable_data = [
        { key: 'name', value: ['string', inpt.creator + '_' + (new Date()).getTime()] }
      ];

    if (inpt.mutable_data == undefined)
      inpt.mutable_data = [];

    const t = this.sdkGen.mintAsset(
      inpt.creator, inpt.payer, inpt.col_name, inpt.sch_name, inpt.tmpl_id,
      inpt.immutable_data, inpt.mutable_data
    );

    let res = await this.SubmitTx([t],
      [ecc.privateToPublic(inpt.payer_prv_key)],
      [inpt.payer_prv_key]
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_mintAsset = res.transaction_id;
    return r;
  }

  /**
   * Get trasaction data
   * @returns Tx data
   */
  async getTxData(txid: string) {
    let txi = await this.hrpc.get_transaction(txid);
    console.log(txi); // get template number  txi.actions[1].act.data.template_id
    return txi;
  }

  /**
   * Get account balance
   * @returns Tx data
   */
  async getAccountBalance(acc: NCGetAccInfo) {

    if (!acc.contract)
    {
      
      if(acc.token_name == "GNCO")
        acc.contract = this.services.maindao_contract;
      else 
        if(acc.token_name != "NCO")
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
      //console.log(rc);
      return rc;
    } catch (e) {
      console.log('\nCaught exception: ' + e);
      if (e instanceof RpcError)
        console.log(JSON.stringify(e.json, null, 2));
    }
  }


  /**
   * Transfer NCO between accounts
   * @returns Transfer transaction id
   */
  async _txBalance(contract: string, inpt: NCTxBal): Promise<NCReturnTxs> {
    let r: NCReturnTxs = {};
    let tx = this.sdkGen.txBalance(contract, inpt.payer, inpt.to, inpt.amt, inpt.memo??="");
    let res = await this.SubmitTx([tx],
      [ecc.privateToPublic(inpt.payer_prv_key)],
      [inpt.payer_prv_key]
    ) as TransactResult;
    r.TxID = res.transaction_id;
    return r;
  }

  /**
   * Transfer GNCO between accounts
   * @returns Transfer transaction id
   */
  async txGNCOBalance(inpt: NCTxBal) {
    const r = await this._txBalance(this.services.maindao_contract, inpt);
    return r.TxID;
  }

  /**
   * Transfer NCO between accounts
   * @returns Transfer transaction id
   */
  async txNCOBalance(inpt: NCTxBal) {
    const r = await this._txBalance(this.services.token_contract, inpt);
    return r.TxID;
  }

  /**
   * Transfer pool staking tokens  between accounts
   * @returns Transfer transaction id
   */
  async txDAOTokenBalance(inpt: NCTxBal) {
    const r = await this._txBalance(this.services.staking_contract, inpt);
    return r.TxID;
  }


    /**
   * Get pool info
   * @returns Tx data
   */
  async getPoolInfo(payload: NCGetPoolInfo) {
    const api = new PoolsRpcApi("https://nodeos-dev.newcoin.org", "pools2.nco", fetch); // TODO

    try {
      const fn = payload.code ? "getPoolByCode" : "getPoolByOwner";

      let q = await api[fn](payload);
      let t = await q.json() as NCPoolsInfo;
      //console.log(t.rows[0]);
      //console.log(t.rows[0].total);
      return t;

    } catch (e) {
      console.log('\nCaught exception: ' + e);

      if (e instanceof RpcError)
        console.log(JSON.stringify(e.json, null, 2));
    }

    return {} as NCPoolsInfo;
    ``
  }

  async SubmitTx(
    actions: any[],
    public_keys: string[],   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
    private_keys: string[]  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"]
  ) {
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

    const a = await api.serializeActions(transactionObj.actions);
    const transaction = { ...transactionObj, actions: a };
    const serializedTransaction = api.serializeTransaction(transaction);

    const availableKeys = await api.signatureProvider.getAvailableKeys();
    const requiredKeys = await api.authorityProvider.getRequiredKeys({ transaction, availableKeys });
    const abis = await api.getTransactionAbis(transaction);
    // const pushTransactionArgs: PushTransactionArgs = { serializedTransaction, signatures };
    const pushTransactionArgs: PushTransactionArgs = await api.signatureProvider.sign({
      chainId: info.chain_id, // from getinfo
      requiredKeys: requiredKeys,
      serializedTransaction: serializedTransaction,
      serializedContextFreeData: undefined,
      abis: abis
    });
    //console.log("signed transaction: " + JSON.stringify(pushTransactionArgs));
    /*
    let tr  = serializedTransaction.buffer.toString();
    let eccst = ecc.sign(serializedTransaction, private_keys[0]);
    let pub_from_prv = ecc.privateToPublic(private_keys[0]);
    let sig = pushTransactionArgs.signatures[0];
    let key = ecc.recover(sig, tr);
    let c = ecc.verify(sig, tr, public_keys[0]);
    console.log("signature verification: return %d", c)*/
    return api.pushSignedTransaction(pushTransactionArgs);
  };



}
