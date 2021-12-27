import { Api, JsonRpc, RpcError } from "eosjs";
import { Transaction, TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';  // development only
import { PushTransactionArgs, ReadOnlyTransactResult } from "eosjs/dist/eosjs-rpc-interfaces";
import { GetTransaction, JsonRpc as HJsonRpc } from "@eoscafe/hyperion"

import { RpcApi } from '@newcoin-foundation/newcoin.pools-js/'
import { PoolPayload } from '@newcoin-foundation/newcoin.pools-js/dist/interfaces/pool.interface';
//import * as farm  from '@newcoin-foundation/newcoin.farm-js'
//@ts-ignore 
import fetch from 'cross-fetch';
import { 
    NCCreateUser, NCCreatePool, NCStakeToPool, NCMintAsset, NCTxNcoBal,
    NCGetAccInfo, NCGetPoolInfo, 
    NCPoolsInfo, 
    NCReturnTxs,  NCReturnInfo 
  } from "./types"; 
export * from './types'
//const fetch = require('node-fetch');

const _newaccount = (
  new_name: string,
  payer: string = 'io',
  newacc_public_active_key: string = 'EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT', // testnet
  newacc_public_owner_key: string = 'EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT'    //testnet
) => (
  {
    account: 'eosio',
    name: 'newaccount', // action
    authorization: [{
      actor: payer,
      permission: 'active',
    }],
    data: {
      creator: payer,
      name: new_name,
      owner: {
        threshold: 1,
        keys: [{
          key: newacc_public_active_key,
          weight: 1
        }],
        accounts: [],
        waits: []
      },
      active: {
        threshold: 1,
        keys: [{
          key: newacc_public_owner_key,
          weight: 1
        }],
        accounts: [],
        waits: []
      },
    }
  });

const _buyrambytes = (
  receiver: string,
  payer: string = 'io',
  amt: number = 8192
) => ({
  account: 'eosio',
  name: 'buyrambytes',
  authorization: [{
    actor: payer,
    permission: 'active',
  }],
  data: {
    payer: payer,
    receiver: receiver,
    bytes: amt,
  },
});

const _delegateBw = (
  receiver: string,
  payer: string = 'io',
  net_amount: string = '100.0000 NCO',
  cpu_amount: string = '100.0000 NCO',
  trfer: boolean = true
) =>
({
  account: 'eosio',
  name: 'delegatebw',
  authorization: [{
    actor: payer,
    permission: 'active',
  }],
  data: {
    from: payer,
    receiver: receiver,
    stake_net_quantity: net_amount,
    stake_cpu_quantity: cpu_amount,
    transfer: trfer,
  }
});

const _createUser = async (
  newUser: string,
  payer: string,
  public_active_key: string,
  public_owner_key: string
) => {

  let newacc_action = _newaccount(newUser, payer, public_active_key, public_owner_key);
  let buyram_action = _buyrambytes(newUser, payer);
  let delegatebw_action = _delegateBw(newUser, payer);

  return [newacc_action, buyram_action, delegatebw_action]
};

const _createCollection = (
  author: string,
  collection_name: string,
  payer: string = 'io',
  authorized_accounts: string[] = [author, payer],
  notify_accounts: string[] = [],
  market_fee: number = 0.05,
  allow_notify: boolean = false
) => {
  const action: any = {
    account: 'atomicassets',
    name: 'createcol',
    data: {
      author: author,
      collection_name: collection_name,
      allow_notify: allow_notify,
      authorized_accounts: authorized_accounts,
      notify_accounts: notify_accounts,
      market_fee: market_fee,
      data: []
    },
    authorization: [
      { actor: author, permission: 'active' },
      //{ actor: payer, permission: 'active'},
    ]
  }
  return action;
}

const _createSch = (
  author: string,
  collection_name: string,
  schema_name: string,
  sch: any[] = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'external_url', type: 'string' }
  ]
  //{name: "attributes", type: "string[]"},
  //{name: "external_url", type:"string"},
  //{name: "template_name", type: "string"},
) => {
  const action: any = {
    account: 'atomicassets',
    name: 'createschema',
    data: {
      authorized_creator: author,
      collection_name: collection_name,
      schema_name: schema_name,
      schema_format: sch
    },
    authorization: [
      { actor: author, permission: 'active' }
      //{ actor: 'io', permission: 'active'}, 
    ]
  }
  return action;
}

const _createTmpl = (
  author: string,
  collection_name: string,
  schema_name: string,
  xferable: boolean = true,
  burnable: boolean = true,
  max_supply: number = 0xffffff
) => {
  const action: any = {
    account: 'atomicassets',
    name: 'createtempl',
    data: {
      authorized_creator: author,
      collection_name: collection_name,
      schema_name: schema_name,
      transferable: xferable,
      burnable: burnable,
      max_supply: 0xffffff,
      immutable_data: [] //{key: 'name', value: ['string', 'default'] } ]
    },
    authorization: [{ actor: author, permission: 'active' }]
  }
  return action;
}

const _mintAsset = (
  author: string,
  col_name: string,
  sch_name: string,
  tmpl_id: number,
  immutable_data: any[] = [
    { 'key': 'name' }, { 'value': ['string', author + '_' + (new Date()).getTime()] },
    { 'key': 'description' }, { 'value': ['string', 'demo nft'] },
    { 'key': 'image' }, { 'value': ['string', 'https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png'] },
    { 'key': "external_url" }, { 'value': ['string', ''] }
    //{'key': "template_name"}, {'value': ['string', '']},
    //{'key': "attributes"}, { 'value': ['string[]', []] }
  ],
  mutable_data: any[] = []
) => {
  const action: any = {
    account: 'atomicassets',
    name: 'mintasset',
    data: {
      authorized_minter: author,
      collection_name: col_name,
      schema_name: sch_name,
      template_id: tmpl_id,  //template id 
      new_asset_owner: author,//new owner 
      immutable_data: immutable_data,//immutable data {key: 'name', value:[ 'string', '1testasset12']}
      mutable_data: mutable_data,  //mutable data  
      tokens_to_back: []//tokens to back 
    },
    authorization: [{ actor: author, permission: 'active' }]
  };
  return action;
}

const _createPool = (
  creator: string,
  payer: string = 'io',
  descr: string = creator + ' pool'
) => {
  const action = {
    account: 'pools.nco',
    name: 'createpool',
    data: {
      owner: creator,
      description: descr,
    },
    authorization: [
      {
        actor: payer,
        permission: 'active'
      },
      {
        actor: creator,
        permission: 'active'
      }
    ]
  };

  return action;
}

const _stakeToPool = (
  from: string,
  id: string,
  amt: string
) => {
  const action = {
    account: 'eosio.token',
    name: 'transfer',
    data: {
      from: from,
      to: 'pools.nco',
      quantity: amt,//'10000.0000 NCO',
      memo: "pool:" + id //'pool:1'
    },
    authorization: [
      {
        'actor': from,
        'permission': 'active'
      }
    ]
  }
  return action;
}

const _txNcoBalance = (
  from: string,
  to: string,
  amt: string, 
  memo: string = ''
) => {
  const action = {
    account: 'eosio.token',
    name: 'transfer',
    data: {
      from: from,
      to: to,
      quantity: amt,//'10.0000 NCO',
      memo: memo //''
    },
    authorization: [
      {
        'actor': from,
        'permission': 'active'
      }
    ]
  }
  return action;
}

const SubmitTx = async (
  actions: any[],
  public_keys: string[] = ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"], // testnet
  private_keys: string[] = ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"],  // testnet
  net_url = 'https://testnet.newcoin.org'
) => {
  const signatureProvider = new JsSignatureProvider(private_keys);
  signatureProvider.availableKeys = public_keys;
  //@ts-ignore
  const rpc = new JsonRpc(net_url, { fetch }); //required to read blockchain state
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
    abis: abis
  });

  //console.log(pushTransactionArgs)
  return api.pushSignedTransaction(pushTransactionArgs);
};

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

export class NCO_BlockchainAPI {
  /** @internal */
  private _url: string = "";
  /** @internal */
  private _h_url: string = "";
  /**
   * Init the api
   * @name newcoin-api
   * @param bc_url - newcoin url - http://testnet.newcoin.org
   * @param hyp_url - hyperion url - http://hyperion.newcoin.org
   * @returns a Newcoin API instance
   */
  constructor({ bc_url, hyp_url }: { bc_url: string, hyp_url: string }) {
    this._url = bc_url;
    this._h_url = hyp_url;
  }

  /**
   * Create a user
   * NOTE: New collection, schema and template names are formed from user name with c, s and t replacing the dot in the user name.
   * @returns Create User transaction id
   */
  async createUser(inpt: NCCreateUser) {

    const {
      newUser, payer, newacc_public_active_key, newacc_public_owner_key, payer_prv_key,
      ram_amt, net_amount, cpu_amount, xfer
    } = { ...CREATE_ACCOUNT_DEFAULTS, ...inpt };

    let t: any;
    let res: NCReturnTxs = {};
    let tres: TransactResult;

    let newacc_action = _newaccount(newUser, payer, newacc_public_active_key, newacc_public_owner_key);
    let buyram_action = _buyrambytes(newUser, payer, ram_amt);
    let delegatebw_action = _delegateBw(newUser, payer, net_amount, cpu_amount, xfer);

    //console.log(t);
    tres = await SubmitTx(
      [newacc_action, buyram_action, delegatebw_action],
      [newacc_public_active_key, newacc_public_owner_key],
      [payer_prv_key] //, url
    ) as TransactResult;// [] contained      
    res.TxID_createAcc = tres.transaction_id;
    //console.log("createuser transaction complete");
    //console.log("creating collection for the user");
    let col = newUser.replace('.', 'c');
    t = _createCollection(newUser, col, payer, [payer, newUser]);
    //console.log(t);
    //console.log("createcol transaction");
    tres = await SubmitTx([t]) as TransactResult;
    res.TxID_createCol = tres.transaction_id;
    //console.log("creating schema for the user");
    let sch = newUser.replace('.', 's');
    t = _createSch(newUser, col, sch);
    //console.log(t);
    //console.log("createsch transaction");
    tres = await SubmitTx([t]) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    //console.log("creating template");
    t = _createTmpl(newUser, col, sch);
    //console.log(t);
    //console.log("creating template transaction");
    tres = await SubmitTx([t]) as TransactResult;
    res.TxID_createTpl = res.TxID_createTpl;
    return res;
  }

  /**
   * Create a poll.
   * @returns Create Pool transaction id
   */
  async createPool(inpt: NCCreatePool) {
    let t = _createPool(inpt.owner, inpt.payer);
    let res = await SubmitTx([t], [inpt.payer_public_key], [inpt.payer_prv_key]) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_createPool = res.transaction_id;
    return r;
  }

  /**
   * Stake to pool
   * @returns Create Pool transaction id
   */
  async stakeToPool(inpt: NCStakeToPool) {
    const api = new RpcApi(this._url, "pools.nco", fetch);
    let p: PoolPayload = { owner: inpt.to };
    let r: NCReturnTxs = {};
    type RetT = { rows: PoolPayload[] };

    let q = await api.getPool(p);
    let t = await q.json() as RetT;
    let pool_id = t.rows[0].id as string;

    //console.log("pool:"+t.rows[0].id);
    let tx = _stakeToPool(inpt.payer, pool_id, inpt.amt);
    let res = await SubmitTx([tx], [inpt.payer_public_key], [inpt.payer_prv_key]) as TransactResult;

    r.TxID_stakeToPool = res.transaction_id;
    //console.log(res);
    return r;
  }

  /**
   * Mint an asset
   * @returns Create Pool transaction id
   */
  async mintAsset(inpt: NCMintAsset) {
    if (inpt.col_name == undefined) inpt.col_name = (inpt.creator).replace('.', 'c');
    if (inpt.sch_name == undefined) inpt.sch_name = (inpt.creator).replace('.', 's');
    if (inpt.tmpl_id == undefined) inpt.tmpl_id = -1;
    if (inpt.immutable_data == undefined)
      inpt.immutable_data = [
        { key: 'name', value: ['string', inpt.creator + '_' + (new Date()).getTime()] }
      ];
    if (inpt.mutable_data == undefined)
      inpt.mutable_data = [];

    const t = _mintAsset(
      inpt.creator, inpt.col_name, inpt.sch_name, inpt.tmpl_id,
      inpt.immutable_data, inpt.mutable_data
    );

    let res = await SubmitTx([t], [inpt.payer_public_key], [inpt.payer_prv_key]) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_mintAsset = res.transaction_id;
    return r;
  }

  /**
   * Get trasaction data
   * @returns Tx data
   */
  async getTxData(txid: string) {
    const hrpc = new HJsonRpc(this._h_url, { fetch });
    let txi = await hrpc.get_transaction(txid);
    console.log(txi); // get template number  txi.actions[1].act.data.template_id
    return txi;
  }

  /**
   * Get account balance
   * @returns Tx data
   */
  async getAccountBalance(acc: NCGetAccInfo) {
    
    if (acc.contract == undefined)
      acc.contract = 'eosio.token';

    let rc : NCReturnInfo = { acc_balances: []};
    try {
      let t  = await fetch(`https://testnet.newcoin.org/v1/chain/get_currency_balance`, {
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
  async txNcoBalance(inpt: NCTxNcoBal): Promise<NCReturnTxs> {
      let r: NCReturnTxs = {};
      let tx = _txNcoBalance(inpt.payer, inpt.to, inpt.amt);
      let res = await SubmitTx([tx], [inpt.payer_public_key], [inpt.payer_prv_key]) as TransactResult;
      r.TxID_txNcoBalance = res.transaction_id;
      //console.log(res);
      return r;
  }

  /**
   * Get pool info
   * @returns Tx data
   */
  async getPoolInfo (payload: NCGetPoolInfo) {
    const api = new RpcApi("https://testnet.newcoin.org", "pools.nco", fetch);

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
}
}


