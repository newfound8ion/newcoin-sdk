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
- [claimAuctionWinBid](NCO_BlockchainAPI.md#claimauctionwinbid)
- [claimNftsFromAuction](NCO_BlockchainAPI.md#claimnftsfromauction)
- [createAuction](NCO_BlockchainAPI.md#createauction)
- [createCollection](NCO_BlockchainAPI.md#createcollection)
- [createDao](NCO_BlockchainAPI.md#createdao)
- [createDaoProposal](NCO_BlockchainAPI.md#createdaoproposal)
- [createDaoStakeProposal](NCO_BlockchainAPI.md#createdaostakeproposal)
- [createDaoUserWhitelistProposal](NCO_BlockchainAPI.md#createdaouserwhitelistproposal)
- [createKeyPair](NCO_BlockchainAPI.md#createkeypair)
- [createPermission](NCO_BlockchainAPI.md#createpermission)
- [createPool](NCO_BlockchainAPI.md#createpool)
- [createUser](NCO_BlockchainAPI.md#createuser)
- [dldUnstakeMainDAO](NCO_BlockchainAPI.md#dldunstakemaindao)
- [editAuction](NCO_BlockchainAPI.md#editauction)
- [eraseAuction](NCO_BlockchainAPI.md#eraseauction)
- [executeDaoProposal](NCO_BlockchainAPI.md#executedaoproposal)
- [executeDaoWhitelistProposal](NCO_BlockchainAPI.md#executedaowhitelistproposal)
- [getAccountBalance](NCO_BlockchainAPI.md#getaccountbalance)
- [getDaoIdByOwner](NCO_BlockchainAPI.md#getdaoidbyowner)
- [getDaoProposal](NCO_BlockchainAPI.md#getdaoproposal)
- [getDaoProposals](NCO_BlockchainAPI.md#getdaoproposals)
- [getDaoStakeProposals](NCO_BlockchainAPI.md#getdaostakeproposals)
- [getDaoWhitelist](NCO_BlockchainAPI.md#getdaowhitelist)
- [getDaoWhitelistProposal](NCO_BlockchainAPI.md#getdaowhitelistproposal)
- [getDaoWhitelistProposals](NCO_BlockchainAPI.md#getdaowhitelistproposals)
- [getPoolInfo](NCO_BlockchainAPI.md#getpoolinfo)
- [getTxData](NCO_BlockchainAPI.md#gettxdata)
- [getVotes](NCO_BlockchainAPI.md#getvotes)
- [instUnstakeMainDAO](NCO_BlockchainAPI.md#instunstakemaindao)
- [linkPermission](NCO_BlockchainAPI.md#linkpermission)
- [listDaoProposals](NCO_BlockchainAPI.md#listdaoproposals)
- [listDaoWhitelistProposals](NCO_BlockchainAPI.md#listdaowhitelistproposals)
- [mintAsset](NCO_BlockchainAPI.md#mintasset)
- [placeAuctionBid](NCO_BlockchainAPI.md#placeauctionbid)
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

**`Name`**

newcoin-api

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `urls` | [`NCInitUrls`](../modules.md#nciniturls) | `undefined` |
| `services` | [`NCInitServices`](../modules.md#ncinitservices) | `undefined` |
| `debug` | `boolean` | `false` |

#### Defined in

[index.ts:134](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L134)

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

[index.ts:121](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L121)

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

[index.ts:1187](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1187)

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

[index.ts:1098](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1098)

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

[index.ts:638](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L638)

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

[index.ts:661](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L661)

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

[index.ts:208](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L208)

___

### claimAuctionWinBid

▸ **claimAuctionWinBid**(`params`, `input`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Claim the winning bid as the seller of an auction

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ClaimNftsParams`](../interfaces/internal_.ClaimNftsParams.md) |
| `input` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

claim transaction id

#### Defined in

[index.ts:1163](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1163)

___

### claimNftsFromAuction

▸ **claimNftsFromAuction**(`params`, `input`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Claim NFTs whenever you win an auction

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ClaimNftsParams`](../interfaces/internal_.ClaimNftsParams.md) |
| `input` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

claim transaction id

#### Defined in

[index.ts:1154](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1154)

___

### createAuction

▸ **createAuction**(`params`, `input`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create a new auction with the specified parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateAuctionParams`](../interfaces/internal_.CreateAuctionParams.md) |
| `input` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

create auction transaction id

#### Defined in

[index.ts:1136](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1136)

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

[index.ts:225](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L225)

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

[index.ts:525](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L525)

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

[index.ts:554](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L554)

___

### createDaoStakeProposal

▸ **createDaoStakeProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDaoStakeProposal`](../modules.md#nccreatedaostakeproposal) | : NCCreateDaoUserWhitelistProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id

#### Defined in

[index.ts:609](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L609)

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

[index.ts:582](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L582)

___

### createKeyPair

▸ **createKeyPair**(): `Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

Create a key pair assuming a secure environment (not frontend)

**`Params`**

none

#### Returns

`Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

An EOS key pair

#### Defined in

[index.ts:163](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L163)

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

[index.ts:311](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L311)

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

[index.ts:438](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L438)

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

[index.ts:181](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L181)

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

[index.ts:412](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L412)

___

### editAuction

▸ **editAuction**(`params`, `input`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Edit an auction with the specified parameters, internally it erases the existing one
and creates a new one with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`EditAuctionParams`](../interfaces/internal_.EditAuctionParams.md) |
| `input` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

transaction id

#### Defined in

[index.ts:1182](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1182)

___

### eraseAuction

▸ **eraseAuction**(`params`, `input`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Erase an auction as long as it has no bids

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ClaimNftsParams`](../interfaces/internal_.ClaimNftsParams.md) |
| `input` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

delete transaction id

#### Defined in

[index.ts:1172](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1172)

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

[index.ts:684](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L684)

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

[index.ts:706](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L706)

___

### getAccountBalance

▸ **getAccountBalance**(`acc`): `Promise`<[`NCReturnInfo`](../modules.md#ncreturninfo)\>

Get account balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | [`NCGetAccInfo`](../modules.md#ncgetaccinfo) |

#### Returns

`Promise`<[`NCReturnInfo`](../modules.md#ncreturninfo)\>

Tx data

#### Defined in

[index.ts:995](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L995)

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

[index.ts:800](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L800)

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

[index.ts:901](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L901)

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

[index.ts:820](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L820)

___

### getDaoStakeProposals

▸ **getDaoStakeProposals**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:874](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L874)

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

[index.ts:945](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L945)

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

[index.ts:911](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L911)

___

### getDaoWhitelistProposals

▸ **getDaoWhitelistProposals**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:847](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L847)

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

[index.ts:1063](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1063)

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

[index.ts:1087](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1087)

___

### getVotes

▸ **getVotes**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetVotes`](../modules.md#ncgetvotes) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:967](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L967)

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

[index.ts:389](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L389)

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

[index.ts:330](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L330)

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

[index.ts:920](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L920)

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

[index.ts:933](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L933)

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

[index.ts:766](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L766)

___

### placeAuctionBid

▸ **placeAuctionBid**(`params`, `input`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Place a new bid into an active auction

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PlaceBidParams`](../interfaces/internal_.PlaceBidParams.md) |
| `input` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

bid transaction id

#### Defined in

[index.ts:1145](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1145)

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

[index.ts:368](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L368)

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

[index.ts:467](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L467)

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

[index.ts:1053](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1053)

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

[index.ts:1033](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1033)

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

[index.ts:1043](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L1043)

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

[index.ts:503](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L503)

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

[index.ts:726](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L726)

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

[index.ts:744](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/index.ts#L744)
