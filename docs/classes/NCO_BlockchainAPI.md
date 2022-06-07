[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / NCO\_BlockchainAPI

# Class: NCO\_BlockchainAPI

The primary tool to interact with [https://newcoin.org](newcoin.org).

This is an early alpha.

See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.

## Table of contents

### Constructors

- [constructor](NCO_BlockchainAPI.md#constructor)

### Properties

- [defaults](NCO_BlockchainAPI.md#defaults)

### Methods

- [SubmitTx](NCO_BlockchainAPI.md#submittx)
- [\_txBalance](NCO_BlockchainAPI.md#_txbalance)
- [approveDaoProposal](NCO_BlockchainAPI.md#approvedaoproposal)
- [approveDaoWhitelistProposal](NCO_BlockchainAPI.md#approvedaowhitelistproposal)
- [buyRam](NCO_BlockchainAPI.md#buyram)
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
- [getDaoWhitelist](NCO_BlockchainAPI.md#getdaowhitelist)
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
- [withdrawVoteDeposit](NCO_BlockchainAPI.md#withdrawvotedeposit)

## Constructors

### constructor

• **new NCO_BlockchainAPI**(`urls`, `services`, `debug?`)

Init the api

**`name`** newcoin-api

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `urls` | [`NCInitUrls`](../modules.md#nciniturls) | `undefined` |
| `services` | [`NCInitServices`](../modules.md#ncinitservices) | `undefined` |
| `debug` | `boolean` | `false` |

#### Defined in

[index.ts:134](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L134)

## Properties

### defaults

▪ `Static` **defaults**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default_schema` | { `name`: `string` = 'name'; `type`: `string` = "string" }[] |
| `devnet_services` | [`NCInitServices`](../modules.md#ncinitservices) |
| `devnet_urls` | [`NCInitUrls`](../modules.md#nciniturls) |

#### Defined in

[index.ts:121](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L121)

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

[index.ts:1000](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L1000)

___

### \_txBalance

▸ **_txBalance**(`contract`, `inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer NCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[index.ts:988](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L988)

___

### approveDaoProposal

▸ **approveDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules.md#ncapprovedaoproposal) | : NCApproveDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_approveDaoProposal

#### Defined in

[index.ts:617](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L617)

___

### approveDaoWhitelistProposal

▸ **approveDaoWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules.md#ncapprovedaoproposal) | : NCApproveDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_approveDaoProposal

#### Defined in

[index.ts:640](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L640)

___

### buyRam

▸ **buyRam**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCBuyRam`](../modules/internal_.md#ncbuyram) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:209](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L209)

___

### createCollection

▸ **createCollection**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create default collection for the account

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateCollection`](../modules.md#nccreatecollection) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Collection and template transactions' ids

#### Defined in

[index.ts:226](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L226)

___

### createDao

▸ **createDao**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

DAO creation. One per account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDao`](../modules.md#nccreatedao) | : NCCreateDao |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id

#### Defined in

[index.ts:508](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L508)

___

### createDaoProposal

▸ **createDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDaoProposal`](../modules.md#nccreatedaoproposal) | : NCCreateDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id

#### Defined in

[index.ts:563](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L563)

___

### createDaoUserWhitelistProposal

▸ **createDaoUserWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDaoUserWhitelistProposal`](../modules.md#nccreatedaouserwhitelistproposal) | : NCCreateDaoUserWhitelistProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id

#### Defined in

[index.ts:591](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L591)

___

### createKeyPair

▸ **createKeyPair**(): `Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

Create a key pair assuming a secure environment (not frontend)

**`params`** none

#### Returns

`Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

An EOS key pair

#### Defined in

[index.ts:163](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L163)

___

### createPermission

▸ **createPermission**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create a new permission subordinate to the Active permission.
(future optional: allow under owner, TBD)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePermission`](../modules.md#nccreatepermission) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create permission transaction id

#### Defined in

[index.ts:294](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L294)

___

### createPool

▸ **createPool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Staking pools service, issuing social tokens

Create a staking pool for an account.
Selection of ticker and inflation/deflation optionality

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePool`](../modules.md#nccreatepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[index.ts:421](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L421)

___

### createUser

▸ **createUser**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create a user - multistage operation creating new user account,
defailt collection, schema and template for the account

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateUser`](../modules.md#nccreateuser) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs

#### Defined in

[index.ts:181](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L181)

___

### dldUnstakeMainDAO

▸ **dldUnstakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Delayed UnStake mainDAO delay without penalty

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs

#### Defined in

[index.ts:395](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L395)

___

### executeDaoProposal

▸ **executeDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules.md#ncexecutedaoproposal) | : NCExecuteDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_executeDaoProposal

#### Defined in

[index.ts:663](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L663)

___

### executeDaoWhitelistProposal

▸ **executeDaoWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules.md#ncexecutedaoproposal) | : NCExecuteDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_executeDaoProposal

#### Defined in

[index.ts:685](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L685)

___

### getAccountBalance

▸ **getAccountBalance**(`acc`): `Promise`<`undefined` \| [`NCReturnInfo`](../modules.md#ncreturninfo)\>

Get account balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | [`NCGetAccInfo`](../modules.md#ncgetaccinfo) |

#### Returns

`Promise`<`undefined` \| [`NCReturnInfo`](../modules.md#ncreturninfo)\>

Tx data

#### Defined in

[index.ts:885](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L885)

___

### getDaoIdByOwner

▸ **getDaoIdByOwner**(`owner?`, `noFail?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner?` | `string` |
| `noFail?` | `boolean` |

#### Returns

`Promise`<`string`\>

NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id

#### Defined in

[index.ts:747](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L747)

___

### getDaoProposal

▸ **getDaoProposal**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:776](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L776)

___

### getDaoProposals

▸ **getDaoProposals**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:531](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L531)

___

### getDaoWhitelist

▸ **getDaoWhitelist**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoWhiteList`](../modules.md#ncgetdaowhitelist) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:768](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L768)

___

### getDaoWhitelistProposal

▸ **getDaoWhitelistProposal**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:796](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L796)

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

[index.ts:786](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L786)

___

### getPoolInfo

▸ **getPoolInfo**(`payload`): `Promise`<[`NCPoolsInfo`](../modules.md#ncpoolsinfo)\>

Get pool info

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`NCGetPoolInfo`](../modules.md#ncgetpoolinfo) |

#### Returns

`Promise`<[`NCPoolsInfo`](../modules.md#ncpoolsinfo)\>

Tx data

#### Defined in

[index.ts:953](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L953)

___

### getProposalVotes

▸ **getProposalVotes**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetVotes`](../modules.md#ncgetvotes) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:837](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L837)

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

[index.ts:977](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L977)

___

### instUnstakeMainDAO

▸ **instUnstakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Instant UnStake mainDAO with penalty

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs

#### Defined in

[index.ts:372](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L372)

___

### linkPermission

▸ **linkPermission**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Link a permission to a specific action of a specific contract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCLinkPerm`](../modules.md#nclinkperm) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Link permission transaction id

#### Defined in

[index.ts:313](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L313)

___

### listDaoProposals

▸ **listDaoProposals**(`inpt`): `Promise`<{ `id`: `string` = dao\_id; `list`: `any` = w }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<{ `id`: `string` = dao\_id; `list`: `any` = w }\>

#### Defined in

[index.ts:806](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L806)

___

### listDaoWhitelistProposals

▸ **listDaoWhitelistProposals**(`inpt`): `Promise`<{ `id`: `string` = dao\_id; `list`: `any` = w }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<{ `id`: `string` = dao\_id; `list`: `any` = w }\>

#### Defined in

[index.ts:821](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L821)

___

### mintAsset

▸ **mintAsset**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Mint an asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[index.ts:851](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L851)

___

### stakeMainDAO

▸ **stakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:351](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L351)

___

### stakePool

▸ **stakePool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Stake to creator pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakePool`](../modules.md#ncstakepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[index.ts:450](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L450)

___

### txDAOTokenBalance

▸ **txDAOTokenBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer creator tokens between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[index.ts:943](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L943)

___

### txGNCOBalance

▸ **txGNCOBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer GNCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[index.ts:923](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L923)

___

### txNCOBalance

▸ **txNCOBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer NCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[index.ts:933](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L933)

___

### unstakePool

▸ **unstakePool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Unstake creator pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCUnstakePool`](../modules.md#ncunstakepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[index.ts:486](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L486)

___

### voteOnProposal

▸ **voteOnProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCDaoProposalVote`](../modules.md#ncdaoproposalvote) | : NCCreateDao |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id

#### Defined in

[index.ts:705](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L705)

___

### withdrawVoteDeposit

▸ **withdrawVoteDeposit**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCDaoWithdrawVoteDeposit`](../modules/internal_.md#ncdaowithdrawvotedeposit) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:723](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/c697592/src/index.ts#L723)
