import { NCInit, NCInitServices, NCInitUrls }  from "./io/system";
import { NCCreateUser, NCReturnTxs, NCBuyRam } from "./types";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { ActionGenerator as sdkActionGen } from "./actions";
import { NCO_submit_API } from "./submit"
import { NCO_utils_API } from "./utils";

export { NCO_account_API }

class NCO_account_API {
    private debug    : boolean;
    private services : NCInitServices;
    // @ts-ignore
    private urls     : NCInitUrls; 
    private sdkGen   : sdkActionGen;
    private submitter: NCO_submit_API; 
    // @ts-ignore
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
}