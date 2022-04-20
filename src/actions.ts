export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

export class ActionGenerator {
    constructor(readonly contract: string, readonly token_contract: string) {}

    async createAccount(
      authorization: EosioAuthorizationObject[],
      owner: string,
      symbol: string,
      payer: string
    ): Promise<EosioActionObject[]> {
      return this._pack(this.contract, authorization, "open", {
        owner,
        symbol,
        payer
      });
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