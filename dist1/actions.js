"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
