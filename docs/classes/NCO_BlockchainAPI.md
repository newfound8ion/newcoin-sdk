[newcoin-sdk](../README.md) / [Exports](../modules.md) / NCO\_BlockchainAPI

# Class: NCO\_BlockchainAPI

The primary tool to interact with [https://newcoin.org](newcoin.org).

This is an early alpha.

See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.

## Table of contents

### Constructors

- [constructor](NCO_BlockchainAPI.md#constructor)

### Methods

- [createPool](NCO_BlockchainAPI.md#createpool)
- [createUser](NCO_BlockchainAPI.md#createuser)
- [getAccountBalance](NCO_BlockchainAPI.md#getaccountbalance)
- [getPoolInfo](NCO_BlockchainAPI.md#getpoolinfo)
- [getTxData](NCO_BlockchainAPI.md#gettxdata)
- [mintAsset](NCO_BlockchainAPI.md#mintasset)
- [stakeToPool](NCO_BlockchainAPI.md#staketopool)

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

[src/index.ts:351](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/index.ts#L351)

## Methods

### createPool

▸ **createPool**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create a poll.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePool`](../modules/internal_.md#nccreatepool) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[src/index.ts:411](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/index.ts#L411)

___

### createUser

▸ **createUser**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create a user
NOTE: New collection, schema and template names are formed from user name with c, s and t replacing the dot in the user name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateUser`](../modules/internal_.md#nccreateuser) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create User transaction id

#### Defined in

[src/index.ts:361](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/index.ts#L361)

___

### getAccountBalance

▸ **getAccountBalance**(`acc`): [`Promise`](../modules/internal_.md#promise)<`any`\>

Get account balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | [`NCGetAccInfo`](../modules/internal_.md#ncgetaccinfo) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`any`\>

Tx data

#### Defined in

[src/index.ts:483](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/index.ts#L483)

___

### getPoolInfo

▸ **getPoolInfo**(`acc`): [`Promise`](../modules/internal_.md#promise)<[`NCPoolsInfo`](../modules/internal_.md#ncpoolsinfo)\>

Get pool info

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | [`NCGetPoolInfo`](../modules/internal_.md#ncgetpoolinfo) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCPoolsInfo`](../modules/internal_.md#ncpoolsinfo)\>

Tx data

#### Defined in

[src/index.ts:507](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/index.ts#L507)

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

[src/index.ts:472](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/index.ts#L472)

___

### mintAsset

▸ **mintAsset**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Mint an asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintAsset`](../modules/internal_.md#ncmintasset) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[src/index.ts:446](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/index.ts#L446)

___

### stakeToPool

▸ **stakeToPool**(`inpt`): [`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Stake to pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeToPool`](../modules/internal_.md#ncstaketopool) |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[src/index.ts:423](https://gitlab.com/newlife2/newlife-eosio/-/blob/9c011ed/src/index.ts#L423)
