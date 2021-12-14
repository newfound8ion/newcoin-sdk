export declare type NCCreateUser = {
    newUser: string;
    newacc_public_active_key: string;
    newacc_public_owner_key: string;
    payer: string;
    payer_prv_key: string;
    ram_amt?: number;
    cpu_amount?: string;
    net_amount?: string;
    xfer?: boolean;
};
export declare type NCReturnTxs = {
    TxID_createAcc?: string;
    TxID_createCol?: string;
    TxID_createSch?: string;
    TxID_createTpl?: string;
    TxID_createPool?: string;
    TxID_stakeToPool?: string;
    TxID_mintAsset?: string;
    TxID_txNcoBalance?: string;
};
export declare type NCCreatePool = {
    owner: string;
    payer: string;
    payer_public_key: string;
    payer_prv_key: string;
};
export declare type NCStakeToPool = {
    to: string;
    amt: string;
    payer: string;
    payer_public_key: string;
    payer_prv_key: string;
};
export declare type NCTxNcoBal = {
    to: string;
    amt: string;
    payer: string;
    memo: string;
    payer_public_key: string;
    payer_prv_key: string;
};
export declare type NCPoolInfo = {
    id: string;
    code: string;
    owner: string;
    description: string;
    total: {
        quantity: string;
        contract: string;
    };
    creation_date: string;
    last_update_date: string;
};
export declare type NCPoolsInfo = {
    rows: NCPoolInfo[];
    more: boolean;
    next_key: string;
};
export declare type NCKeyValPair = {
    key: string;
    value: string[];
};
export declare type NCMintAsset = {
    creator: string;
    col_name?: string;
    sch_name?: string;
    tmpl_id?: number;
    immutable_data: NCKeyValPair[];
    mutable_data: NCKeyValPair[];
    payer: string;
    payer_public_key: string;
    payer_prv_key: string;
};
export declare type NCGetAccInfo = {
    owner: string;
    contract?: string;
};
export declare type NCGetPoolInfo = {
    owner: string;
};
export declare type NCReturnInfo = {
    acc_balances?: string[];
};
