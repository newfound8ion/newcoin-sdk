[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / default

# Class: default

[<internal>](../modules/internal_.md).default

## Table of contents

### Constructors

- [constructor](internal_.default.md#constructor)

### Properties

- [contract](internal_.default.md#contract)
- [fetch](internal_.default.md#fetch)
- [nodeos\_url](internal_.default.md#nodeos_url)

### Methods

- [getDAOByDescription](internal_.default.md#getdaobydescription)
- [getDAOByID](internal_.default.md#getdaobyid)
- [getDAOByOwner](internal_.default.md#getdaobyowner)
- [getDAOWhiteList](internal_.default.md#getdaowhitelist)
- [getDeflateProposal](internal_.default.md#getdeflateproposal)
- [getDeflateProposalByProposer](internal_.default.md#getdeflateproposalbyproposer)
- [getInflateProposal](internal_.default.md#getinflateproposal)
- [getInflateProposalByProposer](internal_.default.md#getinflateproposalbyproposer)
- [getProposalByID](internal_.default.md#getproposalbyid)
- [getProposalByProposer](internal_.default.md#getproposalbyproposer)
- [getStakeProposal](internal_.default.md#getstakeproposal)
- [getStakeProposalByProposer](internal_.default.md#getstakeproposalbyproposer)
- [getTableRows](internal_.default.md#gettablerows)
- [getVote](internal_.default.md#getvote)
- [getVoteBySHA256](internal_.default.md#getvotebysha256)
- [getWhiteListProposal](internal_.default.md#getwhitelistproposal)
- [getWhiteListProposalByProposer](internal_.default.md#getwhitelistproposalbyproposer)

## Constructors

### constructor

• **new default**(`nodeos_url`, `contract`, `fetch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeos_url` | `string` |
| `contract` | `string` |
| `fetch` | `any` |

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:9

## Properties

### contract

• `Readonly` **contract**: `string`

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:7

___

### fetch

• `Readonly` **fetch**: `any`

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:8

___

### nodeos\_url

• `Readonly` **nodeos\_url**: `string`

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:6

## Methods

### getDAOByDescription

▸ **getDAOByDescription**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DAOPayload`](../interfaces/internal_.DAOPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:13

___

### getDAOByID

▸ **getDAOByID**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DAOPayload`](../interfaces/internal_.DAOPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:11

___

### getDAOByOwner

▸ **getDAOByOwner**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DAOPayload`](../interfaces/internal_.DAOPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:12

___

### getDAOWhiteList

▸ **getDAOWhiteList**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`WhitelistPayload`](../interfaces/internal_.WhitelistPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:14

___

### getDeflateProposal

▸ **getDeflateProposal**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:21

___

### getDeflateProposalByProposer

▸ **getDeflateProposalByProposer**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:22

___

### getInflateProposal

▸ **getInflateProposal**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:19

___

### getInflateProposalByProposer

▸ **getInflateProposalByProposer**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:20

___

### getProposalByID

▸ **getProposalByID**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:15

___

### getProposalByProposer

▸ **getProposalByProposer**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:16

___

### getStakeProposal

▸ **getStakeProposal**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:17

___

### getStakeProposalByProposer

▸ **getStakeProposalByProposer**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:18

___

### getTableRows

▸ **getTableRows**(`payload`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`GetTableRowsPayload`](../interfaces/internal_.GetTableRowsPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:10

___

### getVote

▸ **getVote**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotePayload`](../interfaces/internal_.VotePayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:25

___

### getVoteBySHA256

▸ **getVoteBySHA256**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotePayload`](../interfaces/internal_.VotePayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:26

___

### getWhiteListProposal

▸ **getWhiteListProposal**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:23

___

### getWhiteListProposalByProposer

▸ **getWhiteListProposalByProposer**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProposalPayload`](../interfaces/internal_.ProposalPayload.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

newcoin.daos-js/dist/api/chain/index.d.ts:24
