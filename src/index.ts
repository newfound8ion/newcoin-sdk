// EOS imports
import { RpcError } from "eosjs";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
//import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig.js';  // development only
//import { PushTransactionArgs } from "eosjs/dist/eosjs-rpc-interfaces";
const ecc = require("eosjs-ecc-priveos");

// Extra backend services
import { JsonRpc as HJsonRpc } from "@eoscafe/hyperion";

// Newcoin services  
//@ts-ignore
import { ActionGenerator as PoolsActionGenerator, ChainApi as PoolsRpcApi } from '@newfound8ion/newcoin.pools-js'

import { ActionGenerator as sdkActionGen, EosioActionObject } from "./actions";
import { RpcApi as AaRpcApi } from "atomicassets";
//import { AssetParams } from "atomicassets/build/API/Explorer/Types";
import { NCO_daos_API } from "./daos";
import { NCO_submit_API } from "./submit";
import { NCO_pools_API } from "./pools";

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
  NCMintAsset, NCBindCollection, NCMintFile, NCCreatePermission,
  NCGetAccInfo, NCGetPoolInfo, NCLinkPerm,
  NCPoolsInfo, NCNameType, NCSwapNCOtoCC,
  NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, NCKeyValPair, NCChangeFile, NCModifyAsset, 
} from "./types";

import {
  default_schema, SBT_NFT_schema, bind_schema, file_schema
} from "./schemas"


export {
  NCKeyPair, NCKeyValPair,
  NCCreateUser, NCCreateCollection,
  NCCreatePool, NCStakePool, NCUnstakePool,
  NCStakeMainDao, 
  NCCreateDao, NCGetDaoWhiteList, NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, NCCreateDaoStakeProposal,
  NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes, NCGetDaoProposals, NCDaoProposalVote, NCDaoWithdrawVoteDeposit,
  NCMintAsset,  NCBindCollection, NCMintFile, NCCreatePermission,
  NCGetAccInfo, NCGetPoolInfo, NCLinkPerm,
  NCPoolsInfo, NCNameType,
  NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, NCChangeFile, NCModifyAsset, 
  devnet_services, devnet_urls
};

export { default_schema, SBT_NFT_schema, bind_schema, file_schema };

import { normalizeUsername } from "./utils";

import { getClaimNftsActions, getClaimWinBidActions, getCreateAuctionActions, getEditAuctionActions, getEraseAuctionActions, getPlaceBidActions } from "./neftymarket";
import { NCClaimNftsParams, NCClaimWinBidParams, NCCreateAuctionParams, NCEditAuctionParams, NCEraseAuctionParams, NeftyMarketParamsBase, NCPlaceBidParams } from "./neftymarket/types";

import { atomicTxToAssetId, readAsset } from "./io/nft";
import { NCInit, NCInitUrls, NCInitServices, devnet_urls, devnet_urls_prod, devnet_services } from "./io/system";


//import { NCO_daos_API } from "./daos";

/**
 * The primary tool to interact with [https://newcoin.org](newcoin.org).
 * 
 * This is an early alpha.
 * 
 * See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.
 */
export class NCO_BlockchainAPI {

  private debug: boolean = false;
  private urls: NCInitUrls;
  private services: NCInitServices;

  public daos: NCO_daos_API;
  public pools: NCO_pools_API;

  static defaults = {
    devnet_services,
    devnet_urls,
    devnet_urls_prod,
    default_schema
  };

  static system_names = {
  }

  // @ts-ignore
  private aa_api: AaRpcApi;
  private hrpc: HJsonRpc;
  private submitter: NCO_submit_API;

//  private mGen: MainDAOActionGenerator;

 // private poolRpcApi: PoolRpcApi;

//  private poolsRpcApi: PoolsRpcApi;
  //private pGen: PoolsActionGenerator;
  private sdkGen: sdkActionGen;

  

  /**
   * Init the api
   * @name newcoin-api
   * @param urls
   * @param services 
   * @returns a Newcoin API instance
   */
  constructor( n: NCInit )
  {

    //super();

    //this.debug = debug;
    //if(this.debug) console.log("Init URLS " + JSON.stringify(urls));
    //this.isProxy = n.is_proxy;
    this.debug = n.debug;
    this.urls = n.urls;
    this.services = n.services;
    this.daos = new NCO_daos_API(n);
    this.pools = new NCO_pools_API(n);
    this.submitter = new NCO_submit_API(n);


    //this.aa_api  = new AaRpcApi(this.urls.atomicassets_url, "atomicassets", {fetch, rateLimit: 4} as any);
    //this.aa_api = new ExplorerApi(, urls_, { fetch });
    //this.nodeos_rpc = new JsonRpc(this.urls.nodeos_url, { fetch });
    this.hrpc = new HJsonRpc(this.urls.hyperion_url, { fetch } as any);
    this.sdkGen = new sdkActionGen(this.services.eosio_contract, this.services.token_contract);
    
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
    const tres = await this.submitter.SubmitTx(
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
  const tres = await this.submitter.SubmitTx(
    [buyram_action],
    [],
    [inpt.payer_prv_key]
  ) as TransactResult;// [] contained       
  return { TxID_createAcc: tres.transaction_id, TxID: tres.transaction_id, originalResponse: tres } as NCReturnTxs;

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

    if (inpt.collection_name == undefined) throw "must supply collection name";
    if (inpt.schema_name == undefined) throw "must supply schema name";
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
    tres = await this.submitter.SubmitTx([t], [],[inpt.user_prv_active_key]) as TransactResult;
    res.TxID_createCol = tres.transaction_id;
    if(this.debug) console.log(tres);

    // Schemas --- 
    if(this.debug) console.log("creating schema ");
    let schema_fields = inpt.schema_fields ? inpt.schema_fields : default_schema;
    let t1 = this.sdkGen.createSchema(inpt.user, inpt.collection_name, inpt.schema_name, schema_fields);
    if(this.debug) console.log(t1);
    
    if(this.debug) console.log("createsch transaction");
    tres = await this.submitter.SubmitTx([t1],[],[inpt.user_prv_active_key]) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);

    if(this.debug) console.log("creating template");
    let template = inpt.template_fields ? inpt.template_fields : [];
    let xferable = inpt.xferable ? inpt.xferable : true;
    let burnable = inpt.burnable ? inpt.burnable : true;
    t = this.sdkGen.createTemplate(inpt.user, inpt.collection_name, inpt.schema_name, xferable, burnable, template);
    if(this.debug) console.log(t);

    if(this.debug) console.log("creating template transaction");
    tres = await this.submitter.SubmitTx([t], [], [inpt.user_prv_active_key] ) as TransactResult;
    res.TxID_createTpl = res.TxID_createTpl;
    if(this.debug) console.log(tres);

    return res;
  }

  /**
   * Create default collection for the account
   * @param  NCCreateCollection
   * @returns Create Collection and template transactions' ids
   */
  async createRootCollection(name: string, key: string) {

    let t: any;
    let res: NCReturnTxs = {};
    let tres: TransactResult;

    const collection_name = normalizeUsername(name, "z");
    const def_schema_name = normalizeUsername(name, "w");
    const sbt_sch_name = normalizeUsername(name, "s");
    const bind_sch_name = normalizeUsername(name, "b");

    let mkt_fee = 0.05;
    let allow_notify = true;

    t = this.sdkGen.createCollection( name, collection_name, [name], [name], mkt_fee, allow_notify );
    if(this.debug) console.log(t);
    if(this.debug) console.log("createcol transaction");
    tres = await this.submitter.SubmitTx([t], [], [key] ) as TransactResult;
    res.TxID_createCol = tres.transaction_id;
    if(this.debug) console.log(tres);

    // ---- Schemas --- 
    if(this.debug) console.log("creating schema ");
    let schema_fields = default_schema;
    let t1 = this.sdkGen.createSchema(name, collection_name, def_schema_name, schema_fields);
    if(this.debug) console.log(t1);
    
    if(this.debug) console.log("createsch transaction");
    tres = await this.submitter.SubmitTx([t1],[],[key]) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);

    if(this.debug) console.log("creating SBT schema");
    let t2 = this.sdkGen.createSchema(name,collection_name, sbt_sch_name, SBT_NFT_schema);
    if(this.debug) console.log(t2);

    if(this.debug) console.log("createsch SBT transaction");
    tres = await this.submitter.SubmitTx([t2],[],[key]) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);

    if(this.debug) console.log("creating collection bind schema");
    let t3 = this.sdkGen.createSchema(name, collection_name, bind_sch_name, bind_schema);
    if(this.debug) console.log(t3);
    if(this.debug) console.log("createsch collection bind transaction");
    tres = await this.submitter.SubmitTx([t3],[],[key]) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);

    if(this.debug) console.log("creating template");
    let template : any[] = [];
    let xferable = false;
    let burnable = false;
    t = this.sdkGen.createTemplate(name, collection_name, def_schema_name, xferable, burnable, template);
    if(this.debug) console.log(t);

    if(this.debug) console.log("creating template transaction");
    tres = await this.submitter.SubmitTx([t], [], [key] ) as TransactResult;
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
    let res = await this.submitter.SubmitTx([t],[],[inpt.author_prv_active_key]) as TransactResult;
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

    let res = await this.submitter.SubmitTx([action],
      [],
      [inpt.author_prv_active_key]
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_linkPerm = res.transaction_id;
    return r;
  }


  

  async swapNcoToCreatorCoin( inpt: NCSwapNCOtoCC ) { 


    console.log("trying to swap to GNCO :  " + inpt.amt);
    this.debug = true;

    let n: NCStakeMainDao = { 
      amt: inpt.amt, 
      payer: inpt.payer,
      payer_prv_key: inpt.payer_prv_key
    };

    let resp1  = await this.pools.stakeMainDAO(n) as NCReturnTxs;
    if(this.debug) console.log(resp1);
    //@ts-ignore
    let gnco_amt= resp1.tx.processed.action_traces[0].inline_traces[3].act.data.quantity ;
    
    //@ts-ignore
    /*let t = resp.tx.processed.action_traces[0].inline_traces ? resp.tx.processed.action_traces[0].inline_traces : [];
    console.log(t[0]?t[0]:"undef");console.log("*");
    console.log(t[1]?t[1]:"undef");console.log("*");
    console.log(t[2]?t[2]:"undef");console.log("*");
    console.log(t[3]?t[3]:"undef");console.log("*");*/
    
    // get how much GNCO was received
    console.log("trying to swap to CC :  " + gnco_amt);
    let m: NCStakePool = { 
      owner: inpt.creator_to, 
      amt:  gnco_amt, 
      payer: inpt.payer,//'io',  
      payer_prv_key: inpt.payer_prv_key
    };      
     
    let resp2 = await this.pools.stakePool(m);
    if(this.debug) console.log(resp2);
    
    return resp2;
}
 

 // Collection rules: 
  // Root collection: with Z instead of dot in name
  // schema name for assets: with W
  // Files collection: with 

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
        inpt.immutable_data, inpt.mutable_data, inpt.payer
      );
  
      const keys = [inpt.payer_prv_key,inpt.user_prv_active_key].filter(Boolean) as string[];
      let res = await this.submitter.SubmitTx([t], [], keys) as TransactResult;

      let r: NCReturnTxs = {};
      r.TxID_mintAsset = res.transaction_id;
      r.asset_id = "asset default ID";
      try {
        r.asset_id = (await atomicTxToAssetId(res.transaction_id))[0];
      } catch (ex) {
        // asset may not be ready. polling is one solution to wait but if implemented must be optional
        console.log((ex as any).message);
        throw ex;
      }
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
  
    
  /**
   * Modify existing asset in an asset mutable data
   * @param inpt: NCModifyAsset
   * @returns asset id
   */
    async modifyAsset(inpt: NCModifyAsset) {
      
      const t = this.sdkGen.modifyAsset(inpt.editor, inpt.owner, inpt.asset_id, inpt.new_data);
      console.log("modify asset: " + JSON.stringify(t));
      let res = await this.submitter.SubmitTx([t], [], [inpt.payer_prv_key]) as TransactResult;
      let r: NCReturnTxs = {};
      r.TxID_modifyAsset = res.transaction_id;
      r.asset_id = inpt.asset_id;
      return r;    
    }

  /**
   * Bind collection to root collection
   * @param inpt: NCAddCollection
   * @returns Create NFT in the root collection referring to 
   */
   async bindCollection(inpt: NCBindCollection) {
      
    // todo if no schema then create it
    let s : NCMintAsset = {
      creator: inpt.creator,
      col_name: normalizeUsername(inpt.creator, "z"), // root collection
      sch_name: normalizeUsername(inpt.creator, "b"), // bind schema
      tmpl_id: -1,
      immutable_data: [    
          {'key': 'name', 'value': ['string', inpt.col_name]},
          {'key': 'description','value': ['string', inpt.description]}, 
          {'key': 'image','value': ['string', inpt.image]}
      ],
      mutable_data: [],
      payer: inpt.payer,
      payer_prv_key: inpt.payer_prv_key
    };
    let resp = await this.mintAsset(s);      
    resp.TxID_bindCollection =  resp.TxID_mintAsset;
    return resp;
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
      debugger;
      let n : NCMintAsset = {
        creator: inpt.creator,
        payer: inpt.payer,
        immutable_data: immutable_data,
        mutable_data: mutable_data,
        col_name: col_name,
        sch_name: sch_name,
        tmpl_id: tmpl_id,
        payer_prv_key: inpt.payer_prv_key ,
        user_prv_active_key: inpt.user_prv_active_key
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
        if (err != err_no_col) throw e;

        let nco_struct : NCCreateCollection = {
            user: inpt.creator, 
            collection_name: col_name,
            schema_name: sch_name,
            schema_fields: file_schema,
            template_name: normalizeUsername(inpt.creator, "t"),
            template_fields: [], 
            user_prv_active_key: inpt.user_prv_active_key,
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

          throw e;
        }
      }; 
    }

    async changeFile(inpt: NCChangeFile) 
    {
      const old = await readAsset(inpt.asset_id);
      console.log("changing file : ... " + JSON.stringify(old.mutable_data));
      let data = [
        {'key': 'name', 'value': ['string', inpt.new_name ?? old.mutable_data.name]},
        {'key': 'path','value': ['string', inpt.new_path?? old.mutable_data.path]}, 
        {'key': 'content','value': ['string',  inpt.new_content?? old.mutable_data.content]},
        {'key': 'image','value': ['string',  inpt.new_image??old.mutable_data.image ]}
    ];

      let n : NCModifyAsset = {
        editor: inpt.editor,
        owner: inpt.editor,
        asset_id: inpt.asset_id,
        new_data: data,
        payer: inpt.payer??inpt.editor,
        payer_prv_key: inpt.payer_prv_key

      };
      let res = await this.modifyAsset(n);
      res.TxID_changeFile=res.TxID_modifyAsset;
      res.asset_id = inpt.asset_id;
      console.log("modify asset res: "+ JSON.stringify(res));
      return res;
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
      let res = await this.submitter.SubmitTx([tx],
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
    const response = await this.submitter.SubmitTx(
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
  
// to be deprecated
 async stakeMainDAO(inpt: NCStakeMainDao) { return this.pools.stakeMainDAO(inpt); }
 async instUnstakeMainDAO(inpt: NCStakeMainDao) { return this.pools.stakeMainDAO(inpt); }
 async dldUnstakeMainDAO(inpt: NCStakeMainDao) { return this.pools.dldUnstakeMainDAO(inpt); }
 
 async createPool(inpt: NCCreatePool) { return this.pools.createPool(inpt); }
 async stakePool(inpt: NCStakePool) { return this.pools.stakePool(inpt); } 
 async unstakePool(inpt: NCUnstakePool) { return this.pools.unstakePool(inpt); }
 
 async createDao(inpt: NCCreateDao) { return this.daos.createDao(inpt);}

 async createDaoProposal(inpt: NCCreateDaoProposal) { return this.daos.createDaoProposal(inpt); }
 async createDaoUserWhitelistProposal(inpt: NCCreateDaoUserWhitelistProposal) { return this.daos.createDaoUserWhitelistProposal(inpt); }
 async createDaoStakeProposal(inpt: NCCreateDaoStakeProposal) { return this.daos.createDaoStakeProposal(inpt); }

 async approveDaoProposal(inpt: NCApproveDaoProposal) { return this.daos.approveDaoProposal(inpt); }
 async approveDaoWhitelistProposal(inpt: NCApproveDaoProposal) { return this.daos.approveDaoWhitelistProposal(inpt); }
 async approveDaoStakeProposal(inpt: NCApproveDaoProposal) { return this.daos.approveDaoStakeProposal(inpt); }
 
 async executeDaoProposal(inpt: NCExecuteDaoProposal) { return this.daos.executeDaoProposal(inpt); }
 async executeDaoWhitelistProposal(inpt: NCExecuteDaoProposal) { return this.daos.executeDaoWhitelistProposal(inpt); }
 async executeDaoStakeProposal(inpt: NCExecuteDaoProposal) { return this.daos.executeDaoStakeProposal(inpt);}

 async voteOnProposal(inpt: NCDaoProposalVote) { return this.daos.voteOnProposal(inpt) };
 async withdrawVoteDeposit(inpt: NCDaoWithdrawVoteDeposit) { return this.daos.withdrawVoteDeposit(inpt); }

 async submitTx(actions: any[], public_keys: string[], private_keys: string[] ) {   this.submitter.SubmitTx(actions,public_keys, private_keys); }
}
