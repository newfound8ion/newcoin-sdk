import { Api, JsonRpc, RpcError } from "eosjs";
import { Transaction, TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';  // development only
import { PushTransactionArgs, ReadOnlyTransactResult } from "eosjs/dist/eosjs-rpc-interfaces";
import { GetTransaction, JsonRpc as HJsonRpc } from "@eoscafe/hyperion";
import { ActionGenerator, RpcApi } from '@newcoin-foundation/newcoin.pools-js/'
import { PoolPayload } from '@newcoin-foundation/newcoin.pools-js/dist/interfaces/pool.interface';

//@ts-ignore
import ecc from "eosjs-ecc";

//import * as farm  from '@newcoin-foundation/newcoin.farm-js'
//@ts-ignore 
import fetch from 'node-fetch';
import { 
    NCKeyPair,
    NCCreateUser, NCCreatePool, NCStakeToPool, NCMintAsset, NCTxNcoBal, NCCreatePerm,
    NCGetAccInfo, NCGetPoolInfo, 
    NCPoolsInfo, 
    NCReturnTxs,  NCReturnInfo 
  } from "./types"; 
import { unescapeLeadingUnderscores } from "typescript";
export * from './types'
//const fetch = require('node-fetch');


const _newaccount = (
  new_name: string,
  payer: string,
  newacc_public_active_key: string, 
  newacc_public_owner_key: string    
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
          key: newacc_public_owner_key,
          weight: 1
        }],
        accounts: [],
        waits: []
      },
      active: {
        threshold: 1,
        keys: [{
          key: newacc_public_active_key,
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
  authorization: [{ actor: payer, permission: 'active'}],
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
  authorized_accounts: string[],
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
      { actor: author, permission: 'active' } 
    ]
  }
  return action;
}

const _createSch = (
  author: string,
  payer: string,
  collection_name: string,
  schema_name: string,
  sch: any[] = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'external_url', type: 'string' },
    { name: 'license', type: 'string' }
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
    authorization: [
      { actor: author, permission: 'active' } 
    ]
  }
  return action;
}

const _createPermission = (
  author: string,
  perm_name: string,
  perm_key: string
) => {

    const authorization_object = { 
      threshold: 1, 
      accounts: [{ permission: { actor: author, permission: 'active' }, weight: 1 }], 
      keys: [{ key: perm_key, weight: 1 }],
      waits: []
    };
    
    const updateauth_input = {
      account: author,
      permission: perm_name,
      parent: 'active',
      auth: authorization_object
    };

    const action = {
      account: 'eosio',
      name: 'updateauth',
      data: updateauth_input,
      authorization: [
        { actor: author, permission: 'active'}
      ]
  }
  
  return action;
}


const _mintAsset = (
  author: string,
  payer: string,
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
    authorization: [
      { actor: author, permission: 'active' } 
    ]
  };
  return action;
}

const _createPool = (
  creator: string,
  payer: string,
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
      { actor: creator, permission: 'active'}
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
      { 'actor': from, 'permission': 'active' }
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
      { 'actor': from, 'permission': 'active' }
    ]
  }
  return action;
}

const SubmitTx = async (
  actions: any[],
  public_keys: string[],   // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
  private_keys: string[],  // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"]
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
    serializedContextFreeData: undefined,
    abis: abis
  });

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
   * Create a key pair assuming a secure environment (not frontend)
   * @returns Create User transaction id
   */
  async createKeyPair() {

    await ecc.initialize();

    let opts = { secureEnv: true };
    let p = await ecc.randomKey( 0, opts );
    //let x = ecc.isValidPrivate(p);
    
    let t: NCKeyPair = { prv_key: p , pub_key: ecc.privateToPublic(p) };
    return t as NCKeyPair;
  }

  /**
   * Create a user
   * NOTE: New collection, schema and template names are formed from user name with c, s and t 
   * replacing the dot in the user name.
   * @returns Create User transaction id
   */
  async createUser(inpt: NCCreateUser) {

    const {
      newUser, newacc_public_active_key, newacc_public_owner_key, newacc_prv_active_key, 
      payer, payer_prv_key, payer_public_key,
      ram_amt, net_amount, cpu_amount, xfer
    } = { ...CREATE_ACCOUNT_DEFAULTS, ...inpt };

    let t: any;
    let res: NCReturnTxs = {};
    let tres: TransactResult;

    let newacc_action = _newaccount(newUser, payer, newacc_public_active_key, newacc_public_owner_key);
    let buyram_action = _buyrambytes(newUser, payer, ram_amt);
    let delegatebw_action = _delegateBw(newUser, payer, net_amount, cpu_amount, xfer);

    console.log("before create account transaction");
    tres = await SubmitTx(
      [newacc_action, buyram_action, delegatebw_action],
      [payer_public_key],
      [payer_prv_key], this._url
    ) as TransactResult;// [] contained      
    res.TxID_createAcc = tres.transaction_id;
    console.log("createuser transaction complete");

    let n: NCTxNcoBal = { 
      to: newUser, 
      amt: '5000.0000 NCO', 
      payer:'io',
      memo: 'post create account transfer', 
      payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV", 
      payer_public_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"
    };
    let resp :NCReturnTxs = await this.txNcoBalance(n) ;
    console.log("transferred some NCO to the user");

    let n1: NCTxNcoBal = { 
      to: 'io', 
      amt: '1000.0000 NCO', 
      payer:newUser,
      memo: 'post create account transfer', 
      payer_prv_key: newacc_prv_active_key, 
      payer_public_key: newacc_public_active_key
    };
    resp = await this.txNcoBalance(n1) ;
    console.log("transferred some NCO back to io");
    console.log(resp);
  
    console.log("creating collection for the user");
    let col = newUser.replace('.', 'c');
    t = _createCollection(newUser, col, [newUser], undefined, undefined);
    console.log(t);
    console.log("createcol transaction");
    tres = await SubmitTx([t], 
      [newacc_public_active_key], //payer_public_key, 
      [newacc_prv_active_key], this._url
    ) as TransactResult;
    res.TxID_createCol = tres.transaction_id;
    console.log("creating schema for the user");
    let sch_name = newUser.replace('.', 's');
    t = _createSch(newUser, payer, col, sch_name, undefined);
    console.log(t);
    console.log("createsch transaction");
    tres = await SubmitTx([t], 
      [payer_public_key, newacc_public_active_key], 
      [payer_prv_key, newacc_prv_active_key], this._url
    ) as TransactResult;
    res.TxID_createSch = tres.transaction_id;
    console.log("creating template");
    t = _createTmpl(newUser, col, sch_name);
    console.log(t);
    console.log("creating template transaction");
    tres = await SubmitTx([t], 
      [payer_public_key, newacc_public_active_key],
      [payer_prv_key, newacc_prv_active_key], this._url
    ) as TransactResult;
    res.TxID_createTpl = res.TxID_createTpl;
    return res;
  }

  /**
   * Create a new permission.
   * @returns Create Pool transaction id
   */
  async createPermission(inpt: NCCreatePerm) {
    let t = _createPermission(inpt.author, inpt.perm_name, inpt.perm_pub_key);
    let res = await SubmitTx([t], 
      [ecc.privateToPublic(inpt.author_prv_active_key)], 
      [inpt.author_prv_active_key],  
      this._url
    ) as TransactResult;
    let r: NCReturnTxs = {};
    r.TxID_createPerm = res.transaction_id;
    return r;    
  }

  /* async linkPermission(inpt: NCLinkPerm) {
    const linkauth_input = {
      account: 'useraaaaaaaa',      // the permission's owner to be linked and the payer of the RAM needed to store this link
      code: 'useraaaaaaaa',         // the owner of the action to be linked
      type: 'contract_action',      // the action to be linked
      requirement: 'action_perm',   // the permission to be linked
    };
  
    {
      account: 'eosio',
      name: 'linkauth',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }
  }*/


  /**
   * Create a staking pool.
   * @returns Create Pool transaction id
   */
  async createPool(inpt: NCCreatePool) {
    let t = _createPool(inpt.owner, "test pool for " + inpt.owner);
    let res = await SubmitTx([t], 
      [ecc.privateToPublic(inpt.owner_prv_active_key)], 
      [inpt.owner_prv_active_key],
      this._url
    ) as TransactResult;
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
    let res = await SubmitTx([tx], 
      [ecc.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key], 
      this._url
    ) as TransactResult;

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
      inpt.creator, inpt.payer, inpt.col_name, inpt.sch_name, inpt.tmpl_id,
      inpt.immutable_data, inpt.mutable_data
    );

    let res = await SubmitTx([t], 
      [ecc.privateToPublic(inpt.payer_prv_key)], 
      [inpt.payer_prv_key], 
      this._url
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
      let res = await SubmitTx([tx], 
        [inpt.payer_public_key], [inpt.payer_prv_key], 
        this._url
      ) as TransactResult;
      r.TxID_txNcoBalance = res.transaction_id;
      //console.log(res);
      return r;
  }

  /**
   * Get pool info
   * @returns Tx data
   */
  async getPoolInfo (acc: NCGetPoolInfo) {
    const api = new RpcApi("https://testnet.newcoin.org", "pools.nco", fetch);
    let p: PoolPayload = { owner: acc.owner };

    try {
      let q = await api.getPool(p);
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


function options(options: any, opts: { secureEnv: boolean; }) {
  throw new Error("Function not implemented.");
}

function cpuEntropyBits(cpuEntropyBits: any, undefined: undefined, options: (options: any, opts: { secureEnv: boolean; }) => void, opts: { secureEnv: boolean; ecOptions: undefined; }) {
  throw new Error("Function not implemented.");
}

