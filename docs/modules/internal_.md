[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Enumerations

- [AuctionType](../enums/internal_.AuctionType.md)

### Classes

- [ActionGenerator](../classes/internal_.ActionGenerator.md)

### Interfaces

- [ClaimNftsParams](../interfaces/internal_.ClaimNftsParams.md)
- [CreateAuctionParams](../interfaces/internal_.CreateAuctionParams.md)
- [EditAuctionParams](../interfaces/internal_.EditAuctionParams.md)
- [NeftyMarketParamsBase](../interfaces/internal_.NeftyMarketParamsBase.md)
- [PlaceBidParams](../interfaces/internal_.PlaceBidParams.md)

### Type Aliases

- [EosioActionObject](internal_.md#eosioactionobject)
- [EosioAuthorizationObject](internal_.md#eosioauthorizationobject)
- [NCBuyRam](internal_.md#ncbuyram)
- [NCDaoWithdrawVoteDeposit](internal_.md#ncdaowithdrawvotedeposit)
- [NCKeyValPair](internal_.md#nckeyvalpair)
- [NCPoolInfo](internal_.md#ncpoolinfo)

## Type Aliases

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

[actions.ts:4](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/actions.ts#L4)

___

### EosioAuthorizationObject

Ƭ **EosioAuthorizationObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actor` | `string` |
| `permission` | `string` |

#### Defined in

[actions.ts:2](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/actions.ts#L2)

___

### NCBuyRam

Ƭ **NCBuyRam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `ram_amt` | `number` |
| `user` | `string` |

#### Defined in

[types.ts:12](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/types.ts#L12)

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

[types.ts:208](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/types.ts#L208)

___

### NCKeyValPair

Ƭ **NCKeyValPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string`[] |

#### Defined in

[types.ts:231](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/types.ts#L231)

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
| `total` | { `contract`: `string` ; `quantity`: `string`  } |
| `total.contract` | `string` |
| `total.quantity` | `string` |

#### Defined in

[types.ts:106](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/23235e6/src/types.ts#L106)
