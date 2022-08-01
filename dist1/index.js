/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_231__) => {

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_231__) => {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/actions.js":
/*!*************************!*\
  !*** ./dist/actions.js ***!
  \*************************/
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

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_9037__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NCO_BlockchainAPI = exports.devnet_services = exports.devnet_urls = exports.default_schema = void 0;
// EOS imports
const eosjs_1 = __nested_webpack_require_9037__(/*! eosjs */ "eosjs");
const eosjs_jssig_1 = __nested_webpack_require_9037__(/*! eosjs/dist/eosjs-jssig */ "eosjs/dist/eosjs-jssig"); // development only
// @ts-ignore
const eosjs_ecc_priveos_1 = __importDefault(__nested_webpack_require_9037__(/*! eosjs-ecc-priveos */ "eosjs-ecc-priveos"));
// Extra backend services
const hyperion_1 = __nested_webpack_require_9037__(/*! @eoscafe/hyperion */ "@eoscafe/hyperion");
// Newcoin services  
const newcoin_pools_js_1 = __nested_webpack_require_9037__(/*! @newcoin-foundation/newcoin.pools-js/ */ "@newcoin-foundation/newcoin.pools-js/");
const newcoin_pool_js_1 = __nested_webpack_require_9037__(/*! @newcoin-foundation/newcoin.pool-js */ "@newcoin-foundation/newcoin.pool-js");
const newcoin_daos_js_1 = __nested_webpack_require_9037__(/*! @newcoin-foundation/newcoin.daos-js */ "@newcoin-foundation/newcoin.daos-js");
const actions_1 = __nested_webpack_require_9037__(/*! ./actions */ "./dist/actions.js");
// @ts-ignore
// import * as node_fetch from 'node-fetch';
const cross_fetch_1 = __importDefault(__nested_webpack_require_9037__(/*! cross-fetch */ "cross-fetch"));
const types_1 = __nested_webpack_require_9037__(/*! ./types */ "./dist/types.js");
Object.defineProperty(exports, "default_schema", ({ enumerable: true, get: function () { return types_1.default_schema; } }));
const utils_1 = __nested_webpack_require_9037__(/*! ./utils */ "./dist/utils.js");
const CREATE_ACCOUNT_DEFAULTS = {
    ram_amt: 8192,
    cpu_amount: '100.0000 NCO',
    net_amount: '100.0000 NCO',
    xfer: false,
};
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
/**
 * The primary tool to interact with [https://newcoin.org](newcoin.org).
 *
 * This is an early alpha.
 *
 * See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.
 */
class NCO_BlockchainAPI {
    /**
     * Init the api
     * @name newcoin-api
     * @param urls
     * @param services
     * @returns a Newcoin API instance
     */
    constructor(urls, services) {
        this.urls = urls;
        console.log("Init URLS " + JSON.stringify(urls));
        //this.aa_api = new ExplorerApi(this.urls.atomicassets_url, "atomicassets", { fetch: node_fetch });
        this.nodeos_rpc = new eosjs_1.JsonRpc(this.urls.nodeos_url, { fetch: cross_fetch_1.default });
        this.hrpc = new hyperion_1.JsonRpc(this.urls.hyperion_url, { fetch: cross_fetch_1.default });
        this.cApi = new newcoin_daos_js_1.ChainApi(this.urls.nodeos_url, services.daos_contract, cross_fetch_1.default);
        this.poolsRpcApi = new newcoin_pools_js_1.RpcApi(this.urls.nodeos_url, services.staking_contract, cross_fetch_1.default);
        this.poolRpcApi = new newcoin_pool_js_1.RpcApi(this.urls.nodeos_url, services.maindao_contract, cross_fetch_1.default);
        this.aGen = new newcoin_daos_js_1.ActionGenerator(services.daos_contract, services.staking_contract);
        this.mGen = new newcoin_pool_js_1.ActionGenerator(services.maindao_contract, services.token_contract);
        this.pGen = new newcoin_pools_js_1.ActionGenerator(services.staking_contract, services.maindao_contract);
        this.sdkGen = new actions_1.ActionGenerator(services.eosio_contract, services.token_contract);
        this.services = services;
    }
    // Native EOS services
    /**
     * Create a key pair assuming a secure environment (not frontend)
     * @params none
     * @returns An EOS key pair
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
     * Create a user - multistage operation creating new user account,
     * defailt collection, schema and template for the account
     * @param NCCreateUser
     * @returns NCReturnTxs
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
     * Create default collection for the account
     * @param  NCCreateCollection
     * @returns Create Collection and template transactions' ids
     */
    async createCollection(inpt) {
        let t;
        let res = {};
        let tres;
        let d = 12 - inpt.user.length;
        if (inpt.collection_name == undefined)
            inpt.collection_name = (0, utils_1.normalizeUsername)(inpt.user, "z");
        if (inpt.schema_name == undefined)
            inpt.schema_name = (0, utils_1.normalizeUsername)(inpt.user, "w");
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
     * Create a new permission subordinate to the Active permission.
     * (future optional: allow under owner, TBD)
     * @param NCCreatePermission
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
     * @param NCLinkPerm
     * author: the permission's owner to be linked
     * code: the owner of the action to be linked
     * type: the action to be linked
     * 'active', 'owner' ...
     * @returns Link permission transaction id
     */
    async linkPermission(inpt) {
        const linkauth_input = {
            account: inpt.author,
            code: inpt.action_owner,
            type: inpt.action_to_link,
            requirement: inpt.perm_to_link, // 
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
    /* =====================================================================================
     * Main DAO service: common staking pool transfrming NCO (external convertible currency)
     * into internal GNCO currency.
     *
     * Staked amount is subject to a staking fee, redemption delay and/or
     * instant unstaking fee.
     * @param   NCStakeMainDao
     * @returns NCReturnTxs
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
    * Instant UnStake mainDAO with penalty
    * @param NCStakeMainDao
    * @returns NCReturnTxs
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
     * Delayed UnStake mainDAO delay without penalty
     * @param NCStakeMainDao
     * @returns NCReturnTxs
     */
    async dldUnstakeMainDAO(inpt) {
        let r = {};
        const stakeTx = await this.mGen.dldunstake([{ actor: inpt.payer, permission: "active" }], inpt.payer, inpt.amt);
        console.log("action: " + JSON.stringify(stakeTx));
        const res = await this.SubmitTx(stakeTx, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
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
    async createPool(inpt) {
        var _a, _b, _c;
        inpt.ticker = (inpt.ticker || inpt.owner.substring(0, 5)).toUpperCase();
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
     * Stake to creator pool
     * @param
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
        const stakeTx = await this.pGen.stakeToPool([{ actor: inpt.payer, permission: "active" }], inpt.payer, inpt.amt, pool_id);
        console.log("action: " + JSON.stringify(stakeTx));
        const res = await this.SubmitTx(stakeTx, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
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
    async unstakePool(inpt) {
        const t = await this.pGen.withdrawFromPool([{ actor: inpt.payer, permission: "active" }], //{ actor: "io", permission: "active"}
        inpt.payer, inpt.amt);
        console.log("action: " + JSON.stringify(t));
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        let r = {};
        r.TxID_unstakePool = res.transaction_id;
        return r;
    }
    /**
     * DAO creation. One per account.
     * @param inpt : NCCreateDao
     * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
     */
    async createDao(inpt) {
        const t = await this.aGen.createDao([{ actor: inpt.author, permission: "active" }], inpt.author, inpt.descr);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.author_prv_key)], [inpt.author_prv_key]);
        let p = { owner: inpt.author };
        //console.log("Get dao by owner: ", JSON.stringify(p));
        let q = await this.cApi.getDAOByOwner(p);
        let w = await q.json();
        console.log("received from getDaoByOwner" + JSON.stringify(w));
        let r = {};
        r.TxID_createDao = res.transaction_id;
        r.dao_id = w.rows[0].id.toString();
        // r.dao_id = r.dao_id.toString() ; 
        return r;
    }
    async getDaoProposals(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner, true));
        if (!dao_id)
            return { dao_id: null };
        // let p: ProposalPayload = { daoID: dao_id.toString(), proposer: proposer };
        //console.log("Get proposal by author: ", JSON.stringify(p));
        let q = await this.cApi.getProposalByProposer(Object.assign(Object.assign({}, inpt), { daoID: dao_id }));
        let w = await q.json();
        //console.log("received from getProposalByOwner" + JSON.stringify(w));
        return Object.assign(Object.assign({}, w), { dao_id });
    }
    /**
     *
     * @param inpt : NCCreateDaoProposal
     * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
     */
    async createDaoProposal(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        const t = await this.aGen.createProposal([{ actor: inpt.proposer, permission: "active" }], inpt.proposer, Number(dao_id), inpt.title, inpt.summary, inpt.url, inpt.vote_start, inpt.vote_end);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.proposer_prv_key)], [inpt.proposer_prv_key]);
        let r = {};
        r.TxID_createDaoProposal = res.transaction_id;
        r.dao_id = dao_id;
        const ps = await this.getDaoProposals(Object.assign(Object.assign({}, inpt), { dao_id })); // r.dao_id, inpt.proposer
        r.proposal_id = ps.rows[ps.rows.length - 1].id;
        return r;
    }
    /**
     *
     * @param inpt : NCCreateDaoUserWhitelistProposal
     * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
     */
    async createDaoUserWhitelistProposal(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        const t = await this.aGen.createWhiteListProposal([{ actor: inpt.proposer, permission: "active" }], inpt.proposer, Number(dao_id), inpt.user, inpt.vote_start, inpt.vote_end);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.proposer_prv_key)], [inpt.proposer_prv_key]);
        let r = {};
        r.TxID_createDaoProposal = res.transaction_id;
        r.dao_id = dao_id;
        let ps = await this.getDaoWhitelistProposals(Number(dao_id), inpt.proposer);
        r.proposal_id = ps.rows[ps.rows.length - 1].id;
        return r;
    }
    /**
   *
   * @param inpt : NCApproveDaoProposal
   * @returns NCReturnTxs.TxID_approveDaoProposal
   */
    async approveDaoProposal(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        if (inpt.proposal_id == undefined)
            throw ("Proposal undefined ID");
        const t = await this.aGen.approveProposal([{ actor: inpt.approver, permission: "active" }], Number(dao_id), inpt.proposal_id);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.approver_prv_key)], [inpt.approver_prv_key]);
        let r = {};
        r.TxID_approveDaoProposal = res.transaction_id;
        return r;
    }
    /**
     *
     * @param inpt : NCApproveDaoProposal
     * @returns NCReturnTxs.TxID_approveDaoProposal
     */
    async approveDaoWhitelistProposal(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        if (inpt.proposal_id == undefined)
            throw ("Proposal undefined ID");
        const t = await this.aGen.approveWhiteListProposal([{ actor: inpt.approver, permission: "active" }], Number(dao_id), inpt.proposal_id);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.approver_prv_key)], [inpt.approver_prv_key]);
        let r = {};
        r.TxID_approveDaoProposal = res.transaction_id;
        return r;
    }
    /**
     *
     * @param inpt : NCExecuteDaoProposal
     * @returns NCReturnTxs.TxID_executeDaoProposal
     */
    async executeDaoProposal(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        if (inpt.proposal_id == undefined)
            throw ("Proposal ID undefined");
        const t = await this.aGen.executeProposal([{ actor: inpt.exec, permission: "active" }], Number(dao_id), inpt.proposal_id);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.exec_prv_key)], [inpt.exec_prv_key]);
        let r = {};
        r.TxID_executeDaoProposal = res.transaction_id;
        return r;
    }
    /**
     * @param inpt : NCExecuteDaoProposal
     * @returns NCReturnTxs.TxID_executeDaoProposal
     */
    async executeDaoWhitelistProposal(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        if (inpt.proposal_id == undefined)
            throw ("Proposal ID undefined");
        const t = await this.aGen.executeWhiteListProposal([{ actor: inpt.exec, permission: "active" }], Number(dao_id), inpt.proposal_id);
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.exec_prv_key)], [inpt.exec_prv_key]);
        let r = {};
        r.TxID_executeDaoProposal = res.transaction_id;
        return r;
    }
    /**
     * @param inpt : NCCreateDao
     * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
     */
    async voteOnProposal(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        //console.log("Vote for DAO proposal", JSON.stringify(inpt));
        const t = await this.aGen.vote([{ actor: inpt.voter, permission: "active" }], inpt.voter, inpt.quantity, inpt.proposal_type || "standart", dao_id, inpt.proposal_id, inpt.option);
        console.log("Vote for DAO proposal: ", JSON.stringify(t));
        const res = await this.SubmitTx(t, [eosjs_ecc_priveos_1.default.privateToPublic(inpt.voter_prv_key)], [inpt.voter_prv_key]);
        //console.log("received from VoteForDaoProposal" + JSON.stringify(res));
        return { TxID_voteDaoProposal: res.transaction_id };
    }
    // Getters 
    /**
     * @param inpt : NCCreateDao
     * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
     */
    async getDaoIdByOwner(owner, noFail) {
        var _a, _b;
        if (!owner)
            throw new Error("DAO undefined");
        let p = { owner: owner };
        //console.log("Get dao by owner: ", JSON.stringify(p));
        let q = await this.cApi.getDAOByOwner(p);
        let w = await q.json();
        //console.log("received from getDaoByOwner" + JSON.stringify(w));
        if (!w.rows.length && !noFail)
            throw new Error('User has no dao');
        const r = (_b = (_a = w.rows[0]) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString();
        if (!r && !noFail)
            throw new Error("DAO undefined");
        return r;
    }
    async getDaoWhitelist(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        let q = await this.cApi.getDAOWhiteList({ id: inpt.dao_id });
        let w = await q.json();
        return Object.assign(Object.assign({}, w), { dao_id });
    }
    async getDaoProposal(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        //if(inpt.proposal_id)  throw "Must provide proposal ID";    
        let w = await (await this.cApi.getProposalByID({ daoID: inpt.dao_id, id: inpt.proposal_id })).json();
        console.log("received from getProposalByID " + JSON.stringify(w.rows[0]));
        return Object.assign(Object.assign({}, w), { dao_id });
    }
    async getDaoWhitelistProposals(dao_id, proposer) {
        let p = { daoID: dao_id.toString(), proposer: proposer };
        //console.log("Get proposal by author: ", JSON.stringify(p));
        let q = await this.cApi.getWhiteListProposalByProposer(p);
        let w = await q.json();
        //console.log("received from getProposalByOwner" + JSON.stringify(w));
        return w;
    }
    async getDaoWhitelistProposal(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        if (!inpt.proposal_id)
            throw "Must provide proposal ID";
        let w = await (await this.cApi.getWhiteListProposal({ daoID: dao_id, id: inpt.proposal_id })).json();
        console.log("received from getProposalByID" + JSON.stringify(w.rows[0]));
        return Object.assign(Object.assign({}, w), { dao_id: inpt.dao_id });
    }
    async listDaoProposals(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        let opt;
        if (inpt.proposal_author == undefined)
            opt = { daoID: inpt.dao_id };
        else
            opt = { daoID: inpt.dao_id, proposer: inpt.proposal_author };
        console.log("sent to getProposalByProposer" + JSON.stringify(opt));
        let q = await this.cApi.getProposalByProposer(opt);
        console.log("received from getProposalByProposer" + JSON.stringify(q));
        let w = q.json().rows;
        return { list: w, id: inpt.dao_id };
    }
    async listDaoWhitelistProposals(inpt) {
        const dao_id = inpt.dao_id || (await this.getDaoIdByOwner(inpt.dao_owner));
        let opt;
        if (!inpt.proposal_author)
            opt = { daoID: dao_id };
        else
            opt = { daoID: dao_id, proposer: inpt.proposal_author };
        let q = await this.cApi.getWhiteListProposalByProposer(opt);
        //console.log("received from getProposalByProposer" + JSON.stringify(q));
        let w = q.json().rows;
        return { list: w, id: dao_id };
    }
    async getProposalVotes(inpt) {
        let w, q;
        const r = { owner: inpt.voter };
        if (inpt.vote_id)
            r.id = inpt.vote_id;
        q = (await this.cApi.getVote(r));
        w = await q.json();
        //console.log("received from getVotes " + JSON.stringify(w.rows));
        return w;
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
     * Get account balance
     * @param acc: NCGetAccInfo
     * @param acc.token_name will set correct contract
     * @returns Tx data
     */
    async getAccountBalance(acc) {
        if (!acc.contract) {
            if (acc.token_name == "GNCO")
                acc.contract = this.services.maindao_contract;
            else if (acc.token_name != "NCO")
                acc.contract = this.services.staking_contract;
            else
                acc.contract = this.services.eosio_contract;
        }
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
     * Transfer GNCO between accounts
     * @param NCTxBal
     * @returns Transfer transaction id
     */
    async txGNCOBalance(inpt) {
        const r = await this._txBalance(this.services.maindao_contract, inpt);
        return r;
    }
    /**
     * Transfer NCO between accounts
     * @param NCTxBal
     * @returns Transfer transaction id
     */
    async txNCOBalance(inpt) {
        const r = await this._txBalance(this.services.token_contract, inpt);
        return r;
    }
    /**
     * Transfer creator tokens between accounts
     * @param   NCTxBal
     * @returns Transfer transaction id
     */
    async txDAOTokenBalance(inpt) {
        const r = await this._txBalance(this.services.staking_contract, inpt);
        return r;
    }
    /**
   * Get pool info
   * @param
   * @returns Tx data
   */
    async getPoolInfo(payload) {
        const api = new newcoin_pools_js_1.RpcApi("https://nodeos-dev.newcoin.org", "pools2.nco", cross_fetch_1.default); // TODO
        try {
            const fn = payload.code ? "getPoolByCode" : "getPoolByOwner";
            let q = await api[fn](payload);
            let t = await q.json();
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
    /**
     * Get trasaction data
     * @returns Tx data
     */
    async getTxData(txid) {
        let txi = await this.hrpc.get_transaction(txid);
        console.log(txi); // get template number  txi.actions[1].act.data.template_id
        return txi;
    }
    // AUX functions
    /**
     * Transfer NCO between accounts
     * @returns Transfer transaction id
     */
    async _txBalance(contract, inpt) {
        var _a;
        let r = {};
        let tx = this.sdkGen.txBalance(contract, inpt.payer, inpt.to, inpt.amt, (_a = inpt.memo) !== null && _a !== void 0 ? _a : (inpt.memo = ""));
        let res = await this.SubmitTx([tx], [eosjs_ecc_priveos_1.default.privateToPublic(inpt.payer_prv_key)], [inpt.payer_prv_key]);
        r.TxID = res.transaction_id;
        return r;
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
    devnet_urls: exports.devnet_urls,
    default_schema: types_1.default_schema
};


/***/ }),

/***/ "./dist/types.js":
/*!***********************!*\
  !*** ./dist/types.js ***!
  \***********************/
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

/***/ "./dist/utils.js":
/*!***********************!*\
  !*** ./dist/utils.js ***!
  \***********************/
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

module.exports = __nested_webpack_require_231__(/*! @eoscafe/hyperion */ "@eoscafe/hyperion");

/***/ }),

/***/ "@newcoin-foundation/newcoin.daos-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.daos-js" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = __nested_webpack_require_231__(/*! @newcoin-foundation/newcoin.daos-js */ "@newcoin-foundation/newcoin.daos-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pool-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pool-js" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = __nested_webpack_require_231__(/*! @newcoin-foundation/newcoin.pool-js */ "@newcoin-foundation/newcoin.pool-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pools-js/":
/*!********************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pools-js/" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = __nested_webpack_require_231__(/*! @newcoin-foundation/newcoin.pools-js/ */ "@newcoin-foundation/newcoin.pools-js/");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

module.exports = __nested_webpack_require_231__(/*! cross-fetch */ "cross-fetch");

/***/ }),

/***/ "eosjs":
/*!************************!*\
  !*** external "eosjs" ***!
  \************************/
/***/ ((module) => {

module.exports = __nested_webpack_require_231__(/*! eosjs */ "eosjs");

/***/ }),

/***/ "eosjs-ecc-priveos":
/*!************************************!*\
  !*** external "eosjs-ecc-priveos" ***!
  \************************************/
/***/ ((module) => {

module.exports = __nested_webpack_require_231__(/*! eosjs-ecc-priveos */ "eosjs-ecc-priveos");

/***/ }),

/***/ "eosjs/dist/eosjs-jssig":
/*!*****************************************!*\
  !*** external "eosjs/dist/eosjs-jssig" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = __nested_webpack_require_231__(/*! eosjs/dist/eosjs-jssig */ "eosjs/dist/eosjs-jssig");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_45146__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_45146__);
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
/******/ 	var __webpack_exports__ = __nested_webpack_require_45146__("./dist/index.js");
/******/ 	module.exports.NCO_BlockchainAPI = __webpack_exports__.NCO_BlockchainAPI;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@eoscafe/hyperion":
/*!************************************!*\
  !*** external "@eoscafe/hyperion" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __nested_webpack_require_231__(/*! @eoscafe/hyperion */ "@eoscafe/hyperion");

/***/ }),

/***/ "@newcoin-foundation/newcoin.daos-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.daos-js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __nested_webpack_require_231__(/*! @newcoin-foundation/newcoin.daos-js */ "@newcoin-foundation/newcoin.daos-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pool-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pool-js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __nested_webpack_require_231__(/*! @newcoin-foundation/newcoin.pool-js */ "@newcoin-foundation/newcoin.pool-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pools-js/":
/*!********************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pools-js/" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __nested_webpack_require_231__(/*! @newcoin-foundation/newcoin.pools-js/ */ "@newcoin-foundation/newcoin.pools-js/");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __nested_webpack_require_231__(/*! cross-fetch */ "cross-fetch");

/***/ }),

/***/ "eosjs":
/*!************************!*\
  !*** external "eosjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __nested_webpack_require_231__(/*! eosjs */ "eosjs");

/***/ }),

/***/ "eosjs-ecc-priveos":
/*!************************************!*\
  !*** external "eosjs-ecc-priveos" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __nested_webpack_require_231__(/*! eosjs-ecc-priveos */ "eosjs-ecc-priveos");

/***/ }),

/***/ "eosjs/dist/eosjs-jssig":
/*!*****************************************!*\
  !*** external "eosjs/dist/eosjs-jssig" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = __nested_webpack_require_231__(/*! eosjs/dist/eosjs-jssig */ "eosjs/dist/eosjs-jssig");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_49571__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_49571__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_49571__("./dist/index.js");
/******/ 	module.exports.NCO_BlockchainAPI = __webpack_exports__.NCO_BlockchainAPI;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@eoscafe/hyperion":
/*!************************************!*\
  !*** external "@eoscafe/hyperion" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(/*! @eoscafe/hyperion */ "@eoscafe/hyperion");

/***/ }),

/***/ "@newcoin-foundation/newcoin.daos-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.daos-js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(/*! @newcoin-foundation/newcoin.daos-js */ "@newcoin-foundation/newcoin.daos-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pool-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pool-js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(/*! @newcoin-foundation/newcoin.pool-js */ "@newcoin-foundation/newcoin.pool-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pools-js/":
/*!********************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pools-js/" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(/*! @newcoin-foundation/newcoin.pools-js/ */ "@newcoin-foundation/newcoin.pools-js/");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(/*! cross-fetch */ "cross-fetch");

/***/ }),

/***/ "eosjs":
/*!************************!*\
  !*** external "eosjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(/*! eosjs */ "eosjs");

/***/ }),

/***/ "eosjs-ecc-priveos":
/*!************************************!*\
  !*** external "eosjs-ecc-priveos" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(/*! eosjs-ecc-priveos */ "eosjs-ecc-priveos");

/***/ }),

/***/ "eosjs/dist/eosjs-jssig":
/*!*****************************************!*\
  !*** external "eosjs/dist/eosjs-jssig" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(/*! eosjs/dist/eosjs-jssig */ "eosjs/dist/eosjs-jssig");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_53913__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_53913__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_53913__("./dist/index.js");
/******/ 	module.exports.NCO_BlockchainAPI = __webpack_exports__.NCO_BlockchainAPI;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@eoscafe/hyperion":
/*!************************************!*\
  !*** external "@eoscafe/hyperion" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@eoscafe/hyperion");

/***/ }),

/***/ "@newcoin-foundation/newcoin.daos-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.daos-js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@newcoin-foundation/newcoin.daos-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pool-js":
/*!******************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pool-js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@newcoin-foundation/newcoin.pool-js");

/***/ }),

/***/ "@newcoin-foundation/newcoin.pools-js/":
/*!********************************************************!*\
  !*** external "@newcoin-foundation/newcoin.pools-js/" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@newcoin-foundation/newcoin.pools-js/");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("cross-fetch");

/***/ }),

/***/ "eosjs":
/*!************************!*\
  !*** external "eosjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("eosjs");

/***/ }),

/***/ "eosjs-ecc-priveos":
/*!************************************!*\
  !*** external "eosjs-ecc-priveos" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("eosjs-ecc-priveos");

/***/ }),

/***/ "eosjs/dist/eosjs-jssig":
/*!*****************************************!*\
  !*** external "eosjs/dist/eosjs-jssig" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("eosjs/dist/eosjs-jssig");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	module.exports.NCO_BlockchainAPI = __webpack_exports__.NCO_BlockchainAPI;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map