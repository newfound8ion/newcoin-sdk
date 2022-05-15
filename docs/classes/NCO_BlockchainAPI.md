[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / NCO\_BlockchainAPI

# Class: NCO\_BlockchainAPI

## Table of contents

### Constructors

- [constructor](NCO_BlockchainAPI.md#constructor)

### Properties

- [aGen](NCO_BlockchainAPI.md#agen)
- [cApi](NCO_BlockchainAPI.md#capi)
- [hrpc](NCO_BlockchainAPI.md#hrpc)
- [mGen](NCO_BlockchainAPI.md#mgen)
- [nodeos\_rpc](NCO_BlockchainAPI.md#nodeos_rpc)
- [pGen](NCO_BlockchainAPI.md#pgen)
- [poolRpcApi](NCO_BlockchainAPI.md#poolrpcapi)
- [poolsRpcApi](NCO_BlockchainAPI.md#poolsrpcapi)
- [sdkGen](NCO_BlockchainAPI.md#sdkgen)
- [services](NCO_BlockchainAPI.md#services)
- [urls](NCO_BlockchainAPI.md#urls)
- [defaults](NCO_BlockchainAPI.md#defaults)

### Methods

- [SubmitTx](NCO_BlockchainAPI.md#submittx)
- [\_txBalance](NCO_BlockchainAPI.md#_txbalance)
- [approveDaoProposal](NCO_BlockchainAPI.md#approvedaoproposal)
- [approveDaoWhitelistProposal](NCO_BlockchainAPI.md#approvedaowhitelistproposal)
- [createCollection](NCO_BlockchainAPI.md#createcollection)
- [createDao](NCO_BlockchainAPI.md#createdao)
- [createDaoProposal](NCO_BlockchainAPI.md#createdaoproposal)
- [createDaoUserWhitelistProposal](NCO_BlockchainAPI.md#createdaouserwhitelistproposal)
- [createKeyPair](NCO_BlockchainAPI.md#createkeypair)
- [createPermission](NCO_BlockchainAPI.md#createpermission)
- [createPool](NCO_BlockchainAPI.md#createpool)
- [createUser](NCO_BlockchainAPI.md#createuser)
- [dldUnstakeMainDAO](NCO_BlockchainAPI.md#dldunstakemaindao)
- [executeDaoProposal](NCO_BlockchainAPI.md#executedaoproposal)
- [executeDaoWhitelistProposal](NCO_BlockchainAPI.md#executedaowhitelistproposal)
- [getAccountBalance](NCO_BlockchainAPI.md#getaccountbalance)
- [getDaoIdByOwner](NCO_BlockchainAPI.md#getdaoidbyowner)
- [getDaoProposal](NCO_BlockchainAPI.md#getdaoproposal)
- [getDaoProposals](NCO_BlockchainAPI.md#getdaoproposals)
- [getDaoWhitelistProposal](NCO_BlockchainAPI.md#getdaowhitelistproposal)
- [getDaoWhitelistProposals](NCO_BlockchainAPI.md#getdaowhitelistproposals)
- [getPoolInfo](NCO_BlockchainAPI.md#getpoolinfo)
- [getProposalVotes](NCO_BlockchainAPI.md#getproposalvotes)
- [getTxData](NCO_BlockchainAPI.md#gettxdata)
- [instUnstakeMainDAO](NCO_BlockchainAPI.md#instunstakemaindao)
- [linkPermission](NCO_BlockchainAPI.md#linkpermission)
- [listDaoProposals](NCO_BlockchainAPI.md#listdaoproposals)
- [listDaoWhitelistProposals](NCO_BlockchainAPI.md#listdaowhitelistproposals)
- [mintAsset](NCO_BlockchainAPI.md#mintasset)
- [stakeMainDAO](NCO_BlockchainAPI.md#stakemaindao)
- [stakePool](NCO_BlockchainAPI.md#stakepool)
- [txDAOTokenBalance](NCO_BlockchainAPI.md#txdaotokenbalance)
- [txGNCOBalance](NCO_BlockchainAPI.md#txgncobalance)
- [txNCOBalance](NCO_BlockchainAPI.md#txncobalance)
- [unstakePool](NCO_BlockchainAPI.md#unstakepool)
- [voteOnProposal](NCO_BlockchainAPI.md#voteonproposal)

## Constructors

### constructor

• **new NCO_BlockchainAPI**(`urls`, `services`)

Init the api

**`name`** newcoin-api

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | [`NCInitUrls`](../modules.md#nciniturls) |
| `services` | [`NCInitServices`](../modules.md#ncinitservices) |

#### Defined in

[index.ts:117](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L117)

## Properties

### aGen

• `Private` **aGen**: `ActionGenerator`

#### Defined in

[index.ts:100](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L100)

___

### cApi

• `Private` **cApi**: `default`

#### Defined in

[index.ts:98](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L98)

___

### hrpc

• `Private` **hrpc**: `JsonRpc`

#### Defined in

[index.ts:95](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L95)

___

### mGen

• `Private` **mGen**: `ActionGenerator`

#### Defined in

[index.ts:101](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L101)

___

### nodeos\_rpc

• `Private` **nodeos\_rpc**: `JsonRpc`

#### Defined in

[index.ts:94](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L94)

___

### pGen

• `Private` **pGen**: `ActionGenerator`

#### Defined in

[index.ts:102](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L102)

___

### poolRpcApi

• `Private` **poolRpcApi**: `default`

#### Defined in

[index.ts:97](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L97)

___

### poolsRpcApi

• `Private` **poolsRpcApi**: `default`

#### Defined in

[index.ts:96](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L96)

___

### sdkGen

• `Private` **sdkGen**: [`ActionGenerator`](internal_.ActionGenerator.md)

#### Defined in

[index.ts:103](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L103)

___

### services

• `Private` **services**: [`NCInitServices`](../modules.md#ncinitservices)

#### Defined in

[index.ts:91](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L91)

___

### urls

• `Private` **urls**: [`NCInitUrls`](../modules.md#nciniturls)

#### Defined in

[index.ts:90](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L90)

___

### defaults

▪ `Static` **defaults**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `devnet_services` | [`NCInitServices`](../modules.md#ncinitservices) |
| `devnet_urls` | [`NCInitUrls`](../modules.md#nciniturls) |

#### Defined in

[index.ts:105](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L105)

## Methods

### SubmitTx

▸ **SubmitTx**(`actions`, `public_keys`, `private_keys`): `Promise`<`TransactResult` \| `ReadOnlyTransactResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `any`[] |
| `public_keys` | `string`[] |
| `private_keys` | `string`[] |

#### Returns

`Promise`<`TransactResult` \| `ReadOnlyTransactResult`\>

#### Defined in

[index.ts:930](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L930)

___

### \_txBalance

▸ **_txBalance**(`contract`, `inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Transfer NCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `inpt` | [`NCTxBal`](../modules/internal_.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[index.ts:918](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L918)

___

### approveDaoProposal

▸ **approveDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules/internal_.md#ncapprovedaoproposal) | : NCApproveDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs.TxID_approveDaoProposal

#### Defined in

[index.ts:560](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L560)

___

### approveDaoWhitelistProposal

▸ **approveDaoWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules/internal_.md#ncapprovedaoproposal) | : NCApproveDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs.TxID_approveDaoProposal

#### Defined in

[index.ts:583](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L583)

___

### createCollection

▸ **createCollection**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create default collection for the account

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateCollection`](../modules/internal_.md#nccreatecollection) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create Collection and template transactions' ids

#### Defined in

[index.ts:197](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L197)

___

### createDao

▸ **createDao**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

DAO creation. One per account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDao`](../modules/internal_.md#nccreatedao) | : NCCreateDao |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id

#### Defined in

[index.ts:479](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L479)

___

### createDaoProposal

▸ **createDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDaoProposal`](../modules/internal_.md#nccreatedaoproposal) | : NCCreateDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id

#### Defined in

[index.ts:506](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L506)

___

### createDaoUserWhitelistProposal

▸ **createDaoUserWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDaoUserWhitelistProposal`](../modules/internal_.md#nccreatedaouserwhitelistproposal) | : NCCreateDaoUserWhitelistProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id

#### Defined in

[index.ts:534](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L534)

___

### createKeyPair

▸ **createKeyPair**(): `Promise`<[`NCKeyPair`](../modules/internal_.md#nckeypair)\>

Create a key pair assuming a secure environment (not frontend)

**`params`** none

#### Returns

`Promise`<[`NCKeyPair`](../modules/internal_.md#nckeypair)\>

An EOS key pair

#### Defined in

[index.ts:145](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L145)

___

### createPermission

▸ **createPermission**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create a new permission subordinate to the Active permission.
(future optional: allow under owner, TBD)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePermission`](../modules/internal_.md#nccreatepermission) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create permission transaction id

#### Defined in

[index.ts:265](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L265)

___

### createPool

▸ **createPool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Staking pools service, issuing social tokens

Create a staking pool for an account.
Selection of ticker and inflation/deflation optionality

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePool`](../modules/internal_.md#nccreatepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[index.ts:392](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L392)

___

### createUser

▸ **createUser**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create a user - multistage operation creating new user account,
defailt collection, schema and template for the account

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateUser`](../modules/internal_.md#nccreateuser) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs

#### Defined in

[index.ts:163](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L163)

___

### dldUnstakeMainDAO

▸ **dldUnstakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Delayed UnStake mainDAO delay without penalty

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules/internal_.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs

#### Defined in

[index.ts:366](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L366)

___

### executeDaoProposal

▸ **executeDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules/internal_.md#ncexecutedaoproposal) | : NCExecuteDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs.TxID_executeDaoProposal

#### Defined in

[index.ts:606](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L606)

___

### executeDaoWhitelistProposal

▸ **executeDaoWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules/internal_.md#ncexecutedaoproposal) | : NCExecuteDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs.TxID_executeDaoProposal

#### Defined in

[index.ts:628](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L628)

___

### getAccountBalance

▸ **getAccountBalance**(`acc`): `Promise`<`undefined` \| [`NCReturnInfo`](../modules/internal_.md#ncreturninfo)\>

Get account balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | [`NCGetAccInfo`](../modules/internal_.md#ncgetaccinfo) |

#### Returns

`Promise`<`undefined` \| [`NCReturnInfo`](../modules/internal_.md#ncreturninfo)\>

Tx data

#### Defined in

[index.ts:815](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L815)

___

### getDaoIdByOwner

▸ **getDaoIdByOwner**(`owner?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner?` | `string` |

#### Returns

`Promise`<`string`\>

NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id

#### Defined in

[index.ts:672](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L672)

___

### getDaoProposal

▸ **getDaoProposal**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules/internal_.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:703](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L703)

___

### getDaoProposals

▸ **getDaoProposals**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules/internal_.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:691](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L691)

___

### getDaoWhitelistProposal

▸ **getDaoWhitelistProposal**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules/internal_.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:723](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L723)

___

### getDaoWhitelistProposals

▸ **getDaoWhitelistProposals**(`dao_id`, `proposer`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dao_id` | `number` |
| `proposer` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:713](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L713)

___

### getPoolInfo

▸ **getPoolInfo**(`payload`): `Promise`<[`NCPoolsInfo`](../modules/internal_.md#ncpoolsinfo)\>

Get pool info

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`NCGetPoolInfo`](../modules/internal_.md#ncgetpoolinfo) |

#### Returns

`Promise`<[`NCPoolsInfo`](../modules/internal_.md#ncpoolsinfo)\>

Tx data

#### Defined in

[index.ts:883](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L883)

___

### getProposalVotes

▸ **getProposalVotes**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetVotes`](../modules/internal_.md#ncgetvotes) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:767](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L767)

___

### getTxData

▸ **getTxData**(`txid`): `Promise`<`GetTransaction`<`unknown`\>\>

Get trasaction data

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`GetTransaction`<`unknown`\>\>

Tx data

#### Defined in

[index.ts:907](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L907)

___

### instUnstakeMainDAO

▸ **instUnstakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Instant UnStake mainDAO with penalty

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules/internal_.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs

#### Defined in

[index.ts:343](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L343)

___

### linkPermission

▸ **linkPermission**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Link a permission to a specific action of a specific contract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCLinkPerm`](../modules/internal_.md#nclinkperm) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Link permission transaction id

#### Defined in

[index.ts:284](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L284)

___

### listDaoProposals

▸ **listDaoProposals**(`inpt`): `Promise`<{ `id`: `undefined` \| `string` = inpt.dao\_id; `list`: `any` = w }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules/internal_.md#ncgetdaoproposals) |

#### Returns

`Promise`<{ `id`: `undefined` \| `string` = inpt.dao\_id; `list`: `any` = w }\>

#### Defined in

[index.ts:733](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L733)

___

### listDaoWhitelistProposals

▸ **listDaoWhitelistProposals**(`inpt`): `Promise`<{ `id`: `string` = dao\_id; `list`: `any` = w }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules/internal_.md#ncgetdaoproposals) |

#### Returns

`Promise`<{ `id`: `string` = dao\_id; `list`: `any` = w }\>

#### Defined in

[index.ts:750](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L750)

___

### mintAsset

▸ **mintAsset**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Mint an asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintAsset`](../modules/internal_.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[index.ts:781](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L781)

___

### stakeMainDAO

▸ **stakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules/internal_.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

#### Defined in

[index.ts:322](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L322)

___

### stakePool

▸ **stakePool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Stake to creator pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakePool`](../modules/internal_.md#ncstakepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[index.ts:421](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L421)

___

### txDAOTokenBalance

▸ **txDAOTokenBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Transfer creator tokens between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules/internal_.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[index.ts:873](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L873)

___

### txGNCOBalance

▸ **txGNCOBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Transfer GNCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules/internal_.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[index.ts:853](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L853)

___

### txNCOBalance

▸ **txNCOBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Transfer NCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules/internal_.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[index.ts:863](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L863)

___

### unstakePool

▸ **unstakePool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Unstake creator pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCUnstakePool`](../modules/internal_.md#ncunstakepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[index.ts:457](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L457)

___

### voteOnProposal

▸ **voteOnProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCDaoProposalVote`](../modules/internal_.md#ncdaoproposalvote) | : NCCreateDao |

#### Returns

`Promise`<[`NCReturnTxs`](../modules/internal_.md#ncreturntxs)\>

NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id

#### Defined in

[index.ts:648](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/index.ts#L648)
