[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Classes

- [ActionGenerator](../classes/internal_.ActionGenerator.md)

### Type aliases

- [EosioActionObject](internal_.md#eosioactionobject)
- [EosioAuthorizationObject](internal_.md#eosioauthorizationobject)
- [NCDaoWithdrawVoteDeposit](internal_.md#ncdaowithdrawvotedeposit)
- [NCKeyValPair](internal_.md#nckeyvalpair)
- [NCPoolInfo](internal_.md#ncpoolinfo)

## Type aliases

### EosioActionObject

Ƭ **EosioActionObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | [`EosioAuthorizationObject`](internal_.md#eosioauthorizationobject)[] |
| `data` | `any` |
| `name` | `string` |

#### Defined in

[actions.ts:4](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/actions.ts#L4)

___

### EosioAuthorizationObject

Ƭ **EosioAuthorizationObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actor` | `string` |
| `permission` | `string` |

#### Defined in

[actions.ts:2](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/actions.ts#L2)

___

### NCDaoWithdrawVoteDeposit

Ƭ **NCDaoWithdrawVoteDeposit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `vote_id` | `string` |
| `voter` | `string` |
| `voter_prv_key` | `string` |

#### Defined in

[types.ts:188](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/types.ts#L188)

___

### NCKeyValPair

Ƭ **NCKeyValPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string`[] |

#### Defined in

[types.ts:204](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/types.ts#L204)

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

[types.ts:100](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/d88935f/src/types.ts#L100)
