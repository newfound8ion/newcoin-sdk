[@newcoin-foundation/newcoin-sdk](README.md) / Exports

# @newcoin-foundation/newcoin-sdk

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)

### Classes

- [NCO\_BlockchainAPI](classes/NCO_BlockchainAPI.md)

### Type aliases

- [NCInitServices](modules.md#ncinitservices)
- [NCInitUrls](modules.md#nciniturls)

### Variables

- [default\_schema](modules.md#default_schema)
- [devnet\_services](modules.md#devnet_services)
- [devnet\_urls](modules.md#devnet_urls)

## Type aliases

### NCInitServices

Ƭ **NCInitServices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `daos_contract` | `string` |
| `eosio_contract` | `string` |
| `maindao_contract` | `string` |
| `staking_contract` | `string` |
| `token_contract` | `string` |

#### Defined in

[index.ts:81](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/index.ts#L81)

___

### NCInitUrls

Ƭ **NCInitUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `atomicassets_url` | `string` |
| `hyperion_url` | `string` |
| `nodeos_url` | `string` |

#### Defined in

[index.ts:75](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/index.ts#L75)

## Variables

### default\_schema

• **default\_schema**: { `name`: `string` = 'name'; `type`: `string` = "string" }[]

#### Defined in

[types.ts:272](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/types.ts#L272)

___

### devnet\_services

• **devnet\_services**: [`NCInitServices`](modules.md#ncinitservices)

#### Defined in

[index.ts:66](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/index.ts#L66)

___

### devnet\_urls

• **devnet\_urls**: [`NCInitUrls`](modules.md#nciniturls)

The primary tool to interact with [https://newcoin.org](newcoin.org).

This is an early alpha.

See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.

#### Defined in

[index.ts:59](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/b39ffc2/src/index.ts#L59)
