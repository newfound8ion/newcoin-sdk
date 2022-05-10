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
    ticker?: string;
    is_inflatable?: boolean;
    is_deflatable?: boolean;
    is_treasury?: boolean;
};
export declare type NCStakeMainDao = {
    amt: string;
    payer: string;
    payer_prv_key: string;
};
export declare type NCStakePool = {
    owner: string;
    amt: string;
    payer: string;
    payer_prv_key: string;
};
export declare type NCUnstakePool = {
    amt: string;
    payer: string;
    payer_prv_key: string;
};
export declare type NCAddToWhiteList = {
    dao_id: string;
    account: string;
    owner: string;
    owner_prv_key: string;
};
export declare type NCRemoveFromWhiteList = {
    dao_id: string;
    account: string;
    owner: string;
    owner_prv_key: string;
};
export declare type NCTxNcoBal = {
    to: string;
    amt: string;
    payer: string;
    memo: string;
    payer_prv_key: string;
};
export declare type NCTxBal = {
    to: string;
    amt: string;
    payer: string;
    memo?: string;
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
export declare type NCCreateDao = {
    author: string;
    author_prv_key: string;
    token?: string;
    descr: string;
};
export declare type NCCreateDaoProposal = {
    proposer: string;
    proposer_prv_key: string;
    dao_id?: number;
    dao_owner: string;
    title: string;
    summary: string;
    url: string;
    vote_start: string;
    vote_end: string;
};
export declare type NCApproveDaoProposal = {
    approver: string;
    approver_prv_key: string;
    dao_id?: number;
    dao_owner?: string;
    proposal_id?: number;
    proposal_author?: string;
};
export declare type NCExecuteDaoProposal = {
    exec: string;
    exec_prv_key: string;
    dao_id?: number;
    dao_owner?: string;
    proposal_id?: number;
    proposal_author?: string;
};
export declare type NCGetDaoProposals = {
    dao_id?: string;
    dao_owner?: string;
    proposal_id?: string;
    proposal_author?: string;
};
export declare type NCDaoProposalVote = {
    voter: string;
    dao_id?: string;
    proposal_id: string;
    option: string;
    proposal_type?: string;
    voter_prv_key: string;
    quantity: string;
    dao_owner?: string;
};
export declare type NCGetVotes = {
    owner: string;
    id: string;
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
    token_name?: string;
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
    TxID_stakePool?: string;
    pool_code?: string;
    pool_id?: string;
    TxID_unstakePool?: string;
    TxID_createDao?: string;
    TxID_createDaoProposal?: string;
    dao_id?: number;
    TxID_approveDaoProposal?: string;
    TxID_executeDaoProposal?: string;
    TxID_voteDaoProposal?: string;
    TxID_withdrawFromPool?: string;
    TxID_addToWhiteList?: string;
    TxID_removeFromWhiteList?: string;
    TxID_stakeMainDAO?: string;
    TxID_unstakeMainDAO?: string;
    TxID_mintAsset?: string;
    TxID_txNcoBalance?: string;
    TxID?: string;
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
