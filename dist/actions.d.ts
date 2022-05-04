import { NCNameType } from "./types";
export declare type EosioAuthorizationObject = {
    actor: string;
    permission: string;
};
export declare type EosioActionObject = {
    account: string;
    name: string;
    authorization: EosioAuthorizationObject[];
    data: any;
};
export declare class ActionGenerator {
    readonly contract: string;
    readonly token_contract: string;
    constructor(contract: string, token_contract: string);
    newaccount: (new_name: string, payer: string, newacc_public_active_key: string, newacc_public_owner_key: string) => {
        account: string;
        name: string;
        authorization: {
            actor: string;
            permission: string;
        }[];
        data: {
            creator: string;
            name: string;
            owner: {
                threshold: number;
                keys: {
                    key: string;
                    weight: number;
                }[];
                accounts: any[];
                waits: any[];
            };
            active: {
                threshold: number;
                keys: {
                    key: string;
                    weight: number;
                }[];
                accounts: any[];
                waits: any[];
            };
        };
    };
    buyrambytes: (receiver: string, payer?: string, amt?: number) => {
        account: string;
        name: string;
        authorization: {
            actor: string;
            permission: string;
        }[];
        data: {
            payer: string;
            receiver: string;
            bytes: number;
        };
    };
    delegateBw: (receiver: string, payer?: string, net_amount?: string, cpu_amount?: string, trfer?: boolean) => {
        account: string;
        name: string;
        authorization: {
            actor: string;
            permission: string;
        }[];
        data: {
            from: string;
            receiver: string;
            stake_net_quantity: string;
            stake_cpu_quantity: string;
            transfer: boolean;
        };
    };
    createCollection: (author: string, collection_name: string, authorized_accounts: string[], notify_accounts: string[], market_fee: number, allow_notify: boolean) => any;
    createSchema: (author: string, payer: string, collection_name: string, schema_name: string, sch: NCNameType[]) => any;
    createTemplate: (author: string, collection_name: string, schema_name: string, xferable: boolean, burnable: boolean, max_supply: number, template_fields: any[]) => any;
    createPermission: (author: string, perm_name: string, perm_key: string) => {
        account: string;
        name: string;
        data: {
            account: string;
            permission: string;
            parent: string;
            auth: {
                threshold: number;
                accounts: {
                    permission: {
                        actor: string;
                        permission: string;
                    };
                    weight: number;
                }[];
                keys: {
                    key: string;
                    weight: number;
                }[];
                waits: any[];
            };
        };
        authorization: {
            actor: string;
            permission: string;
        }[];
    };
    mintAsset: (author: string, payer: string, col_name: string, sch_name: string, tmpl_id: number, immutable_data: any[], mutable_data: any[]) => any;
    createPool: (creator: string, ticker: string, is_inflatable: boolean, is_deflatable: boolean, is_treasury: boolean, descr: string) => {
        account: string;
        name: string;
        data: {
            owner: string;
            ticker: string;
            description: string;
            is_inflatable: boolean;
            is_deflatable: boolean;
            is_treasury: boolean;
        };
        authorization: {
            actor: string;
            permission: string;
        }[];
    };
    txNcoBalance: (from: string, to: string, amt: string, memo: string) => {
        account: string;
        name: string;
        data: {
            from: string;
            to: string;
            quantity: string;
            memo: string;
        };
        authorization: {
            actor: string;
            permission: string;
        }[];
    };
    txBalance: (contract: string, from: string, to: string, amt: string, memo: string) => {
        account: string;
        name: string;
        data: {
            from: string;
            to: string;
            quantity: string;
            memo: string;
        };
        authorization: {
            actor: string;
            permission: string;
        }[];
    };
    protected _pack(account: string, authorization: EosioAuthorizationObject[], name: string, data: any): EosioActionObject[];
}
