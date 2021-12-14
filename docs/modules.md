[@newcoin-foundation/newcoin-sdk](README.md) / Exports

# @newcoin-foundation/newcoin-sdk

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)

### Classes

- [NCO\_BlockchainAPI](classes/NCO_BlockchainAPI.md)

### Type aliases

- [NCCreatePool](modules.md#nccreatepool)
- [NCCreateUser](modules.md#nccreateuser)
- [NCGetAccInfo](modules.md#ncgetaccinfo)
- [NCGetPoolInfo](modules.md#ncgetpoolinfo)
- [NCKeyValPair](modules.md#nckeyvalpair)
- [NCMintAsset](modules.md#ncmintasset)
- [NCPoolInfo](modules.md#ncpoolinfo)
- [NCPoolsInfo](modules.md#ncpoolsinfo)
- [NCReturnInfo](modules.md#ncreturninfo)
- [NCReturnTxs](modules.md#ncreturntxs)
- [NCStakeToPool](modules.md#ncstaketopool)
- [NCTxNcoBal](modules.md#nctxncobal)

## Type aliases

### NCCreatePool

Ƭ **NCCreatePool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `payer_public_key` | `string` |

#### Defined in

[src/types.ts:25](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L25)

___

### NCCreateUser

Ƭ **NCCreateUser**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cpu_amount?` | `string` |
| `net_amount?` | `string` |
| `newUser` | `string` |
| `newacc_public_active_key` | `string` |
| `newacc_public_owner_key` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `ram_amt?` | `number` |
| `xfer?` | `boolean` |

#### Defined in

[src/types.ts:2](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L2)

___

### NCGetAccInfo

Ƭ **NCGetAccInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contract?` | `string` |
| `owner` | `string` |

#### Defined in

[src/types.ts:86](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L86)

___

### NCGetPoolInfo

Ƭ **NCGetPoolInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | `string` |

#### Defined in

[src/types.ts:91](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L91)

___

### NCKeyValPair

Ƭ **NCKeyValPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string`[] |

#### Defined in

[src/types.ts:69](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L69)

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
| `payer_public_key` | `string` |
| `sch_name?` | `string` |
| `tmpl_id?` | `number` |

#### Defined in

[src/types.ts:74](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L74)

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

[src/types.ts:49](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L49)

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

[src/types.ts:63](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L63)

___

### NCReturnInfo

Ƭ **NCReturnInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acc_balances?` | `string`[] |

#### Defined in

[src/types.ts:95](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L95)

___

### NCReturnTxs

Ƭ **NCReturnTxs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TxID_createAcc?` | `string` |
| `TxID_createCol?` | `string` |
| `TxID_createPool?` | `string` |
| `TxID_createSch?` | `string` |
| `TxID_createTpl?` | `string` |
| `TxID_mintAsset?` | `string` |
| `TxID_stakeToPool?` | `string` |
| `TxID_txNcoBalance?` | `string` |

#### Defined in

[src/types.ts:14](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L14)

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

[src/types.ts:32](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L32)

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

[src/types.ts:40](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3aca634/src/types.ts#L40)
