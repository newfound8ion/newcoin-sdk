[@newcoin-foundation/newcoin-sdk](README.md) / Exports

# @newcoin-foundation/newcoin-sdk

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)

### Classes

- [NCO\_BlockchainAPI](classes/NCO_BlockchainAPI.md)

### Type aliases

- [NCCreateCollection](modules.md#nccreatecollection)
- [NCCreatePermission](modules.md#nccreatepermission)
- [NCCreatePool](modules.md#nccreatepool)
- [NCCreateUser](modules.md#nccreateuser)
- [NCGetAccInfo](modules.md#ncgetaccinfo)
- [NCGetPoolInfo](modules.md#ncgetpoolinfo)
- [NCKeyPair](modules.md#nckeypair)
- [NCKeyValPair](modules.md#nckeyvalpair)
- [NCLinkPerm](modules.md#nclinkperm)
- [NCMintAsset](modules.md#ncmintasset)
- [NCNameType](modules.md#ncnametype)
- [NCPoolInfo](modules.md#ncpoolinfo)
- [NCPoolsInfo](modules.md#ncpoolsinfo)
- [NCReturnInfo](modules.md#ncreturninfo)
- [NCReturnTxs](modules.md#ncreturntxs)
- [NCStakeToPool](modules.md#ncstaketopool)
- [NCTxNcoBal](modules.md#nctxncobal)

### Variables

- [ERC721\_schema](modules.md#erc721_schema)
- [default\_schema](modules.md#default_schema)

## Type aliases

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

[src/types.ts:24](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L24)

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

[src/types.ts:39](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L39)

___

### NCCreatePool

Ƭ **NCCreatePool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `owner_prv_active_key` | `string` |

#### Defined in

[src/types.ts:54](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L54)

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

[src/types.ts:12](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L12)

___

### NCGetAccInfo

Ƭ **NCGetAccInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contract?` | `string` |
| `owner` | `string` |

#### Defined in

[src/types.ts:111](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L111)

___

### NCGetPoolInfo

Ƭ **NCGetPoolInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `string` |
| `owner?` | `string` |

#### Defined in

[src/types.ts:116](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L116)

___

### NCKeyPair

Ƭ **NCKeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prv_key` | `string` |
| `pub_key` | `string` |

#### Defined in

[src/types.ts:2](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L2)

___

### NCKeyValPair

Ƭ **NCKeyValPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string`[] |

#### Defined in

[src/types.ts:95](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L95)

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

[src/types.ts:46](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L46)

___

### NCMintAsset

Ƭ **NCMintAsset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `col_name?` | `string` |
| `creator` | `string` |
| `immutable_data` | [`NCKeyValPair`](modules.md#nckeyvalpair)[] |
| `mutable_data` | [`NCKeyValPair`](modules.md#nckeyvalpair)[] |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `sch_name?` | `string` |
| `tmpl_id?` | `number` |

#### Defined in

[src/types.ts:100](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L100)

___

### NCNameType

Ƭ **NCNameType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |

#### Defined in

[src/types.ts:7](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L7)

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

[src/types.ts:75](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L75)

___

### NCPoolsInfo

Ƭ **NCPoolsInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `more` | `boolean` |
| `next_key` | `string` |
| `rows` | [`NCPoolInfo`](modules.md#ncpoolinfo)[] |

#### Defined in

[src/types.ts:89](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L89)

___

### NCReturnInfo

Ƭ **NCReturnInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acc_balances?` | `string`[] |

#### Defined in

[src/types.ts:134](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L134)

___

### NCReturnTxs

Ƭ **NCReturnTxs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TxID_createAcc?` | `string` |
| `TxID_createCol?` | `string` |
| `TxID_createPerm?` | `string` |
| `TxID_createPool?` | `string` |
| `TxID_createSch?` | `string` |
| `TxID_createTpl?` | `string` |
| `TxID_linkPerm?` | `string` |
| `TxID_mintAsset?` | `string` |
| `TxID_stakeToPool?` | `string` |
| `TxID_txNcoBalance?` | `string` |

#### Defined in

[src/types.ts:121](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L121)

___

### NCStakeToPool

Ƭ **NCStakeToPool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `to` | `string` |

#### Defined in

[src/types.ts:59](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L59)

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
| `payer_pub_key` | `string` |
| `to` | `string` |

#### Defined in

[src/types.ts:66](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L66)

## Variables

### ERC721\_schema

• **ERC721\_schema**: { `name`: `string` = 'name'; `type`: `string` = "string" }[]

#### Defined in

[src/types.ts:147](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L147)

___

### default\_schema

• **default\_schema**: { `name`: `string` = 'name'; `type`: `string` = "string" }[]

#### Defined in

[src/types.ts:138](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c8b6814/src/types.ts#L138)
