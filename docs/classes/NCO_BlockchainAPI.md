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

[src/index.ts:415](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L415)

## Properties

### \_h\_url

• `Private` **\_h\_url**: `string` = `""`

**`internal`**

#### Defined in

[src/index.ts:407](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L407)

___

### \_url

• `Private` **\_url**: `string` = `""`

**`internal`**

#### Defined in

[src/index.ts:405](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L405)

## Methods

### createKeyPair

▸ **createKeyPair**(): [`Promise`](../modules/internal_.md#promise)<[`NCKeyPair`](../modules.md#nckeypair)\>

Create a key pair assuming a secure environment (not frontend)

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCKeyPair`](../modules.md#nckeypair)\>

Create User transaction id

#### Defined in

[src/index.ts:424](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L424)

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

[src/index.ts:529](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L529)

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

[src/index.ts:563](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L563)

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

[src/index.ts:442](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L442)

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

[src/index.ts:646](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L646)

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

[src/index.ts:691](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L691)

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

[src/index.ts:635](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L635)

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

[src/index.ts:605](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L605)

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

[src/index.ts:579](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L579)

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

[src/index.ts:675](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/7ad3fe8/src/index.ts#L675)
