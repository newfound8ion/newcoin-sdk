export interface Authorization {
    actor: string;
    permission: string;
}

export interface ImmutableData {
    key: string;
    value: string[];
}

export interface Data {
    authorized_minter: string;
    collection_name: string;
    schema_name: string;
    template_id: number;
    new_asset_owner: string;
    immutable_data: ImmutableData[];
    mutable_data: any[];
    tokens_to_back: any[];
    asset_id: string;
    backed_tokens: any[];
    immutable_template_data: any[];
}

export interface Act {
    account: string;
    name: string;
    authorization: Authorization[];
    data: Data;
}

export interface AccountRamDelta {
    account: string;
    delta: string;
}

export interface AuthSequence {
    account: string;
    sequence: string;
}

export interface Receipt {
    receiver: string;
    global_sequence: string;
    recv_sequence: string;
    auth_sequence: AuthSequence[];
}

export interface Action {
    action_ordinal: number;
    creator_action_ordinal: number;
    act: Act;
    context_free: boolean;
    elapsed: string;
    account_ram_deltas: AccountRamDelta[];
    "@timestamp": Date;
    block_num: number;
    producer: string;
    trx_id: string;
    global_sequence: number;
    cpu_usage_us: number;
    net_usage_words: number;
    signatures: string[];
    inline_count: number;
    inline_filtered: boolean;
    receipts: Receipt[];
    code_sequence: number;
    abi_sequence: number;
    notified: string[];
    timestamp: Date;
}

export interface TxData {
    query_time_ms: number;
    executed: boolean;
    trx_id: string;
    lib: number;
    cached_lib: boolean;
    actions: Action[];
}

