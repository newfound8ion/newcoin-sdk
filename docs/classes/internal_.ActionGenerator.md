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

- [\_pack](internal_.ActionGenerator.md#_pack)
- [buyrambytes](internal_.ActionGenerator.md#buyrambytes)
- [createCollection](internal_.ActionGenerator.md#createcollection)
- [createPermission](internal_.ActionGenerator.md#createpermission)
- [createPool](internal_.ActionGenerator.md#createpool)
- [createSchema](internal_.ActionGenerator.md#createschema)
- [createTemplate](internal_.ActionGenerator.md#createtemplate)
- [delegateBw](internal_.ActionGenerator.md#delegatebw)
- [mintAsset](internal_.ActionGenerator.md#mintasset)
- [newaccount](internal_.ActionGenerator.md#newaccount)
- [txBalance](internal_.ActionGenerator.md#txbalance)
- [txNcoBalance](internal_.ActionGenerator.md#txncobalance)

## Constructors

### constructor

• **new ActionGenerator**(`contract`, `token_contract`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `token_contract` | `string` |

#### Defined in

[actions.ts:12](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L12)

## Properties

### contract

• `Readonly` **contract**: `string`

___

### token\_contract

• `Readonly` **token\_contract**: `string`

## Methods

### \_pack

▸ `Protected` **_pack**(`account`, `authorization`, `name`, `data`): [`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | [`EosioAuthorizationObject`](../modules/internal_.md#eosioauthorizationobject)[] |
| `name` | `string` |
| `data` | `any` |

#### Returns

[`EosioActionObject`](../modules/internal_.md#eosioactionobject)[]

#### Defined in

[actions.ts:328](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L328)

___

### buyrambytes

▸ **buyrambytes**(`receiver`, `payer?`, `amt?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `receiver` | `string` | `undefined` |
| `payer` | `string` | `'io'` |
| `amt` | `number` | `8192` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = payer; `permission`: `string` = 'active' }[] |
| `data` | `Object` |
| `data.bytes` | `number` |
| `data.payer` | `string` |
| `data.receiver` | `string` |
| `name` | `string` |

#### Defined in

[actions.ts:51](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L51)

___

### createCollection

▸ **createCollection**(`author`, `collection_name`, `authorized_accounts`, `notify_accounts?`, `market_fee`, `allow_notify`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `author` | `string` | `undefined` |
| `collection_name` | `string` | `undefined` |
| `authorized_accounts` | `string`[] | `undefined` |
| `notify_accounts` | `string`[] | `[]` |
| `market_fee` | `number` | `undefined` |
| `allow_notify` | `boolean` | `undefined` |

#### Returns

`any`

#### Defined in

[actions.ts:116](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L116)

___

### createPermission

▸ **createPermission**(`author`, `perm_name`, `perm_key`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `perm_name` | `string` |
| `perm_key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = author; `permission`: `string` = 'active' }[] |
| `data` | `Object` |
| `data.account` | `string` |
| `data.auth` | `Object` |
| `data.auth.accounts` | { `permission`: { `actor`: `string` = author; `permission`: `string` = 'active' } ; `weight`: `number` = 1 }[] |
| `data.auth.keys` | { `key`: `string` = perm\_key; `weight`: `number` = 1 }[] |
| `data.auth.threshold` | `number` |
| `data.auth.waits` | `never`[] |
| `data.parent` | `string` |
| `data.permission` | `string` |
| `name` | `string` |

#### Defined in

[actions.ts:194](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L194)

___

### createPool

▸ **createPool**(`creator`, `ticker`, `is_inflatable`, `is_deflatable`, `is_treasury`, `descr`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `ticker` | `string` |
| `is_inflatable` | `boolean` |
| `is_deflatable` | `boolean` |
| `is_treasury` | `boolean` |
| `descr` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = creator; `permission`: `string` = 'active' }[] |
| `data` | `Object` |
| `data.description` | `string` |
| `data.is_deflatable` | `boolean` |
| `data.is_inflatable` | `boolean` |
| `data.is_treasury` | `boolean` |
| `data.owner` | `string` |
| `data.ticker` | `string` |
| `name` | `string` |

#### Defined in

[actions.ts:256](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L256)

___

### createSchema

▸ **createSchema**(`author`, `payer`, `collection_name`, `schema_name`, `sch`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `payer` | `string` |
| `collection_name` | `string` |
| `schema_name` | `string` |
| `sch` | [`NCNameType`](../modules/internal_.md#ncnametype)[] |

#### Returns

`any`

#### Defined in

[actions.ts:143](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L143)

___

### createTemplate

▸ **createTemplate**(`author`, `collection_name`, `schema_name`, `xferable`, `burnable`, `max_supply`, `template_fields`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `collection_name` | `string` |
| `schema_name` | `string` |
| `xferable` | `boolean` |
| `burnable` | `boolean` |
| `max_supply` | `number` |
| `template_fields` | `any`[] |

#### Returns

`any`

#### Defined in

[actions.ts:166](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L166)

___

### delegateBw

▸ **delegateBw**(`receiver`, `payer?`, `net_amount?`, `cpu_amount?`, `trfer?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `receiver` | `string` | `undefined` |
| `payer` | `string` | `'io'` |
| `net_amount` | `string` | `'100.0000 NCO'` |
| `cpu_amount` | `string` | `'100.0000 NCO'` |
| `trfer` | `boolean` | `true` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = payer; `permission`: `string` = 'active' }[] |
| `data` | `Object` |
| `data.from` | `string` |
| `data.receiver` | `string` |
| `data.stake_cpu_quantity` | `string` |
| `data.stake_net_quantity` | `string` |
| `data.transfer` | `boolean` |
| `name` | `string` |

#### Defined in

[actions.ts:66](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L66)

___

### mintAsset

▸ **mintAsset**(`author`, `payer`, `col_name`, `sch_name`, `tmpl_id`, `immutable_data`, `mutable_data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `payer` | `string` |
| `col_name` | `string` |
| `sch_name` | `string` |
| `tmpl_id` | `number` |
| `immutable_data` | `any`[] |
| `mutable_data` | `any`[] |

#### Returns

`any`

#### Defined in

[actions.ts:227](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L227)

___

### newaccount

▸ **newaccount**(`new_name`, `payer`, `newacc_public_active_key`, `newacc_public_owner_key`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `new_name` | `string` |
| `payer` | `string` |
| `newacc_public_active_key` | `string` |
| `newacc_public_owner_key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = payer; `permission`: `string` = 'active' }[] |
| `data` | `Object` |
| `data.active` | `Object` |
| `data.active.accounts` | `never`[] |
| `data.active.keys` | { `key`: `string` = newacc\_public\_active\_key; `weight`: `number` = 1 }[] |
| `data.active.threshold` | `number` |
| `data.active.waits` | `never`[] |
| `data.creator` | `string` |
| `data.name` | `string` |
| `data.owner` | `Object` |
| `data.owner.accounts` | `never`[] |
| `data.owner.keys` | { `key`: `string` = newacc\_public\_owner\_key; `weight`: `number` = 1 }[] |
| `data.owner.threshold` | `number` |
| `data.owner.waits` | `never`[] |
| `name` | `string` |

#### Defined in

[actions.ts:14](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L14)

___

### txBalance

▸ **txBalance**(`contract`, `from`, `to`, `amt`, `memo`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amt` | `string` |
| `memo` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = from; `permission`: `string` = 'active' }[] |
| `data` | `Object` |
| `data.from` | `string` |
| `data.memo` | `string` |
| `data.quantity` | `string` |
| `data.to` | `string` |
| `name` | `string` |

#### Defined in

[actions.ts:305](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L305)

___

### txNcoBalance

▸ **txNcoBalance**(`from`, `to`, `amt`, `memo`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `amt` | `string` |
| `memo` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = from; `permission`: `string` = 'active' }[] |
| `data` | `Object` |
| `data.from` | `string` |
| `data.memo` | `string` |
| `data.quantity` | `string` |
| `data.to` | `string` |
| `name` | `string` |

#### Defined in

[actions.ts:284](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/3beb5f1/src/actions.ts#L284)
