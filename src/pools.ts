import { NCInit, NCInitServices, NCInitUrls } from "./io/system";

import { NCCreatePool, NCStakePool, NCUnstakePool,
        NCStakeMainDao, NCReturnTxs } from "./types";

import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
//const ecc = require("eosjs-ecc-priveos");
import fetch from 'cross-fetch';

import { ActionGenerator as PoolsActionGenerator, ChainApi as PoolsRpcApi } from '@newfound8ion/newcoin.pools-js'
import { PoolPayload as PoolsPayload } from '@newfound8ion/newcoin.pools-js/dist/interfaces/pool.interface';
import { ActionGenerator as MainDAOActionGenerator } from '@newfound8ion/newcoin.pool-js'
import { ActionGenerator as sdkActionGen  } from "./actions";

import { NCO_submit_API } from "./submit"
export { NCO_pools_API }

class NCO_pools_API {
    private debug : boolean;
    private services : NCInitServices;
    private urls: NCInitUrls; 

    private mGen: MainDAOActionGenerator;
    private poolsRpcApi: PoolsRpcApi;
    private pGen: PoolsActionGenerator;
    private sdkGen: sdkActionGen;
    private submitter: NCO_submit_API; 

    constructor( inpt: NCInit ) {
        this.debug = inpt.debug;
        this.services = inpt.services;
        this.urls = inpt.urls;
    
        this.mGen = new MainDAOActionGenerator(this.services.maindao_contract, this.services.token_contract);
        this.poolsRpcApi = new PoolsRpcApi(this.urls.nodeos_url, this.services.staking_contract, fetch);
        this.pGen = new PoolsActionGenerator(this.services.staking_contract, this.services.maindao_contract);
        this.sdkGen = new sdkActionGen(this.services.eosio_contract, this.services.token_contract);
        this.submitter = new NCO_submit_API(inpt);
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

    const stakeTx = await this.mGen.stake( [{ actor: inpt.payer, permission: "active" }], inpt.payer, inpt.amt);
    if(this.debug) console.log("action: " + JSON.stringify(stakeTx));
    const res = await this.SubmitTx(stakeTx, [], [inpt.payer_prv_key]) as TransactResult;

    r.TxID_stakeMainDAO = res.transaction_id;
    r.tx = res;
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



}