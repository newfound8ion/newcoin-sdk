[newcoin-sdk](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Interfaces

- [AccountRAMDelta](../interfaces/internal_.AccountRAMDelta.md)
- [Act](../interfaces/internal_.Act.md)
- [Action](../interfaces/internal_.Action.md)
- [Authorization](../interfaces/internal_.Authorization.md)
- [Date](../interfaces/internal_.Date.md)
- [DateConstructor](../interfaces/internal_.DateConstructor.md)
- [DateTimeFormatOptions](../interfaces/internal_.DateTimeFormatOptions.md)
- [GetTransaction](../interfaces/internal_.GetTransaction.md)
- [Iterable](../interfaces/internal_.Iterable.md)
- [Iterator](../interfaces/internal_.Iterator.md)
- [IteratorReturnResult](../interfaces/internal_.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/internal_.IteratorYieldResult.md)
- [Promise](../interfaces/internal_.Promise.md)
- [PromiseConstructor](../interfaces/internal_.PromiseConstructor.md)
- [PromiseFulfilledResult](../interfaces/internal_.PromiseFulfilledResult.md)
- [PromiseLike](../interfaces/internal_.PromiseLike.md)
- [PromiseRejectedResult](../interfaces/internal_.PromiseRejectedResult.md)

### Type aliases

- [IteratorResult](internal_.md#iteratorresult)
- [NCCreatePool](internal_.md#nccreatepool)
- [NCCreateUser](internal_.md#nccreateuser)
- [NCGetAccInfo](internal_.md#ncgetaccinfo)
- [NCGetPoolInfo](internal_.md#ncgetpoolinfo)
- [NCKeyValPair](internal_.md#nckeyvalpair)
- [NCMintAsset](internal_.md#ncmintasset)
- [NCPoolInfo](internal_.md#ncpoolinfo)
- [NCPoolsInfo](internal_.md#ncpoolsinfo)
- [NCReturnTxs](internal_.md#ncreturntxs)
- [NCStakeToPool](internal_.md#ncstaketopool)
- [PromiseSettledResult](internal_.md#promisesettledresult)

### Variables

- [Date](internal_.md#date)
- [Promise](internal_.md#promise)

## Type aliases

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/internal_.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/internal_.IteratorReturnResult.md)<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:41

___

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

[src/types.ts:24](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L24)

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

[src/types.ts:2](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L2)

___

### NCGetAccInfo

Ƭ **NCGetAccInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | `string` |

#### Defined in

[src/types.ts:76](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L76)

___

### NCGetPoolInfo

Ƭ **NCGetPoolInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | `string` |

#### Defined in

[src/types.ts:80](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L80)

___

### NCKeyValPair

Ƭ **NCKeyValPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string`[] |

#### Defined in

[src/types.ts:59](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L59)

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
| `payer_public_key` | `string` |
| `sch_name?` | `string` |
| `tmpl_id?` | `number` |

#### Defined in

[src/types.ts:64](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L64)

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

[src/types.ts:39](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L39)

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

[src/types.ts:53](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L53)

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

#### Defined in

[src/types.ts:14](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L14)

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

[src/types.ts:31](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/types.ts#L31)

___

### PromiseSettledResult

Ƭ **PromiseSettledResult**<`T`\>: [`PromiseFulfilledResult`](../interfaces/internal_.PromiseFulfilledResult.md)<`T`\> \| [`PromiseRejectedResult`](../interfaces/internal_.PromiseRejectedResult.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/typescript/lib/lib.es2020.promise.d.ts:31

## Variables

### Date

• **Date**: [`DateConstructor`](../interfaces/internal_.DateConstructor.md)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:907

___

### Promise

• **Promise**: [`PromiseConstructor`](../interfaces/internal_.PromiseConstructor.md)

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:150
