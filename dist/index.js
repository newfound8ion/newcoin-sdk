/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actions.ts":
/*!************************!*\
  !*** ./src/actions.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionGenerator = void 0;
class ActionGenerator {
    constructor(contract, token_contract) {
        this.contract = contract;
        this.token_contract = token_contract;
        this.newaccount = (new_name, payer, newacc_public_active_key, newacc_public_owner_key) => ({
            account: 'eosio',
            name: 'newaccount',
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
        this.buyrambytes = (receiver, payer = 'io', amt = 8192) => ({
            account: 'eosio',
            name: 'buyrambytes',
            authorization: [{ actor: payer, permission: 'active' }],
            data: {
                payer: payer,
                receiver: receiver,
                bytes: amt,
            },
        });
        this.delegateBw = (receiver, payer = 'io', net_amount = '100.0000 NCO', cpu_amount = '100.0000 NCO', trfer = true) => ({
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
        /*createUser = async (
          newUser: string,
          payer: string,
          public_active_key: string,
          public_owner_key: string
        ) => {
        
          let newacc_action = this._newaccount(newUser, payer, public_active_key, public_owner_key);
          let buyram_action = this._buyrambytes(newUser, payer);
          let delegatebw_action = this._delegateBw(newUser, payer);
        
          return [newacc_action, buyram_action, delegatebw_action]
        };
        
        createAccount(
          authorization: EosioAuthorizationObject[],
          owner: string,
          symbol: string,
          payer: string
        ) {
          return this._pack(this.contract, authorization, "open", {
            owner,
            symbol,
            payer
          });
        }*/
        this.createCollection = (author, collection_name, authorized_accounts, notify_accounts = [], market_fee, allow_notify) => {
            const action = {
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
            };
            return action;
        };
        this.createSchema = (author, payer, collection_name, schema_name, sch) => {
            const action = {
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
            };
            return action;
        };
        this.createTemplate = (author, collection_name, schema_name, xferable, burnable, max_supply, template_fields) => {
            const action = {
                account: 'atomicassets',
                name: 'createtempl',
                data: {
                    authorized_creator: author,
                    collection_name: collection_name,
                    schema_name: schema_name,
                    transferable: xferable,
                    burnable: burnable,
                    max_supply: 0xffffff,
                    immutable_data: template_fields //{key: 'name', value: ['string', 'default'] } ]
                },
                authorization: [
                    { actor: author, permission: 'active' }
                ]
            };
            return action;
        };
        this.createPermission = (author, perm_name, perm_key) => {
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
                    { actor: author, permission: 'active' }
                ]
            };
            return action;
        };
        this.mintAsset = (author, payer, col_name, sch_name, tmpl_id, immutable_data, mutable_data) => {
            const action = {
                account: 'atomicassets',
                name: 'mintasset',
                data: {
                    authorized_minter: author,
                    collection_name: col_name,
                    schema_name: sch_name,
                    template_id: tmpl_id,
                    new_asset_owner: author,
                    immutable_data: immutable_data,
                    mutable_data: mutable_data,
                    tokens_to_back: [] //tokens to back 
                },
                authorization: [
                    { actor: author, permission: 'active' }
                ]
            };
            return action;
        };
        this.createPool = (creator, ticker, is_inflatable, is_deflatable, is_treasury, descr) => {
            const action = {
                account: 'pools2.nco',
                name: 'createpool',
                data: {
                    owner: creator,
                    ticker: ticker,
                    description: descr,
                    is_inflatable: is_inflatable,
                    is_deflatable: is_deflatable,
                    is_treasury: is_treasury
                },
                authorization: [
                    { actor: creator, permission: 'active' }
                ]
            };
            return action;
        };
        this.txNcoBalance = (from, to, amt, memo) => {
            const action = {
                account: 'eosio.token',
                name: 'transfer',
                data: {
                    from: from,
                    to: to,
                    quantity: amt,
                    memo: memo //''
                },
                authorization: [
                    { 'actor': from, 'permission': 'active' }
                ]
            };
            return action;
        };
        this.txBalance = (contract, from, to, amt, memo) => {
            const action = {
                account: contract,
                name: 'transfer',
                data: {
                    from: from,
                    to: to,
                    quantity: amt,
                    memo: memo //''
                },
                authorization: [
                    { 'actor': from, 'permission': 'active' }
                ]
            };
            return action;
        };
    }
    _pack(account, authorization, name, data) {
        return [{ account, name, authorization, data }];
    }
}
exports.ActionGenerator = ActionGenerator;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NCO_BlockchainAPI = exports.devnet_services = exports.devnet_urls = void 0;
// EOS imports
const eosjs_1 = __webpack_require__(/*! eosjs */ "eosjs");
const eosjs_jssig_1 = __webpack_require__(/*! eosjs/dist/eosjs-jssig */ "eosjs/dist/eosjs-jssig"); // development only
// @ts-ignore
const eosjs_ecc_priveos_1 = __importDefault(__webpack_require__(/*! eosjs-ecc-priveos */ "eosjs-ecc-priveos"));
// Extra backend services
const hyperion_1 = __webpack_require__(/*! @eoscafe/hyperion */ "@eoscafe/hyperion");
const atomicassets_1 = __webpack_require__(/*! atomicassets */ "atomicassets");
// Newcoin services  
const newcoin_pools_js_1 = __webpack_require__(/*! @newcoin-foundation/newcoin.pools-js/ */ "@newcoin-foundation/newcoin.pools-js/");
const newcoin_pool_js_1 = __webpack_require__(/*! @newcoin-foundation/newcoin.pool-js */ "@newcoin-foundation/newcoin.pool-js");
const newcoin_pool_js_2 = __webpack_require__(/*! @newcoin-foundation/newcoin.pool-js */ "@newcoin-foundation/newcoin.pool-js");
const newcoin_daos_js_1 = __webpack_require__(/*! @newcoin-foundation/newcoin.daos-js */ "@newcoin-foundation/newcoin.daos-js");
const actions_1 = __webpack_require__(/*! ./actions */ "./src/actions.ts");
// @ts-ignore
const node_fetch = __importStar(__webpack_require__(/*! node-fetch */ "node-fetch"));
const cross_fetch_1 = __importDefault(__webpack_require__(/*! cross-fetch */ "cross-fetch"));
//import * as types from "./types";
const types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
__exportStar(__webpack_require__(/*! ./types */ "./src/types.ts"), exports);
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
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
exports.devnet_urls = {
    nodeos_url: "https://nodeos-dev.newcoin.org",
    hyperion_url: "https://hyperion-dev.newcoin.org",
    atomicassets_url: "https://atomic-dev.newcoin.org/"
};
exports.devnet_services = {
    eosio_contract: "eosio",
    token_contract: "eosio.token",
    maindao_contract: "pool.nco",
    staking_contract: "pools2.nco",
    daos_contract: "daos.nco"
};
class NCO_BlockchainAPI {
    /**
     * Init the api
     * @name newcoin-api
     * @param urls
     * @param services
     * @returns a Newcoin API instance
     */
    constructor(urls, services) {
        this.dao_id = "0";
        this.pool_id = "0";
        this.pool_code = "";
        this._url = urls.nodeos_url;
        this._h_url = urls.hyperion_url;
        this._aa_url = urls.atomicassets_url;
        this.aa_api = new atomicassets_1.ExplorerApi(this._aa_url, "atomicassets", { fetch: node_fetch });
        this.nodeos_rpc = new eosjs_1.JsonRpc(this._url, { fetch: cross_fetch_1.default });
        this.hrpc = new hyperion_1.JsonRpc(this._h_url, { fetch: cross_fetch_1.default });
        this.cApi = new newcoin_daos_js_1.ChainApi(this._url, services.daos_contract, cross_fetch_1.default);
        this.poolsRpcApi = new newcoin_pools_js_1.RpcApi(this._url, services.staking_contract, cross_fetch_1.default);
        this.poolRpcApi = new newcoin_pool_js_2.RpcApi(this._url, services.maindao_contract, cross_fetch_1.default);
        this.aGen = new newcoin_daos_js_1.ActionGenerator(services.daos_contract, services.token_contract);
        this.mGen = new newcoin_pool_js_1.ActionGenerator(services.maindao_contract, services.token_contract);
        this.pGen = new newcoin_pools_js_1.ActionGenerator(services.staking_contract, services.maindao_contract);
        this.sdkGen = new actions_1.ActionGenerator(services.eosio_contract, services.token_contract);
        this._services = services;
    }
    /**
     * Create a key pair assuming a secure environment (not frontend)
     * @returns A key pair
     */
    async createKeyPair() {
        await eosjs_ecc_priveos_1.default.initialize();
        let opts = { secureEnv: true };
        let p = await eosjs_ecc_priveos_1.default.randomKey(0, opts);
        //let x = ecc.isValidPrivate(p);
        let t = { prv_key: p, pub_key: eosjs_ecc_priveos_1.default.privateToPublic(p) };
        return t;
    }
    /**
     * Create a user
     * @returns Create User transaction id
     */
    async createUser(inpt) {
        const { newUser, newacc_pub_active_key, newacc_pub_owner_key, payer, payer_prv_key, ram_amt, net_amount, cpu_amount, xfer } = Object.assign(Object.assign({}, CREATE_ACCOUNT_DEFAULTS), inpt);
        let t;
        let res = {};
        let tres;
        let newacc_action = this.sdkGen.newaccount(newUser, payer, newacc_pub_active_key, newacc_pub_owner_key);
        let buyram_action = this.sdkGen.buyrambytes(newUser, payer, ram_amt);
        let delegatebw_action = this.sdkGen.delegateBw(newUser, payer, net_amount, cpu_amount, xfer);
        let payer_pub_key = eosjs_ecc_priveos_1.default.privateToPublic(payer_prv_key);
        console.log("before create account transaction");
        tres = await this.SubmitTx([newacc_action, buyram_action, delegatebw_action], [payer_pub_key], [payer_prv_key]); // [] contained      
        res.TxID_createAcc = tres.transaction_id;
        console.log("createuser transaction complete");
        return res;
    }
    /**
     * Create collection
     * @returns Create Collection and template transactions' ids
     */
    async createCollection(inpt) {
        let t;
        let res = {};
        let tres;
        let d = 12 - inpt.user.length;
        if (inpt.collection_name == undefined)
            inpt.collection_name = (0, utils_1.normalizeUsername)(inpt.user, "z"); //(inpt.creator).replace('.', 'z' + 'z'.repeat(d));
        if (inpt.schema_name == undefined)
            inpt.schema_name = (0, utils_1.normalizeUsername)(inpt.user, "w"); // (inpt.creator).replace('.', 'w' + 'w'.repeat(d));
        let user_public_active_key = eosjs_ecc_priveos_1.default.privateToPublic(inpt.user_prv_active_key);
        let mkt_fee = inpt.mkt_fee ? inpt.mkt_fee : 0.05;
        let allow_notify = inpt.allow_notify ? inpt.allow_notify : true;
        t = this.sdkGen.createCollection(inpt.user, inpt.collection_name, [inpt.user], [inpt.user], mkt_fee, allow_notify);
        console.log(t);
        console.log("createcol transaction");
        tres = await this.SubmitTx([t], [user_public_active_key], [inpt.user_prv_active_key]);
        res.TxID_createCol = tres.transaction_id;
        console.log("creating schema");
        let schema_fields = inpt.schema_fields ? inpt.schema_fields : types_1.default_schema;
        t = this.sdkGen.createSchema(inpt.user, inpt.user, inpt.collection_name, inpt.schema_name, schema_fields);
        console.log(t);
        console.log("createsch transaction");
        tres = await this.SubmitTx([t], [user_public_active_key], [inpt.user_prv_active_key]);
        res.TxID_createSch = tres.transaction_id;
        console.log("creating template");
        let template = inpt.template_fields ? inpt.template_fields : [];
        let xferable = inpt.xferable ? inpt.xferable : true;
        let burnable = inpt.burnable ? inpt.burnable : true;
        let max_supply = inpt.max_supply ? inpt.max_supply : 0xffffff;
        t = this.sdkGen.createTemplate(inpt.user, inpt.collection_name, inpt.schema_name, xferable, burnable, max_supply, template);
        console.log(t);
        console.log("creating template transaction");
        tres = await this.SubmitTx([t], [user_public_active_key], [inpt.user_prv_active_key]);
        res.TxID_createTpl = res.TxID_createTpl;
        return res;
    }
    /**
     * Create a new permission subject to Active permission.
     * @returns Create permission transaction id
     */
    async createPermission(inpt) {
        let t = this.sdkGen.createPermission(inpt.author, inpt.perm_name, inpt.perm_pub_key);
        let res = await this.SubmitTx([t], [eosjs_ecc_priveos_1.default.privateToPublic(inpt.author_prv_active_key)], [inpt.author_prv_active_key]);
        let r = {};
        r.TxID_createPerm = res.transaction_id;
        return r;
    }
    /**
     * Link a permission to a specific action of a specific contract.
     * @returns Link permission transaction id
     */
    async linkPermission(inpt) {
        const linkauth_input = {
            account: inpt.author,
            code: inpt.action_owner,
            type: inpt.action_to_link,
            requirement: inpt.perm_to_link, // 'active', 'owner' ... 
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
        let res = await this.SubmitTx([action], [eosjs_ecc_priveos_1.default.privateToPublic(inpt.author_prv_active_key)], [inpt.author_prv_active_key]);
        let r = {};
        r.TxID_linkPerm = res.transaction_id;
        return r;
    }
    /**
     * Create a staking pool for an account
     * @returns Create Pool transaction id
     */
    async createPool(inpt) {
        var _a, _b, _c;
        inpt.ticker = (inpt.ticker || inpt.owner.substring(0, 3)).toUpperCase();
        (_a = inpt.is_inflatable) !== null && _a !== void 0 ? _a : (inpt.is_inflatable = true);
        (_b = inpt.is_deflatable) !== null && _b !== void 0 ? _b : (inpt.is_deflatable = true);
        (_c = inpt.is_treasury) !== null && _c !== void 0 ? _c : (inpt.is_treasury = false);
        console.log("Creating pool: " + JSON.stringify(inpt));
        let t = this.sdkGen.createPool(inpt.owner, inpt.ticker, inpt.is_inflatable, inpt.is_deflatable, inpt.is_treasury, "test pool for " + inpt.owner);
        let res = await this.SubmitTx([t], [eosjs_ecc_priveos_1.default.privateToPublic(inpt.owner_prv_active_key)], [inpt.owner_prv_active_key]);
        let r = {};
        r.TxID_createPool = res.transaction_id;
        return r;
    }
    /**
     * Stake mainDAO
     * @param inpt
     * @returns
     */
    async stakeMainDAO(inpt) {
        let r = {};
        const stakeTx = await this.mGen.stake([{ actor: inpt.payer, permission: "active" }], inpt.payer, inpt.amt);
        console.log("action: " + JSON.stringify(stakeTx));
        const res = await this.SubmitTx(stakeTx, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        r.TxID_stakeMainDAO = res.transaction_id;
        return r;
    }
    /**
    * inst UnStake mainDAO
    * @param inpt
    * @returns
    */
    async instUnstakeMainDAO(inpt) {
        let r = {};
        const stakeTx = await this.mGen.instunstake([{ actor: inpt.payer, permission: "active" }], inpt.payer, inpt.amt);
        console.log("action: " + JSON.stringify(stakeTx));
        const res = await this.SubmitTx(stakeTx, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        r.TxID_unstakeMainDAO = res.transaction_id;
        return r;
    }
    /**
     * delayed UnStake mainDAO
     * @param inpt
     * @returns
     */
    async dldUnstakeMainDAO(inpt) {
        let r = {};
        const stakeTx = await this.mGen.dldunstake([{ actor: inpt.payer, permission: "active" }], inpt.payer, inpt.amt);
        console.log("action: " + JSON.stringify(stakeTx));
        const res = await this.SubmitTx(stakeTx, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        r.TxID_unstakeMainDAO = res.transaction_id;
        return r;
    }
    /**
     * Stake to pool
     * @returns Create Pool transaction id
     */
    async stakePool(inpt) {
        let p = { owner: inpt.owner };
        let r = {};
        console.log("Get poolbyowner: ", JSON.stringify(p));
        let q = await this.poolsRpcApi.getPoolByOwner(p);
        let t = await q.json();
        const pool_id = t.rows[0].id;
        const pool_code = t.rows[0].code;
        console.log("pool:" + JSON.stringify(t));
        const stakeTx = await this.pGen.stakeToPool([
            { actor: inpt.payer, permission: "active" }
            // { actor: "io", permission: "active" }
        ], inpt.payer, inpt.amt, pool_id);
        console.log("action: " + JSON.stringify(stakeTx));
        const res = await this.SubmitTx(stakeTx, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        r.TxID_stakePool = res.transaction_id;
        r.pool_id = pool_id;
        r.pool_code = pool_code;
        return r;
    }
    async unstakePool(inpt) {
        const t = await this.pGen.withdrawFromPool([{ actor: inpt.payer, permission: "active" }], //{ actor: "io", permission: "active"}
        inpt.payer, inpt.amt);
        console.log("action: " + JSON.stringify(t));
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        let r = {};
        r.TxID_unstakePool = res.transaction_id;
        return r;
    }
    async addToWhiteList(inpt) {
        //const aGen = new PoolsActionGenerator("pools2.nco", "eosio.token");
        /*const t = await this.aGen.createWhiteListProposal(
          [{ actor: inpt.owner, permission: "active" }],
          ~~inpt.dao_id,
          inpt.account);
    
        const res = await this.SubmitTx(t,
          [ecc.privateToPublic(inpt.owner_prv_key)], [inpt.owner_prv_key]) as TransactResult;
      */
        let r = {};
        r.TxID_addToWhiteList = "0"; //res.transaction_id;
        return r;
    }
    async removeFromWhiteList(inpt) {
        //const aGen = new PoolsActionGenerator("pools2.nco", "eosio.token");
        //const t = await pGen.removeFromWhiteList(
        //  [{ actor: inpt.owner, permission: "active"}],
        //  inpt.pool_id,
        //  inpt.owner);
        //const res = await SubmitTx(t, 
        //  [ecc.privateToPublic(inpt.owner_prv_key)], [inpt.owner_prv_key], 
        //  this._url) as TransactResult;
        let r = {};
        //r.TxID_removeFromWhiteList = res.transaction_id;
        return r;
    }
    async createDao(inpt) {
        const t = await this.aGen.createDao([{ actor: inpt.author, permission: "active" }], inpt.author, inpt.descr);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.authpr_prv_key)], [inpt.authpr_prv_key]);
        let p = { owner: inpt.author };
        console.log("Get dao by owner: ", JSON.stringify(p));
        let q = await this.cApi.getDAOByOwner(p);
        let w = await q.json();
        console.log("received from getDaoByOwner" + JSON.stringify(w));
        let r = {};
        r.TxID_createDao = res.transaction_id;
        r.dao_id = w.rows[0].id;
        this.dao_id = r.dao_id.toString();
        return r;
    }
    async createDaoProposal(inpt) {
        if (inpt.dao_id == undefined) {
            if (inpt.dao_owner == undefined)
                throw ("DAO undefined");
            let p = { owner: inpt.dao_owner };
            console.log("Get dao by owner: ", JSON.stringify(p));
            let q = await this.cApi.getDAOByOwner(p);
            let w = await q.json();
            console.log("received from getDaoByOwner" + JSON.stringify(w));
            inpt.dao_id = w.rows[0].id;
        }
        const t = await this.aGen.createProposal([{ actor: inpt.proposer, permission: "active" }], inpt.proposer, inpt.dao_id, inpt.title, inpt.summary, inpt.url, inpt.vote_start, inpt.vote_end);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.proposer_prv_key)], [inpt.proposer_prv_key]);
        let r = {};
        r.TxID_createDaoProposal = res.transaction_id;
        r.dao_id = inpt.dao_id;
        return r;
    }
    async approveDaoProposal(inpt) {
        if (inpt.dao_id == undefined) {
            if (inpt.dao_owner == undefined)
                throw ("DAO undefined");
            let p = { owner: inpt.dao_owner };
            console.log("Get dao by owner: ", JSON.stringify(p));
            let q = await this.cApi.getDAOByOwner(p);
            let w = await q.json();
            console.log("received from getDaoByOwner" + JSON.stringify(w));
            inpt.dao_id = w.rows[0].id;
        }
        if (inpt.proposal_id == undefined) {
            if (inpt.proposal_author == undefined)
                throw ("Proposal undefined neither ID nor name");
            let p = {
                daoID: inpt.dao_id.toString(),
                proposer: inpt.proposal_author
            };
            console.log("Get proposal by author: ", JSON.stringify(p));
            let q = await this.cApi.getProposalByProposer(p);
            let w = await q.json();
            console.log("received from getProposalByOwner" + JSON.stringify(w));
            inpt.proposal_id = w.rows[0].id;
        }
        const t = await this.aGen.approveProposal([{ actor: inpt.approver, permission: "active" }], inpt.dao_id, inpt.proposal_id);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.approver_prv_key)], [inpt.approver_prv_key]);
        let r = {};
        r.TxID_approveDaoProposal = res.transaction_id;
        return r;
    }
    async executeDaoProposal(inpt) {
        if (inpt.dao_id == undefined) {
            if (inpt.dao_owner == undefined)
                throw ("DAO undefined");
            let q = await this.cApi.getDAOByOwner({ owner: inpt.dao_owner });
            let w = await q.json();
            console.log("received from getDaoByOwner" + JSON.stringify(w));
            inpt.dao_id = w.rows[0].id;
        }
        if (inpt.proposal_id == undefined) {
            if (inpt.proposal_author == undefined)
                throw ("Proposal undefined neither ID nor name");
            let p = {
                daoID: inpt.dao_id.toString(),
                proposer: inpt.proposal_author
            };
            console.log("Get proposal by author: ", JSON.stringify(p));
            let q = await this.cApi.getProposalByProposer(p);
            let w = await q.json();
            console.log("received from getProposalByOwner" + JSON.stringify(w));
            inpt.proposal_id = w.rows[0].id;
        }
        const t = await this.aGen.executeProposal([{ actor: inpt.exec, permission: "active" }], inpt.dao_id, inpt.proposal_id);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.exec_prv_key)], [inpt.exec_prv_key]);
        let r = {};
        r.TxID_executeDaoProposal = res.transaction_id;
        return r;
    }
    async getDaoProposals(inpt) {
        if (inpt.dao_id == undefined) {
            if (inpt.dao_owner == undefined)
                return {};
            let q = await this.cApi.getDAOByOwner({ owner: inpt.dao_owner });
            let w = await q.json();
            console.log("received from getDaoByOwner" + JSON.stringify(w));
            inpt.dao_id = (w.rows[0].id).toString();
        }
        if (inpt.proposal_author) {
            const opt = { daoID: inpt.dao_id, proposer: inpt.proposal_author };
            let q = await this.cApi.getProposalByProposer(opt);
            let w = await q.json();
            console.log("received from getProposalbyProposer" + JSON.stringify(w));
            inpt.proposal_id = (w.rows[0].id).toString();
        }
        console.log("Get proposals for dao ", JSON.stringify(inpt.dao_id));
        let q = await this.cApi.getProposalByID({ daoID: inpt.dao_id, id: inpt.proposal_id });
        let w = await q.json();
        console.log("received from getProposalByID" + JSON.stringify(w.rows));
        return w.rows;
    }
    async voteOnDaoProposal(inpt) {
        console.log("Vote for DAO proposal", JSON.stringify(inpt.dao_id));
        const t = await this.aGen.vote([{ actor: inpt.voter, permission: "active" }], inpt.voter, inpt.quantity, inpt.proposal_type || "standart", inpt.dao_id, inpt.proposal_id, inpt.option);
        // let w = await q.json();
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.voter_prv_key)], [inpt.voter_prv_key]);
        console.log("received from VoteForDaoProposal" + JSON.stringify(res));
        return { TxID_voteForDaoProposal: res.transaction_id };
    }
    /**
     * Mint an asset
     * @returns Create Pool transaction id
     */
    async mintAsset(inpt) {
        let d = 12 - inpt.creator.length;
        if (inpt.col_name == undefined)
            inpt.col_name = (0, utils_1.normalizeUsername)(inpt.creator, "z");
        if (inpt.sch_name == undefined)
            inpt.sch_name = (0, utils_1.normalizeUsername)(inpt.creator, "w");
        if (inpt.tmpl_id == undefined)
            inpt.tmpl_id = -1;
        if (inpt.immutable_data == undefined)
            inpt.immutable_data = [
                { key: 'name', value: ['string', inpt.creator + '_' + (new Date()).getTime()] }
            ];
        if (inpt.mutable_data == undefined)
            inpt.mutable_data = [];
        const t = this.sdkGen.mintAsset(inpt.creator, inpt.payer, inpt.col_name, inpt.sch_name, inpt.tmpl_id, inpt.immutable_data, inpt.mutable_data);
        let res = await this.SubmitTx([t], [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        let r = {};
        r.TxID_mintAsset = res.transaction_id;
        return r;
    }
    /**
     * Get trasaction data
     * @returns Tx data
     */
    async getTxData(txid) {
        let txi = await this.hrpc.get_transaction(txid);
        console.log(txi); // get template number  txi.actions[1].act.data.template_id
        return txi;
    }
    /**
     * Get account balance
     * @returns Tx data
     */
    async getAccountBalance(acc) {
        if (acc.contract == undefined)
            acc.contract = 'eosio.token';
        let rc = { acc_balances: [] };
        try {
            let t = await (0, cross_fetch_1.default)(`https://nodeos-dev.newcoin.org/v1/chain/get_currency_balance`, {
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
        }
        catch (e) {
            console.log('\nCaught exception: ' + e);
            if (e instanceof eosjs_1.RpcError)
                console.log(JSON.stringify(e.json, null, 2));
        }
    }
    /**
     * Transfer NCO between accounts
     * @returns Transfer transaction id
     */
    async _txBalance(contract, inpt, memo = "") {
        let r = {};
        let tx = this.sdkGen.txBalance(contract, inpt.payer, inpt.to, inpt.amt, memo);
        let res = await this.SubmitTx([tx], [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        r.TxID = res.transaction_id;
        //console.log(res);
        return r;
    }
    async txGNCOBalance(inpt) {
        const r = await this._txBalance(this._services.maindao_contract, inpt);
        return r.TxID;
    }
    async txNCOBalance(inpt) {
        const r = await this._txBalance(this._services.token_contract, inpt);
        return r.TxID;
    }
    /**
     * Transfer NCO between accounts
     * @returns Transfer transaction id
     */
    async txNcoBalance(inpt) {
        var _a;
        let r = {};
        let tx = this.sdkGen.txNcoBalance(inpt.payer, inpt.to, inpt.amt, (_a = inpt.memo) !== null && _a !== void 0 ? _a : (inpt.memo = ""));
        let res = await this.SubmitTx([tx], [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        r.TxID_txNcoBalance = res.transaction_id;
        //console.log(res);
        return r;
    }
    /**
   * Get pool info
   * @returns Tx data
   */
    async getPoolInfo(payload) {
        const api = new newcoin_pools_js_1.RpcApi("https://nodeos-dev.newcoin.org", "pools2.nco", cross_fetch_1.default);
        try {
            const fn = payload.code ? "getPoolByCode" : "getPoolByOwner";
            let q = await api[fn](payload);
            let t = await q.json();
            //console.log(t.rows[0]);
            //console.log(t.rows[0].total);
            return t;
        }
        catch (e) {
            console.log('\nCaught exception: ' + e);
            if (e instanceof eosjs_1.RpcError)
                console.log(JSON.stringify(e.json, null, 2));
        }
        return {};
        ``;
    }
    async SubmitTx(actions, public_keys, // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
    private_keys // testnet ["5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"]
    ) {
        const signatureProvider = new eosjs_jssig_1.JsSignatureProvider(private_keys);
        signatureProvider.availableKeys = public_keys;
        //@ts-ignore
        const rpc = this.nodeos_rpc;
        const api = new eosjs_1.Api({ rpc, signatureProvider }); //required to submit transactions
        const info = await rpc.get_info();
        const lastBlockInfo = await rpc.get_block(info.last_irreversible_block_num);
        const tzOff = new Date(info.head_block_time).getTimezoneOffset();
        var t = new Date((new Date(info.head_block_time)).getTime() + 10 * 60 * 1000 - tzOff * 1000 * 60).toISOString().slice(0, -1); //+10m
        const transactionObj = {
            actions: actions,
            expiration: t,
            ref_block_prefix: lastBlockInfo.ref_block_prefix,
            ref_block_num: lastBlockInfo.block_num & 0xffff, // 22774
        };
        const a = await api.serializeActions(transactionObj.actions);
        const transaction = Object.assign(Object.assign({}, transactionObj), { actions: a });
        const serializedTransaction = api.serializeTransaction(transaction);
        const availableKeys = await api.signatureProvider.getAvailableKeys();
        const requiredKeys = await api.authorityProvider.getRequiredKeys({ transaction, availableKeys });
        const abis = await api.getTransactionAbis(transaction);
        // const pushTransactionArgs: PushTransactionArgs = { serializedTransaction, signatures };
        const pushTransactionArgs = await api.signatureProvider.sign({
            chainId: info.chain_id,
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
    }
    ;
}
exports.NCO_BlockchainAPI = NCO_BlockchainAPI;
NCO_BlockchainAPI.defaults = {
    devnet_services: exports.devnet_services,
    devnet_urls: exports.devnet_urls
};


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERC721_schema = exports.default_schema = void 0;
exports.default_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'external_url', type: 'string' },
    { name: 'content_type', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'license', type: 'string' }
];
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
exports.ERC721_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
];
// https://docs.opensea.io/docs/metadata-standards
// export const OpenSea_schema = [
//]


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeUsername = void 0;
const normalizeUsername = (username, r) => {
    return username.replace(/\./g, r + r.repeat(12 - username.length));
};
exports.normalizeUsername = normalizeUsername;


/***/ }),

/***/ "@eoscafe/hyperion":
/*!************************************!*\
  !*** external "@eoscafe/hyperion" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@eoscafe/hyperion");

/***/ }),

/***/ "@newcoin-foundation/newcoin.daos-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.daos-js" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("@newcoin-foundation/newcoin.daos-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pool-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pool-js" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("@newcoin-foundation/newcoin.pool-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pools-js/":
/*!********************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pools-js/" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@newcoin-foundation/newcoin.pools-js/");

/***/ }),

/***/ "atomicassets":
/*!*******************************!*\
  !*** external "atomicassets" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("atomicassets");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ "eosjs":
/*!************************!*\
  !*** external "eosjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("eosjs");

/***/ }),

/***/ "eosjs-ecc-priveos":
/*!************************************!*\
  !*** external "eosjs-ecc-priveos" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("eosjs-ecc-priveos");

/***/ }),

/***/ "eosjs/dist/eosjs-jssig":
/*!*****************************************!*\
  !*** external "eosjs/dist/eosjs-jssig" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("eosjs/dist/eosjs-jssig");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	module.exports.NCO_BlockchainAPI = __webpack_exports__.NCO_BlockchainAPI;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map