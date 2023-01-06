// EOS imports
import { RpcError } from "eosjs";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
const ecc = require("eosjs-ecc-priveos");

// Extra backend services
import { JsonRpc as HJsonRpc } from "@eoscafe/hyperion";

// Newcoin services  
//@ts-ignore
import { ChainApi as PoolsRpcApi } from '@newfound8ion/newcoin.pools-js'
import { ActionGenerator as sdkActionGen, EosioActionObject } from "./actions";
import { RpcApi as AaRpcApi } from "atomicassets";
import { NCO_account_API } from "./accounts";
import { NCO_daos_API } from "./daos";
import { NCO_submit_API } from "./submit";
import { NCO_pools_API } from "./pools";
import { NCO_utils_API } from "./utils";

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

  NCMintAsset, NCMintNftToRoot, NCBindCollection, NCMintFile, NCCreatePermission,
  NCGetAccInfo, NCGetPoolInfo, NCLinkPerm,
  NCPoolsInfo, NCNameType, NCSwapNCOtoCC,
  NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, NCKeyValPair, NCChangeFile, NCModifyAsset, NCMintProfile
} from "./types";

import { default_schema, id_vc_schema, bind_schema, file_schema, profile_schema} from "./schemas"


export {
  NCKeyPair, NCKeyValPair,
  NCCreateUser, NCCreateCollection, NCBuyRam,
  NCCreatePool, NCStakePool, NCUnstakePool,
  NCStakeMainDao, 
  NCCreateDao, NCGetDaoWhiteList, NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, NCCreateDaoStakeProposal,
  NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes, NCGetDaoProposals, NCDaoProposalVote, NCDaoWithdrawVoteDeposit,
  NCMintAsset,  NCBindCollection, NCMintFile, NCCreatePermission,
  NCGetAccInfo, NCGetPoolInfo, NCLinkPerm,
  NCPoolsInfo, NCNameType,
  NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, NCChangeFile, NCModifyAsset, NCMintProfile,
  devnet_services, devnet_urls
};

export { default_schema, id_vc_schema, bind_schema, file_schema, profile_schema };

import { getClaimNftsActions, getClaimWinBidActions, getCreateAuctionActions, getEditAuctionActions, getEraseAuctionActions, getPlaceBidActions } from "./neftymarket";
import { NCClaimNftsParams, NCClaimWinBidParams, NCCreateAuctionParams, NCEditAuctionParams, NCEraseAuctionParams, NeftyMarketParamsBase, NCPlaceBidParams } from "./neftymarket/types";
import { readAsset } from "./io/nft";
import { NCInit, NCInitUrls, NCInitServices, devnet_urls, devnet_urls_prod, devnet_services } from "./io/system";
import { NCO_assets_API } from "./assets";


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
  static defaults = {
    devnet_services,
    devnet_urls,
    devnet_urls_prod,
    default_schema
  };

  static system_names = {
  };

  public daos: NCO_daos_API;
  public pools: NCO_pools_API;
  public  utils: NCO_utils_API;
  public accounts: NCO_account_API;
  public  assets: NCO_assets_API;
  private submitter: NCO_submit_API;

  // @ts-ignore
  private aa_api: AaRpcApi;
  private hrpc: HJsonRpc;
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
    this.debug      = n.debug;
    this.urls       = n.urls;
    this.services   = n.services;
    this.daos       = new NCO_daos_API(n);
    this.pools      = new NCO_pools_API(n);
    this.submitter  = new NCO_submit_API(n);
    this.utils      = new NCO_utils_API(n);
    this.assets     = new NCO_assets_API(n);
    this.accounts   = new NCO_account_API(n);

    this.hrpc       = new HJsonRpc(this.urls.hyperion_url, { fetch } as any);
    this.sdkGen     = new sdkActionGen(this.services.eosio_contract, this.services.token_contract);
    
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
    let t: NCKeyPair = { prv_key: p, pub_key: ecc.privateToPublic(p) };
    return t as NCKeyPair;
  }


  /**
   * Create default collection for the account and schemes
   * @param  NCCreateRootCollection
   * @returns Create Collection and template transactions' ids
   */
  async createRootCollection(name: string, key: string) {

    let res: NCReturnTxs = {};
    let tres: TransactResult;

    const collection_name     = this.utils.getRootCollectionName(name);
    const def_schema_name     = this.utils.getRootCollectionNftSchemaName(name);
    const bind_sch_name       = this.utils.getRootCollectionBindingSchemaName(name);   
    const profile_schema_name = this.utils.getRootCollectionProfileSchemaName(name); 

    let mkt_fee = 0.05;
    let allow_notify = true;

    let t = this.sdkGen.createCollection( name, collection_name, [name], [name], mkt_fee, allow_notify );
    if(this.debug) console.log(t);
    if(this.debug) console.log("createcol transaction");
    tres = await this.submitter.SubmitTx([t], [], [key] ) as TransactResult;
    res.TxID_createCol = tres.transaction_id;
    if(this.debug) console.log(tres);

    // ---- Schemas --- 
    if(this.debug) console.log("creating default NFT schema for root collection ");
    let t1 = this.sdkGen.createSchema(name, collection_name, def_schema_name, default_schema);
    if(this.debug) console.log(t1);
    if(this.debug) console.log("createsch NFT transaction");
    tres = await this.submitter.SubmitTx([t1],[],[key]) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    if(this.debug) console.log(tres);

    if(this.debug) console.log("creating profile schema");
    let t2 = this.sdkGen.createSchema(name,collection_name, profile_schema_name, profile_schema);
    if(this.debug) console.log(t2);
    if(this.debug) console.log("createsch profile transaction");
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

  /** 
   * 
   */
  async mintNftToRoot(inpt: NCMintNftToRoot) {
    let s : NCMintAsset = {
      creator:  inpt.creator,
      col_name: this.utils.getRootCollectionName( inpt.creator ), // root collection
      sch_name: this.utils.getRootCollectionNftSchemaName(inpt.creator), // bind schema
      tmpl_id: -1,
      immutable_data: inpt.immutable_data,
      mutable_data: inpt.mutable_data,
      payer: inpt.payer,
      payer_prv_key: inpt.payer_prv_key
    }

    try { 
      let mint_res  = await this.assets.mintAsset(s) ;
      mint_res.TxID_mintNft = mint_res.TxID_mintAsset;
      if (this.debug) { console.log("minted file: "); console.log(mint_res); }
      return mint_res;
    } catch(e) {
      let err_no_col = "assertion failure with message: No collection with this name exists";
      let err = (e as Error).message;
      console.log("Error message:  " + err);
      if (err != err_no_col) throw e;

      let res = await this.createRootCollection(inpt.creator, inpt.payer_prv_key)
      if(this.debug) { console.log("createcollection of root result: "); console.log(res); }

      try { 
        let mint_res  = await this.assets.mintAsset(s) ;
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

  /**
   * Bind collection to root collection
   * @param inpt: NCAddCollection
   * @returns Create NFT in the root collection referring to 
   */
   async bindCollectionToRoot(inpt: NCBindCollection) {
      
    // todo if no schema then create it
    let s : NCMintAsset = {
      creator: inpt.creator,
      col_name: this.utils.getRootCollectionName( inpt.creator ), // root collection
      sch_name: this.utils.getRootCollectionBindingSchemaName(inpt.creator), // bind schema
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
    let resp = await this.assets.mintAsset(s);      
    resp.TxID_bindCollection =  resp.TxID_mintAsset;
    return resp;
  }

  // @ts-ignore
  static private const STATUS_LIST = {
    semantic: "semantic",
    imported: "imported",
    invited: "invited",
    preregistered: "preregistered",
    registered: "registered",
    admitted: "admitted",
    known: "known",
    offer: "offer"
    // "subscriber"
  };

  async mintProfile(inpt: NCMintProfile) {

      let col_name = this.utils.getRootCollectionName(inpt.creator);
      let sch_name = this.utils.getRootCollectionProfileSchemaName(inpt.creator);
      let tmpl_id = -1;
      let immutable_data : NCKeyValPair[] = [];
      let mutable_data   : NCKeyValPair[] = [
        { key: "status", 'value': ['string',      inpt.status]},
        { key: "offer", 'value': ['string',       inpt.offer ]},

        { key: "displayName", 'value': ['string', inpt.displayName ]},
        { key: "bio",         'value': ['string', inpt.bio??"" ]},

        { key: "fullName", 'value': ['string', inpt.fullName ]},
        { key: "firstName",'value': ['string', inpt.firstName ]},
        { key: "lastName", 'value': ['string', inpt.lastName??"" ]},
        { key: "username", 'value': ['string', inpt.username??"" ]},
        { key: "email",    'value': ['string', inpt.email??""    ]},
        { key: "phone",    'value': ['string', inpt.phone??""    ]},

      // avatar 
        { key: "contentType",     'value': ['string', inpt.contentType     ]},
        { key: "contentUrl",      'value': ['string', inpt.contentUrl      ]},
        { key: "coverContentUrl", 'value': ['string', inpt.coverContentUrl ]},
        { key: "blurHash",        'value': ['string', inpt.blurHash    ]},
        { key: "aspectRatio",     'value': ['string', inpt.aspectRatio ]},
      ];
      
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
      let resp = await this.assets.mintAsset(n);  
      resp.TxID_mintProfile =  resp.TxID_mintAsset;
      return resp;

  } 

    //async mintSocialProof(inpt: NCMintSocialProof)
    //{

    //}


   /**
   * Create File
   * @param inpt: NCMintFile
   * @returns Create file transaction id
   */
    async createFile(inpt: NCMintFile) {

      let col_name = this.utils.getFileCollectionName(inpt.creator);
      let sch_name = this.utils.getFileCollectionFileSchemaName(inpt.creator);
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
        let mint_res  = await this.assets.mintAsset(n) ;
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
            template_name: "-1",
            template_fields: [], 
            user_prv_active_key: inpt.user_prv_active_key,
            allow_notify: true,
            mkt_fee    : 0.00,
            xferable   : false,
            burnable   : false, // undeletable from ceramic
            max_supply : 0xffffff
        };

        let res = await this.assets.createCollection(nco_struct);
        if(this.debug) console.log("createcollection of files result: ")
        if(this.debug) console.log(res);
        

        try { 
          let mint_res  = await this.assets.mintAsset(n) ;
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
      let res = await this.assets.modifyAsset(n);
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
  
 async createUser(inpt: NCCreateUser) { return this.accounts.createUser(inpt); }
 async buyRam(inpt: NCBuyRam) { return this.accounts.buyRam(inpt) }; 

 async createCollection(inpt: NCCreateCollection) { return this.assets.createCollection(inpt);}
 async mintAsset(inpt: NCMintAsset) { return this.assets.mintAsset(inpt); }
 async modifyAsset(inpt: NCModifyAsset) { return this.assets.modifyAsset(inpt); }

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
