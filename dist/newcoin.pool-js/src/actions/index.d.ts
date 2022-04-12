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
    open(authorization: EosioAuthorizationObject[], owner: string, symbol: string, payer: string): Promise<EosioActionObject[]>;
    close(authorization: EosioAuthorizationObject[], owner: string, symbol: string): Promise<EosioActionObject[]>;
    instunstake(authorization: EosioAuthorizationObject[], from: string, quantity: string): Promise<EosioActionObject[]>;
    dldunstake(authorization: EosioAuthorizationObject[], from: string, quantity: string): Promise<EosioActionObject[]>;
    redeem(authorization: EosioAuthorizationObject[], from: string, id: string): Promise<EosioActionObject[]>;
    stake(authorization: EosioAuthorizationObject[], from: string, quantity: string): Promise<EosioActionObject[]>;
    protected _pack(account: string, authorization: EosioAuthorizationObject[], name: string, data: any): EosioActionObject[];
}
