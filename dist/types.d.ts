export declare type NCKeyPair = {
    pub_key: string;
    prv_key: string;
};
export declare type NCNameType = {
    name: string;
    type: string;
};
export declare type NCCreateUser = {
    newUser: string;
    newacc_pub_active_key: string;
    newacc_pub_owner_key: string;
    payer: string;
    payer_prv_key: string;
    ram_amt?: number;
    cpu_amount?: string;
    net_amount?: string;
    xfer?: boolean;
};
export declare type NCCreateCollection = {
    user: string;
    user_prv_active_key: string;
    collection_name?: string;
    schema_name?: string;
    schema_fields?: NCNameType[];
    template_name?: string;
    template_fields?: NCNameType[];
    mkt_fee?: number;
    allow_notify?: boolean;
    xferable?: boolean;
    burnable?: boolean;
    max_supply?: number;
};
export declare type NCCreatePermission = {
    author: string;
    perm_name: string;
    perm_pub_key: string;
    author_prv_active_key: string;
};
export declare type NCLinkPerm = {
    author: string;
    perm_to_link: string;
    action_owner: string;
    action_to_link: string;
    author_prv_active_key: string;
};
export declare type NCCreatePool = {
    owner: string;
    owner_prv_active_key: string;
};
export declare type NCStakeToPool = {
    to: string;
    amt: string;
    payer: string;
    payer_prv_key: string;
};
export declare type NCTxNcoBal = {
    to: string;
    amt: string;
    payer: string;
    memo: string;
    payer_pub_key: string;
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
    payer_prv_key: string;
};
export declare type NCGetAccInfo = {
    owner: string;
    contract?: string;
};
export declare type NCGetPoolInfo = {
    owner?: string;
    code?: string;
};
export declare type NCReturnTxs = {
    TxID_createAcc?: string;
    TxID_createCol?: string;
    TxID_createSch?: string;
    TxID_createTpl?: string;
    TxID_createPerm?: string;
    TxID_linkPerm?: string;
    TxID_createPool?: string;
    TxID_stakeToPool?: string;
    TxID_mintAsset?: string;
    TxID_txNcoBalance?: string;
};
export declare type NCReturnInfo = {
    acc_balances?: string[];
};
export declare const default_schema: {
    name: string;
    type: string;
}[];
export declare const ERC721_schema: {
    name: string;
    type: string;
}[];
