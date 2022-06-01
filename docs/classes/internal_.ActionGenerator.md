[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ActionGenerator

# Class: ActionGenerator

[<internal>](../modules/internal_.md).ActionGenerator

## Table of contents

### Constructors

- [constructor](internal_.ActionGenerator.md#constructor)

### Properties

- [contract](internal_.ActionGenerator.md#contract)
- [token\_contract](internal_.ActionGenerator.md#token_contract)

### Methods

- [approveDeflateProposal](internal_.ActionGenerator.md#approvedeflateproposal)
- [approveInflateProposal](internal_.ActionGenerator.md#approveinflateproposal)
- [approveProposal](internal_.ActionGenerator.md#approveproposal)
- [approveStakeProposal](internal_.ActionGenerator.md#approvestakeproposal)
- [approveWhiteListProposal](internal_.ActionGenerator.md#approvewhitelistproposal)
- [createDao](internal_.ActionGenerator.md#createdao)
- [createDeflateProposal](internal_.ActionGenerator.md#createdeflateproposal)
- [createInflateProposal](internal_.ActionGenerator.md#createinflateproposal)
- [createProposal](internal_.ActionGenerator.md#createproposal)
- [createStakeProposal](internal_.ActionGenerator.md#createstakeproposal)
- [createWhiteListProposal](internal_.ActionGenerator.md#createwhitelistproposal)
- [executeDeflateProposal](internal_.ActionGenerator.md#executedeflateproposal)
- [executeInflateProposal](internal_.ActionGenerator.md#executeinflateproposal)
- [executeProposal](internal_.ActionGenerator.md#executeproposal)
- [executeStakeProposal](internal_.ActionGenerator.md#executestakeproposal)
- [executeWhiteListProposal](internal_.ActionGenerator.md#executewhitelistproposal)
- [vote](internal_.ActionGenerator.md#vote)
- [withdraw](internal_.ActionGenerator.md#withdraw)

## Constructors

### constructor

• **new ActionGenerator**(`contract`, `token_contract`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `token_contract` | `string` |

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:14

## Properties

### contract

• `Readonly` **contract**: `string`

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:12

___

### token\_contract

• `Readonly` **token\_contract**: `string`

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:13

## Methods

### approveDeflateProposal

▸ **approveDeflateProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:24

___

### approveInflateProposal

▸ **approveInflateProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:23

___

### approveProposal

▸ **approveProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:21

___

### approveStakeProposal

▸ **approveStakeProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:22

___

### approveWhiteListProposal

▸ **approveWhiteListProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:25

___

### createDao

▸ **createDao**(`authorization`, `owner`, `description`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `owner` | `string` |
| `description` | `string` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:15

___

### createDeflateProposal

▸ **createDeflateProposal**(`authorization`, `proposer`, `dao_id`, `from`, `quantity`, `vote_start`, `vote_end`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `proposer` | `string` |
| `dao_id` | `number` |
| `from` | `string` |
| `quantity` | `string` |
| `vote_start` | `string` |
| `vote_end` | `string` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:19

___

### createInflateProposal

▸ **createInflateProposal**(`authorization`, `proposer`, `dao_id`, `to`, `quantity`, `vote_start`, `vote_end`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `proposer` | `string` |
| `dao_id` | `number` |
| `to` | `string` |
| `quantity` | `string` |
| `vote_start` | `string` |
| `vote_end` | `string` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:18

___

### createProposal

▸ **createProposal**(`authorization`, `proposer`, `dao_id`, `title`, `summary`, `url`, `vote_start`, `vote_end`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `proposer` | `string` |
| `dao_id` | `number` |
| `title` | `string` |
| `summary` | `string` |
| `url` | `string` |
| `vote_start` | `string` |
| `vote_end` | `string` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:16

___

### createStakeProposal

▸ **createStakeProposal**(`authorization`, `proposer`, `dao_id`, `to`, `quantity`, `vote_start`, `vote_end`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `proposer` | `string` |
| `dao_id` | `number` |
| `to` | `string` |
| `quantity` | `string` |
| `vote_start` | `string` |
| `vote_end` | `string` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:17

___

### createWhiteListProposal

▸ **createWhiteListProposal**(`authorization`, `proposer`, `dao_id`, `user`, `vote_start`, `vote_end`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `proposer` | `string` |
| `dao_id` | `number` |
| `user` | `string` |
| `vote_start` | `string` |
| `vote_end` | `string` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:20

___

### executeDeflateProposal

▸ **executeDeflateProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:29

___

### executeInflateProposal

▸ **executeInflateProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:28

___

### executeProposal

▸ **executeProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:26

___

### executeStakeProposal

▸ **executeStakeProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:27

___

### executeWhiteListProposal

▸ **executeWhiteListProposal**(`authorization`, `dao_id`, `proposal_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `dao_id` | `number` |
| `proposal_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:30

___

### vote

▸ **vote**(`authorization`, `from`, `quantity`, `proposal_type`, `dao_id`, `proposal_id`, `option`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `from` | `string` |
| `quantity` | `string` |
| `proposal_type` | `string` |
| `dao_id` | `string` |
| `proposal_id` | `string` |
| `option` | `string` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:32

___

### withdraw

▸ **withdraw**(`authorization`, `owner`, `vote_id`): `Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `owner` | `string` |
| `vote_id` | `number` |

#### Returns

`Promise`<[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]\>

#### Defined in

newcoin.daos-js/dist/actions/index.d.ts:31
