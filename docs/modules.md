[@newcoin-foundation/newcoin-sdk](README.md) / Exports

# @newcoin-foundation/newcoin-sdk

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)

### Classes

- [NCO\_BlockchainAPI](classes/NCO_BlockchainAPI.md)

### Type aliases

- [NCApproveDaoProposal](modules.md#ncapprovedaoproposal)
- [NCCreateCollection](modules.md#nccreatecollection)
- [NCCreateDao](modules.md#nccreatedao)
- [NCCreateDaoProposal](modules.md#nccreatedaoproposal)
- [NCCreateDaoUserWhitelistProposal](modules.md#nccreatedaouserwhitelistproposal)
- [NCCreatePermission](modules.md#nccreatepermission)
- [NCCreatePool](modules.md#nccreatepool)
- [NCCreateUser](modules.md#nccreateuser)
- [NCDaoProposalVote](modules.md#ncdaoproposalvote)
- [NCExecuteDaoProposal](modules.md#ncexecutedaoproposal)
- [NCGetAccInfo](modules.md#ncgetaccinfo)
- [NCGetDaoProposals](modules.md#ncgetdaoproposals)
- [NCGetDaoWhiteList](modules.md#ncgetdaowhitelist)
- [NCGetPoolInfo](modules.md#ncgetpoolinfo)
- [NCGetVotes](modules.md#ncgetvotes)
- [NCInitServices](modules.md#ncinitservices)
- [NCInitUrls](modules.md#nciniturls)
- [NCKeyPair](modules.md#nckeypair)
- [NCLinkPerm](modules.md#nclinkperm)
- [NCMintAsset](modules.md#ncmintasset)
- [NCNameType](modules.md#ncnametype)
- [NCPoolsInfo](modules.md#ncpoolsinfo)
- [NCReturnInfo](modules.md#ncreturninfo)
- [NCReturnTxs](modules.md#ncreturntxs)
- [NCStakeMainDao](modules.md#ncstakemaindao)
- [NCStakePool](modules.md#ncstakepool)
- [NCTxBal](modules.md#nctxbal)
- [NCTxNcoBal](modules.md#nctxncobal)
- [NCUnstakePool](modules.md#ncunstakepool)

### Variables

- [default\_schema](modules.md#default_schema)
- [devnet\_services](modules.md#devnet_services)
- [devnet\_urls](modules.md#devnet_urls)

## Type aliases

### NCApproveDaoProposal

Ƭ **NCApproveDaoProposal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approver` | `string` |
| `approver_prv_key` | `string` |
| `dao_id?` | `number` |
| `dao_owner?` | `string` |
| `proposal_author?` | `string` |
| `proposal_id?` | `number` |

#### Defined in

[newcoin-sdk/src/types.ts:151](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L151)

___

### NCCreateCollection

Ƭ **NCCreateCollection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allow_notify?` | `boolean` |
| `burnable?` | `boolean` |
| `collection_name?` | `string` |
| `max_supply?` | `number` |
| `mkt_fee?` | `number` |
| `schema_fields?` | [`NCNameType`](modules.md#ncnametype)[] |
| `schema_name?` | `string` |
| `template_fields?` | [`NCNameType`](modules.md#ncnametype)[] |
| `template_name?` | `string` |
| `user` | `string` |
| `user_prv_active_key` | `string` |
| `xferable?` | `boolean` |

#### Defined in

[newcoin-sdk/src/types.ts:25](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L25)

___

### NCCreateDao

Ƭ **NCCreateDao**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `author_prv_key` | `string` |
| `descr` | `string` |
| `token?` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:121](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L121)

___

### NCCreateDaoProposal

Ƭ **NCCreateDaoProposal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner` | `string` |
| `proposer` | `string` |
| `proposer_prv_key` | `string` |
| `summary` | `string` |
| `title` | `string` |
| `url` | `string` |
| `vote_end` | `string` |
| `vote_start` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:128](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L128)

___

### NCCreateDaoUserWhitelistProposal

Ƭ **NCCreateDaoUserWhitelistProposal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner` | `string` |
| `proposer` | `string` |
| `proposer_prv_key` | `string` |
| `user` | `string` |
| `vote_end` | `string` |
| `vote_start` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:140](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L140)

___

### NCCreatePermission

Ƭ **NCCreatePermission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `author_prv_active_key` | `string` |
| `perm_name` | `string` |
| `perm_pub_key` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:40](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L40)

___

### NCCreatePool

Ƭ **NCCreatePool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `is_deflatable?` | `boolean` |
| `is_inflatable?` | `boolean` |
| `is_treasury?` | `boolean` |
| `owner` | `string` |
| `owner_prv_active_key` | `string` |
| `ticker?` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:55](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L55)

___

### NCCreateUser

Ƭ **NCCreateUser**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cpu_amount?` | `string` |
| `net_amount?` | `string` |
| `newUser` | `string` |
| `newacc_pub_active_key` | `string` |
| `newacc_pub_owner_key` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `ram_amt?` | `number` |
| `xfer?` | `boolean` |

#### Defined in

[newcoin-sdk/src/types.ts:13](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L13)

___

### NCDaoProposalVote

Ƭ **NCDaoProposalVote**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner?` | `string` |
| `option` | `string` |
| `proposal_id` | `string` |
| `proposal_type?` | `string` |
| `quantity` | `string` |
| `voter` | `string` |
| `voter_prv_key` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:177](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L177)

___

### NCExecuteDaoProposal

Ƭ **NCExecuteDaoProposal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `number` |
| `dao_owner?` | `string` |
| `exec` | `string` |
| `exec_prv_key` | `string` |
| `proposal_author?` | `string` |
| `proposal_id?` | `number` |

#### Defined in

[newcoin-sdk/src/types.ts:160](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L160)

___

### NCGetAccInfo

Ƭ **NCGetAccInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contract?` | `string` |
| `owner` | `string` |
| `token_name?` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:220](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L220)

___

### NCGetDaoProposals

Ƭ **NCGetDaoProposals**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner?` | `string` |
| `proposal_author?` | `string` |
| `proposal_id?` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:170](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L170)

___

### NCGetDaoWhiteList

Ƭ **NCGetDaoWhiteList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner?` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:199](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L199)

___

### NCGetPoolInfo

Ƭ **NCGetPoolInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `string` |
| `owner?` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:226](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L226)

___

### NCGetVotes

Ƭ **NCGetVotes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `vote_id?` | `string` |
| `voter` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:194](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L194)

___

### NCInitServices

Ƭ **NCInitServices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `daos_contract` | `string` |
| `eosio_contract` | `string` |
| `maindao_contract` | `string` |
| `staking_contract` | `string` |
| `token_contract` | `string` |

#### Defined in

[newcoin-sdk/src/index.ts:71](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/index.ts#L71)

___

### NCInitUrls

Ƭ **NCInitUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `atomicassets_url` | `string` |
| `hyperion_url` | `string` |
| `nodeos_url` | `string` |

#### Defined in

[newcoin-sdk/src/index.ts:65](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/index.ts#L65)

___

### NCKeyPair

Ƭ **NCKeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prv_key` | `string` |
| `pub_key` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:3](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L3)

___

### NCLinkPerm

Ƭ **NCLinkPerm**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action_owner` | `string` |
| `action_to_link` | `string` |
| `author` | `string` |
| `author_prv_active_key` | `string` |
| `perm_to_link` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:47](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L47)

___

### NCMintAsset

Ƭ **NCMintAsset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `col_name?` | `string` |
| `creator` | `string` |
| `immutable_data` | [`NCKeyValPair`](modules/internal_.md#nckeyvalpair)[] |
| `mutable_data` | [`NCKeyValPair`](modules/internal_.md#nckeyvalpair)[] |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `sch_name?` | `string` |
| `tmpl_id?` | `number` |

#### Defined in

[newcoin-sdk/src/types.ts:209](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L209)

___

### NCNameType

Ƭ **NCNameType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:8](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L8)

___

### NCPoolsInfo

Ƭ **NCPoolsInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `more` | `boolean` |
| `next_key` | `string` |
| `rows` | [`NCPoolInfo`](modules/internal_.md#ncpoolinfo)[] |

#### Defined in

[newcoin-sdk/src/types.ts:114](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L114)

___

### NCReturnInfo

Ƭ **NCReturnInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acc_balances?` | `string`[] |

#### Defined in

[newcoin-sdk/src/types.ts:263](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L263)

___

### NCReturnTxs

Ƭ **NCReturnTxs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TxID?` | `string` |
| `TxID_WithdrawVoteDeposit?` | `string` |
| `TxID_addToWhiteList?` | `string` |
| `TxID_approveDaoProposal?` | `string` |
| `TxID_createAcc?` | `string` |
| `TxID_createCol?` | `string` |
| `TxID_createDao?` | `string` |
| `TxID_createDaoProposal?` | `string` |
| `TxID_createPerm?` | `string` |
| `TxID_createPool?` | `string` |
| `TxID_createSch?` | `string` |
| `TxID_createTpl?` | `string` |
| `TxID_executeDaoProposal?` | `string` |
| `TxID_linkPerm?` | `string` |
| `TxID_mintAsset?` | `string` |
| `TxID_removeFromWhiteList?` | `string` |
| `TxID_stakeMainDAO?` | `string` |
| `TxID_stakePool?` | `string` |
| `TxID_txNcoBalance?` | `string` |
| `TxID_unstakeMainDAO?` | `string` |
| `TxID_unstakePool?` | `string` |
| `TxID_voteDaoProposal?` | `string` |
| `TxID_withdrawFromPool?` | `string` |
| `dao_id?` | `string` |
| `pool_code?` | `string` |
| `pool_id?` | `string` |
| `proposal_id?` | `number` |

#### Defined in

[newcoin-sdk/src/types.ts:231](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L231)

___

### NCStakeMainDao

Ƭ **NCStakeMainDao**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:64](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L64)

___

### NCStakePool

Ƭ **NCStakePool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `owner` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:70](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L70)

___

### NCTxBal

Ƭ **NCTxBal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `memo?` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `to` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:92](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L92)

___

### NCTxNcoBal

Ƭ **NCTxNcoBal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `memo` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `to` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:84](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L84)

___

### NCUnstakePool

Ƭ **NCUnstakePool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[newcoin-sdk/src/types.ts:77](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L77)

## Variables

### default\_schema

• **default\_schema**: { `name`: `string` = 'name'; `type`: `string` = "string" }[]

#### Defined in

[newcoin-sdk/src/types.ts:267](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/types.ts#L267)

___

### devnet\_services

• **devnet\_services**: [`NCInitServices`](modules.md#ncinitservices)

#### Defined in

[newcoin-sdk/src/index.ts:86](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/index.ts#L86)

___

### devnet\_urls

• **devnet\_urls**: [`NCInitUrls`](modules.md#nciniturls)

#### Defined in

[newcoin-sdk/src/index.ts:79](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/8de0e44/src/index.ts#L79)
