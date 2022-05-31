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

• **new NCO_BlockchainAPI**(`urls`, `services`)

Init the api

**`name`** newcoin-api

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | [`NCInitUrls`](../modules.md#nciniturls) |
| `services` | [`NCInitServices`](../modules.md#ncinitservices) |

#### Defined in

[index.ts:132](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L132)

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

[index.ts:119](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L119)

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

[index.ts:976](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L976)

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

[index.ts:964](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L964)

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

[index.ts:591](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L591)

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

[index.ts:614](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L614)

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

[index.ts:212](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L212)

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

[index.ts:494](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L494)

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

[index.ts:537](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L537)

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

[index.ts:565](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L565)

___

### createKeyPair

▸ **createKeyPair**(): `Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

Create a key pair assuming a secure environment (not frontend)

**`params`** none

#### Returns

`Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

An EOS key pair

#### Defined in

[index.ts:160](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L160)

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

[index.ts:280](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L280)

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

[index.ts:407](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L407)

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

[index.ts:178](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L178)

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

[index.ts:381](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L381)

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

[index.ts:637](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L637)

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

[index.ts:659](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L659)

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

[index.ts:861](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L861)

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

[index.ts:721](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L721)

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

[index.ts:749](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L749)

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

[index.ts:517](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L517)

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

[index.ts:742](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L742)

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

[index.ts:769](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L769)

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

[index.ts:759](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L759)

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

[index.ts:929](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L929)

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

[index.ts:813](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L813)

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

[index.ts:953](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L953)

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

[index.ts:358](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L358)

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

[index.ts:299](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L299)

___

### listDaoProposals

▸ **listDaoProposals**(`inpt`): `Promise`<{ `id`: `undefined` \| `string` = inpt.dao\_id; `list`: `any` = w }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<{ `id`: `undefined` \| `string` = inpt.dao\_id; `list`: `any` = w }\>

#### Defined in

[index.ts:779](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L779)

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

[index.ts:796](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L796)

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

[index.ts:827](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L827)

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

[index.ts:337](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L337)

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

[index.ts:436](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L436)

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

[index.ts:919](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L919)

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

[index.ts:899](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L899)

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

[index.ts:909](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L909)

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

[index.ts:472](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L472)

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

[index.ts:679](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L679)

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

[index.ts:697](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/index.ts#L697)
