[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / NCO\_BlockchainAPI

# Class: NCO\_BlockchainAPI

The primary tool to interact with [https://newcoin.org](newcoin.org).

This is an early alpha.

See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.

## Table of contents

### Constructors

- [constructor](NCO_BlockchainAPI.md#constructor)

### Properties

- [\_h\_url](NCO_BlockchainAPI.md#_h_url)
- [\_url](NCO_BlockchainAPI.md#_url)

### Methods

- [createCollection](NCO_BlockchainAPI.md#createcollection)
- [createKeyPair](NCO_BlockchainAPI.md#createkeypair)
- [createPermission](NCO_BlockchainAPI.md#createpermission)
- [createPool](NCO_BlockchainAPI.md#createpool)
- [createUser](NCO_BlockchainAPI.md#createuser)
- [getAccountBalance](NCO_BlockchainAPI.md#getaccountbalance)
- [getPoolInfo](NCO_BlockchainAPI.md#getpoolinfo)
- [getTxData](NCO_BlockchainAPI.md#gettxdata)
- [mintAsset](NCO_BlockchainAPI.md#mintasset)
- [stakeToPool](NCO_BlockchainAPI.md#staketopool)
- [txNcoBalance](NCO_BlockchainAPI.md#txncobalance)

## Constructors

### constructor

• **new NCO_BlockchainAPI**(`__namedParameters`)

Init the api

**`name`** newcoin-api

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.bc_url` | `string` |
| `__namedParameters.hyp_url` | `string` |

#### Defined in

[src/index.ts:408](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L408)

## Properties

### \_h\_url

• `Private` **\_h\_url**: `string` = `""`

**`internal`**

#### Defined in

[src/index.ts:400](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L400)

___

### \_url

• `Private` **\_url**: `string` = `""`

**`internal`**

#### Defined in

[src/index.ts:398](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L398)

## Methods

### createCollection

▸ **createCollection**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateCollection`](../modules.md#nccreatecollection) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[src/index.ts:464](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L464)

___

### createKeyPair

▸ **createKeyPair**(): [`Promise`](../modules/internal_.md#promise)<[`NCKeyPair`](../modules.md#nckeypair)\>

Create a key pair assuming a secure environment (not frontend)

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCKeyPair`](../modules.md#nckeypair)\>

Create User transaction id

#### Defined in

[src/index.ts:417](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L417)

___

### createPermission

▸ **createPermission**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create a new permission.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePerm`](../modules.md#nccreateperm) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[src/index.ts:528](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L528)

___

### createPool

▸ **createPool**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create a staking pool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePool`](../modules.md#nccreatepool) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[src/index.ts:561](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L561)

___

### createUser

▸ **createUser**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create a user
NOTE: New collection, schema and template names are formed from user name with c, s and t
replacing the dot in the user name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateUser`](../modules.md#nccreateuser) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create User transaction id

#### Defined in

[src/index.ts:435](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L435)

___

### getAccountBalance

▸ **getAccountBalance**(`acc`): [`Promise`](../modules/internal_.md#promise)<`undefined` \| [`NCReturnInfo`](../modules.md#ncreturninfo)\>

Get account balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | [`NCGetAccInfo`](../modules.md#ncgetaccinfo) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`undefined` \| [`NCReturnInfo`](../modules.md#ncreturninfo)\>

Tx data

#### Defined in

[src/index.ts:648](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L648)

___

### getPoolInfo

▸ **getPoolInfo**(`payload`): [`Promise`](../modules/internal_.md#promise)<[`NCPoolsInfo`](../modules.md#ncpoolsinfo)\>

Get pool info

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`NCGetPoolInfo`](../modules.md#ncgetpoolinfo) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCPoolsInfo`](../modules.md#ncpoolsinfo)\>

Tx data

#### Defined in

[src/index.ts:693](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L693)

___

### getTxData

▸ **getTxData**(`txid`): [`Promise`](../modules/internal_.md#promise)<[`GetTransaction`](../interfaces/internal_.GetTransaction.md)<`unknown`\>\>

Get trasaction data

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`GetTransaction`](../interfaces/internal_.GetTransaction.md)<`unknown`\>\>

Tx data

#### Defined in

[src/index.ts:637](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L637)

___

### mintAsset

▸ **mintAsset**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Mint an asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[src/index.ts:603](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L603)

___

### stakeToPool

▸ **stakeToPool**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Stake to pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeToPool`](../modules.md#ncstaketopool) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[src/index.ts:577](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L577)

___

### txNcoBalance

▸ **txNcoBalance**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer NCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxNcoBal`](../modules.md#nctxncobal) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[src/index.ts:677](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/4f77121/src/index.ts#L677)
