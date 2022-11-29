
import { NCInit, NCInitServices, NCInitUrls } from "./io/system";

import { Api, JsonRpc } from "eosjs";
import { Transaction  } from "eosjs/dist/eosjs-api-interfaces";
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig.js';  // development only
import { PushTransactionArgs } from "eosjs/dist/eosjs-rpc-interfaces";
import fetch from 'cross-fetch';
const ecc = require("eosjs-ecc-priveos");

export { NCO_submit_API }

class NCO_submit_API {
    private isProxy: boolean; 
    private debug : boolean;
    // @ts-ignore
    private services : NCInitServices;
    private urls: NCInitUrls; 

    private nodeos_rpc: JsonRpc;
  
    constructor( inpt: NCInit ) {
        this.isProxy = inpt.is_proxy;
        this.debug = inpt.debug;
        this.services = inpt.services;
        this.urls = inpt.urls;
        this.nodeos_rpc = new JsonRpc(this.urls.nodeos_url, { fetch });
    }

    async SubmitTx (
        actions: any[],
        public_keys: string[],   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
        private_keys: string[],  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"]
        )  
        {
          if(this.debug) console.log("Submitted transaction: " + JSON.stringify({ actions, public_keys, private_keys }));
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
              this.urls.nodeos_proxy_url || this.urls.nodeos_url,
              { method: "POST", body: args, headers: { "Authorization": `${private_keys[0]}`, "Content-Type": "application/json" } });
    
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
        //console.log(pushTransactionArgs);
        return api.pushSignedTransaction(pushTransactionArgs);
      };
    

}
