import { NCInit, NCInitServices, NCInitUrls } from "./io/system";
import { NCMintAsset, NCCreateCollection, NCReturnTxs, NCModifyAsset } from "./types";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { ActionGenerator as sdkActionGen } from "./actions";
import { NCO_submit_API } from "./submit"
import { NCO_utils_API } from "./utils";
import { default_schema } from "./schemas";
import { atomicTxToAssetId } from "./io/nft";

export { NCO_assets_API }

class NCO_assets_API {
    private debug    : boolean;
    private services : NCInitServices;
    // @ts-ignore
    private urls     : NCInitUrls; 
    private sdkGen   : sdkActionGen;
    private submitter: NCO_submit_API; 
    private utils    : NCO_utils_API;

    constructor( inpt: NCInit ) {
        this.debug      = inpt.debug;
        this.services   = inpt.services;
        this.urls       = inpt.urls;
        this.submitter  = new NCO_submit_API(inpt);
        this.sdkGen     = new sdkActionGen(this.services.eosio_contract, this.services.token_contract);
        this.utils      = new NCO_utils_API(inpt);
        this.urls       = inpt.urls;
    }

    SubmitTx = (
        actions: any[],
        public_keys: string[],   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
        private_keys: string[]  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"]) 
        ) => {
        return this.submitter.SubmitTx(
            actions,
            public_keys,   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
            private_keys);  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"])
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
   * Mint an asset
   * @param inpt: NCMintAsset
   * @returns Create Pool transaction id
   */
    async mintAsset(inpt: NCMintAsset) {

        let r: NCReturnTxs = {};
        if (inpt.col_name == undefined) inpt.col_name = this.utils.getRootCollectionName(inpt.creator);
        if (inpt.sch_name == undefined) inpt.sch_name = this.utils.getRootCollectionBindingSchemaName(inpt.creator);    
        if (inpt.tmpl_id == undefined) inpt.tmpl_id = -1;
        if ( (inpt.immutable_data == undefined) && (inpt.mutable_data == undefined) ) return r; // nothing to mint
        if (inpt.immutable_data == undefined) inpt.immutable_data = [{ key: 'name', value: ['string', inpt.creator + '_' + (new Date()).getTime()] }];
        if (inpt.mutable_data == undefined) inpt.mutable_data = [];
  
        const t = this.sdkGen.mintAsset(
          inpt.creator, inpt.col_name, inpt.sch_name, inpt.tmpl_id,
          inpt.immutable_data, inpt.mutable_data, inpt.payer
        );
        const keys = [inpt.payer_prv_key, inpt.user_prv_active_key].filter(Boolean) as string[];
        let   res  = await this.submitter.SubmitTx([t], [], keys) as TransactResult;
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
    }