[@newcoin-foundation/newcoin-sdk](README.md) / Exports

# @newcoin-foundation/newcoin-sdk

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)

### Classes

- [NCO\_BlockchainAPI](classes/NCO_BlockchainAPI.md)

### Type aliases

- [NCCreatePerm](modules.md#nccreateperm)
- [NCCreatePool](modules.md#nccreatepool)
- [NCCreateUser](modules.md#nccreateuser)
- [NCGetAccInfo](modules.md#ncgetaccinfo)
- [NCGetPoolInfo](modules.md#ncgetpoolinfo)
- [NCKeyPair](modules.md#nckeypair)
- [NCKeyValPair](modules.md#nckeyvalpair)
- [NCMintAsset](modules.md#ncmintasset)
- [NCPoolInfo](modules.md#ncpoolinfo)
- [NCPoolsInfo](modules.md#ncpoolsinfo)
- [NCReturnInfo](modules.md#ncreturninfo)
- [NCReturnTxs](modules.md#ncreturntxs)
- [NCStakeToPool](modules.md#ncstaketopool)
- [NCTxNcoBal](modules.md#nctxncobal)

## Type aliases

### NCCreatePerm

Ƭ **NCCreatePerm**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `author_prv_active_key` | `string` |
| `perm_name` | `string` |
| `perm_pub_key` | `string` |

#### Defined in

[src/types.ts:33](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L33)

___

### NCCreatePool

Ƭ **NCCreatePool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `owner_prv_active_key` | `string` |

#### Defined in

[src/types.ts:40](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L40)

___

### NCCreateUser

Ƭ **NCCreateUser**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cpu_amount?` | `string` |
| `net_amount?` | `string` |
| `newUser` | `string` |
| `newacc_prv_active_key` | `string` |
| `newacc_pub_active_key` | `string` |
| `newacc_pub_owner_key` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `payer_pub_key` | `string` |
| `ram_amt?` | `number` |
| `xfer?` | `boolean` |

#### Defined in

[src/types.ts:7](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L7)

___

### NCGetAccInfo

Ƭ **NCGetAccInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contract?` | `string` |
| `owner` | `string` |

#### Defined in

[src/types.ts:98](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L98)

___

### NCGetPoolInfo

Ƭ **NCGetPoolInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `string` |
| `owner?` | `string` |

#### Defined in

[src/types.ts:103](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L103)

___

### NCKeyPair

Ƭ **NCKeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prv_key` | `string` |
| `pub_key` | `string` |

#### Defined in

[src/types.ts:2](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L2)

___

### NCKeyValPair

Ƭ **NCKeyValPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string`[] |

#### Defined in

[src/types.ts:82](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L82)

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

[src/types.ts:87](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L87)

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

[src/types.ts:62](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L62)

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

[src/types.ts:76](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L76)

___

### NCReturnInfo

Ƭ **NCReturnInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acc_balances?` | `string`[] |

#### Defined in

[src/types.ts:108](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L108)

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
| `TxID_mintAsset?` | `string` |
| `TxID_stakeToPool?` | `string` |
| `TxID_txNcoBalance?` | `string` |

#### Defined in

[src/types.ts:21](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L21)

___

### NCStakeToPool

Ƭ **NCStakeToPool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `payer_public_key` | `string` |
| `to` | `string` |

#### Defined in

[src/types.ts:45](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L45)

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
| `payer_public_key` | `string` |
| `to` | `string` |

#### Defined in

[src/types.ts:53](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/types.ts#L53)
