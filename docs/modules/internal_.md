[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Classes

- [ActionGenerator](../classes/internal_.ActionGenerator.md)

### Type aliases

- [EosioActionObject](internal_.md#eosioactionobject)
- [EosioAuthorizationObject](internal_.md#eosioauthorizationobject)
- [NCApproveDaoProposal](internal_.md#ncapprovedaoproposal)
- [NCCreateCollection](internal_.md#nccreatecollection)
- [NCCreateDao](internal_.md#nccreatedao)
- [NCCreateDaoProposal](internal_.md#nccreatedaoproposal)
- [NCCreateDaoUserWhitelistProposal](internal_.md#nccreatedaouserwhitelistproposal)
- [NCCreatePermission](internal_.md#nccreatepermission)
- [NCCreatePool](internal_.md#nccreatepool)
- [NCCreateUser](internal_.md#nccreateuser)
- [NCDaoProposalVote](internal_.md#ncdaoproposalvote)
- [NCExecuteDaoProposal](internal_.md#ncexecutedaoproposal)
- [NCGetAccInfo](internal_.md#ncgetaccinfo)
- [NCGetDaoProposals](internal_.md#ncgetdaoproposals)
- [NCGetPoolInfo](internal_.md#ncgetpoolinfo)
- [NCGetVotes](internal_.md#ncgetvotes)
- [NCKeyPair](internal_.md#nckeypair)
- [NCKeyValPair](internal_.md#nckeyvalpair)
- [NCLinkPerm](internal_.md#nclinkperm)
- [NCMintAsset](internal_.md#ncmintasset)
- [NCNameType](internal_.md#ncnametype)
- [NCPoolInfo](internal_.md#ncpoolinfo)
- [NCPoolsInfo](internal_.md#ncpoolsinfo)
- [NCReturnInfo](internal_.md#ncreturninfo)
- [NCReturnTxs](internal_.md#ncreturntxs)
- [NCStakeMainDao](internal_.md#ncstakemaindao)
- [NCStakePool](internal_.md#ncstakepool)
- [NCTxBal](internal_.md#nctxbal)
- [NCUnstakePool](internal_.md#ncunstakepool)

## Type aliases

### EosioActionObject

Ƭ **EosioActionObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | [`EosioAuthorizationObject`](internal_.md#eosioauthorizationobject)[] |
| `data` | `any` |
| `name` | `string` |

#### Defined in

[actions.ts:4](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/actions.ts#L4)

___

### EosioAuthorizationObject

Ƭ **EosioAuthorizationObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actor` | `string` |
| `permission` | `string` |

#### Defined in

[actions.ts:2](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/actions.ts#L2)

___

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

[types.ts:167](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L167)

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
| `schema_fields?` | [`NCNameType`](internal_.md#ncnametype)[] |
| `schema_name?` | `string` |
| `template_fields?` | [`NCNameType`](internal_.md#ncnametype)[] |
| `template_name?` | `string` |
| `user` | `string` |
| `user_prv_active_key` | `string` |
| `xferable?` | `boolean` |

#### Defined in

[types.ts:25](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L25)

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

[types.ts:137](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L137)

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

[types.ts:144](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L144)

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

[types.ts:156](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L156)

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

[types.ts:40](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L40)

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

[types.ts:55](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L55)

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

[types.ts:13](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L13)

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

[types.ts:194](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L194)

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

[types.ts:176](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L176)

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

[types.ts:226](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L226)

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

[types.ts:187](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L187)

___

### NCGetPoolInfo

Ƭ **NCGetPoolInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `string` |
| `owner?` | `string` |

#### Defined in

[types.ts:232](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L232)

___

### NCGetVotes

Ƭ **NCGetVotes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `vote_id?` | `string` |
| `voter` | `string` |

#### Defined in

[types.ts:205](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L205)

___

### NCKeyPair

Ƭ **NCKeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prv_key` | `string` |
| `pub_key` | `string` |

#### Defined in

[types.ts:3](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L3)

___

### NCKeyValPair

Ƭ **NCKeyValPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string`[] |

#### Defined in

[types.ts:210](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L210)

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

[types.ts:47](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L47)

___

### NCMintAsset

Ƭ **NCMintAsset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `col_name?` | `string` |
| `creator` | `string` |
| `immutable_data` | [`NCKeyValPair`](internal_.md#nckeyvalpair)[] |
| `mutable_data` | [`NCKeyValPair`](internal_.md#nckeyvalpair)[] |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `sch_name?` | `string` |
| `tmpl_id?` | `number` |

#### Defined in

[types.ts:215](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L215)

___

### NCNameType

Ƭ **NCNameType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |

#### Defined in

[types.ts:8](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L8)

___

### NCPoolInfo

Ƭ **NCPoolInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `creation_date` | `string` |
| `description` | `string` |
| `id` | `string` |
| `last_update_date` | `string` |
| `owner` | `string` |
| `total` | `Object` |
| `total.contract` | `string` |
| `total.quantity` | `string` |

#### Defined in

[types.ts:116](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L116)

___

### NCPoolsInfo

Ƭ **NCPoolsInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `more` | `boolean` |
| `next_key` | `string` |
| `rows` | [`NCPoolInfo`](internal_.md#ncpoolinfo)[] |

#### Defined in

[types.ts:130](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L130)

___

### NCReturnInfo

Ƭ **NCReturnInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acc_balances?` | `string`[] |

#### Defined in

[types.ts:268](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L268)

___

### NCReturnTxs

Ƭ **NCReturnTxs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TxID?` | `string` |
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

[types.ts:237](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L237)

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

[types.ts:64](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L64)

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

[types.ts:70](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L70)

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

[types.ts:108](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L108)

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

[types.ts:77](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L77)
