// @ts-ignore
import { NCKeyValPair, NCNameType } from "./types"; 
export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

export class ActionGenerator {
    constructor(readonly contract: string, readonly token_contract: string) {}

    newaccount = (
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
    
    buyrambytes = (
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
    
    delegateBw = (
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

    createCollection = (
      author: string,
      collection_name: string,
      authorized_accounts: string[],
      notify_accounts: string[] = [],
      market_fee: number,
      allow_notify: boolean
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
    
    createSchema = (
      author: string,
      collection_name: string,
      schema_name: string,
      sch: NCNameType[]
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
    
    createTemplate = (
      author: string,
      collection_name: string,
      schema_name: string,
      xferable: boolean,
      burnable: boolean,
      template_fields: any[]
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
          immutable_data: template_fields //{key: 'name', value: ['string', 'default'] } ]
        },
        authorization: [
          { actor: author, permission: 'active' } 
        ]
      }
      return action;
    }
    
    createPermission = (
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
    
    
    mintAsset = (
      author: string,
      col_name: string,
      sch_name: string,
      tmpl_id: number,
      immutable_data: any[],
      mutable_data: any[]
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

    modifyAsset = (
      editor : string,
      owner: string,
      asset_id: string,
      new_mutable_data: any[]
    ) => {
      const action: any = {
        account: 'atomicassets',
        name: 'setassetdata',
        data: {
          authorized_editor: editor, 
          asset_owner: owner,
          asset_id: asset_id,
          new_mutable_data: new_mutable_data
        },
        authorization: [
          { actor: editor, permission: 'active' } 
        ]  
      };
      return action;
    }
    
    createPool = (
      creator: string,
      ticker: string,
      is_inflatable: boolean,
      is_deflatable: boolean,
      is_treasury: boolean,
      descr: string
    ) => {
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
          { actor: creator, permission: 'active'}
        ]
      };
    
      return action;
    }
    
    
    txNcoBalance = (
      from: string,
      to: string,
      amt: string, 
      memo: string
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
    txBalance = (
      contract: string,
      from: string,
      to: string,
      amt: string, 
      memo: string
    ) => {
      const action = {
        account: contract, //'eosio.token',
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

    protected _pack(
        account: string,
        authorization: EosioAuthorizationObject[],
        name: string,
        data: any
      ): EosioActionObject[] {
        return [{ account, name, authorization, data }];
    }
}