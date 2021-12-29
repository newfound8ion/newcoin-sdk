
export type NCKeyPair = {
  pub_key: string;
  prv_key: string;
};

export type NCCreateUser = {
    newUser: string,
    newacc_public_active_key: string,
    newacc_public_owner_key: string,
    newacc_prv_active_key: string, 
    payer: string,
    payer_prv_key: string,
    payer_public_key: string,
    ram_amt?: number,
    cpu_amount?: string,
    net_amount?: string,
    xfer?: boolean, // stake or transfer CPU/NET to the account
  };
  
  export type NCReturnTxs = {
    TxID_createAcc?: string;
    TxID_createCol?: string;
    TxID_createSch?: string;
    TxID_createTpl?: string;
    TxID_createPerm?: string;
    TxID_createPool?: string;
    TxID_stakeToPool?: string;
    TxID_mintAsset?: string;
    TxID_txNcoBalance?: string;
  };
  
  export type NCCreatePerm = {
    author: string;
    perm_name: string;
    perm_pub_key: string;
    author_prv_active_key: string,
  }

  export type NCCreatePool = {
    owner: string;
    owner_prv_active_key: string;
  };
  
  export type NCStakeToPool = {
    to: string;
    amt: string;
    payer: string;
    payer_public_key: string;
    payer_prv_key: string;
  }
  
  export type NCTxNcoBal = {
    to: string;
    amt: string;
    payer: string;
    memo: string;
    payer_public_key: string;
    payer_prv_key: string;
  }

  export type NCPoolInfo = {
    id: string;
    code: string;
    owner: string;
    description: string;
    total: {
      quantity: string;
      contract: string;
    }
    creation_date: string;
    last_update_date: string;
  
  }
  
  export type NCPoolsInfo = {
    rows: NCPoolInfo[];
    more: boolean;
    next_key: string;
  }
  
  export type NCKeyValPair = {
    key: string,
    value: string[];
  }
  
  export type NCMintAsset = {
    creator: string,
    col_name?: string,
    sch_name?: string,
    tmpl_id?: number,
    immutable_data: NCKeyValPair[],
    mutable_data: NCKeyValPair[],
    payer: string,
    payer_prv_key: string
  }
  
  export type NCGetAccInfo = {
    owner: string,
    contract?: string     // pools.nco one possible value
  }
  
  export type NCGetPoolInfo = {
    owner?: string
    code?: string;
  }
  
  export type NCReturnInfo = {
    acc_balances?: string[]
  }
  