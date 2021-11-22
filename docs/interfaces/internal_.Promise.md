[newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Promise

# Interface: Promise<T\>

[<internal>](../modules/internal_.md).Promise

Represents the completion of an asynchronous operation

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [[toStringTag]](internal_.Promise.md#[tostringtag])

### Methods

- [catch](internal_.Promise.md#catch)
- [finally](internal_.Promise.md#finally)
- [then](internal_.Promise.md#then)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): [`Promise`](../modules/internal_.md#promise)<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult` \| [`PromiseLike`](internal_.PromiseLike.md)<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1460

___

### finally

▸ **finally**(`onfinally?`): [`Promise`](../modules/internal_.md#promise)<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | ``null`` \| () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`T`\>

A Promise for the completion of the callback.

#### Defined in

node_modules/typescript/lib/lib.es2018.promise.d.ts:31

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): [`Promise`](../modules/internal_.md#promise)<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| [`PromiseLike`](internal_.PromiseLike.md)<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| [`PromiseLike`](internal_.PromiseLike.md)<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1453
