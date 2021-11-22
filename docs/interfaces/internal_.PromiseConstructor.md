[newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / PromiseConstructor

# Interface: PromiseConstructor

[<internal>](../modules/internal_.md).PromiseConstructor

## Table of contents

### Constructors

- [constructor](internal_.PromiseConstructor.md#constructor)

### Properties

- [[species]](internal_.PromiseConstructor.md#[species])
- [prototype](internal_.PromiseConstructor.md#prototype)

### Methods

- [all](internal_.PromiseConstructor.md#all)
- [allSettled](internal_.PromiseConstructor.md#allsettled)
- [race](internal_.PromiseConstructor.md#race)
- [reject](internal_.PromiseConstructor.md#reject)
- [resolve](internal_.PromiseConstructor.md#resolve)

## Constructors

### constructor

• **new PromiseConstructor**<`T`\>(`executor`)

Creates a new Promise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executor` | (`resolve`: (`value`: `T` \| [`PromiseLike`](internal_.PromiseLike.md)<`T`\>) => `void`, `reject`: (`reason?`: `any`) => `void`) => `void` | A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error. |

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:33

## Properties

### [species]

• `Readonly` **[species]**: [`PromiseConstructor`](internal_.PromiseConstructor.md)

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:178

___

### prototype

• `Readonly` **prototype**: [`Promise`](../modules/internal_.md#promise)<`any`\>

A reference to the prototype.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:25

## Methods

### all

▸ **all**<`T`\>(`values`): [`Promise`](../modules/internal_.md#promise)<`T`[]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](internal_.Iterable.md)<`T` \| [`PromiseLike`](internal_.PromiseLike.md)<`T`\>\> | An iterable of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`T`[]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:226

▸ **all**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |
| `T7` |
| `T8` |
| `T9` |
| `T10` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly [`T1` \| [`PromiseLike`](internal_.PromiseLike.md)<`T1`\>, `T2` \| [`PromiseLike`](internal_.PromiseLike.md)<`T2`\>, `T3` \| [`PromiseLike`](internal_.PromiseLike.md)<`T3`\>, `T4` \| [`PromiseLike`](internal_.PromiseLike.md)<`T4`\>, `T5` \| [`PromiseLike`](internal_.PromiseLike.md)<`T5`\>, `T6` \| [`PromiseLike`](internal_.PromiseLike.md)<`T6`\>, `T7` \| [`PromiseLike`](internal_.PromiseLike.md)<`T7`\>, `T8` \| [`PromiseLike`](internal_.PromiseLike.md)<`T8`\>, `T9` \| [`PromiseLike`](internal_.PromiseLike.md)<`T9`\>, `T10` \| [`PromiseLike`](internal_.PromiseLike.md)<`T10`\>] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:41

▸ **all**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |
| `T7` |
| `T8` |
| `T9` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly [`T1` \| [`PromiseLike`](internal_.PromiseLike.md)<`T1`\>, `T2` \| [`PromiseLike`](internal_.PromiseLike.md)<`T2`\>, `T3` \| [`PromiseLike`](internal_.PromiseLike.md)<`T3`\>, `T4` \| [`PromiseLike`](internal_.PromiseLike.md)<`T4`\>, `T5` \| [`PromiseLike`](internal_.PromiseLike.md)<`T5`\>, `T6` \| [`PromiseLike`](internal_.PromiseLike.md)<`T6`\>, `T7` \| [`PromiseLike`](internal_.PromiseLike.md)<`T7`\>, `T8` \| [`PromiseLike`](internal_.PromiseLike.md)<`T8`\>, `T9` \| [`PromiseLike`](internal_.PromiseLike.md)<`T9`\>] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:49

▸ **all**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |
| `T7` |
| `T8` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly [`T1` \| [`PromiseLike`](internal_.PromiseLike.md)<`T1`\>, `T2` \| [`PromiseLike`](internal_.PromiseLike.md)<`T2`\>, `T3` \| [`PromiseLike`](internal_.PromiseLike.md)<`T3`\>, `T4` \| [`PromiseLike`](internal_.PromiseLike.md)<`T4`\>, `T5` \| [`PromiseLike`](internal_.PromiseLike.md)<`T5`\>, `T6` \| [`PromiseLike`](internal_.PromiseLike.md)<`T6`\>, `T7` \| [`PromiseLike`](internal_.PromiseLike.md)<`T7`\>, `T8` \| [`PromiseLike`](internal_.PromiseLike.md)<`T8`\>] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:57

▸ **all**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |
| `T7` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly [`T1` \| [`PromiseLike`](internal_.PromiseLike.md)<`T1`\>, `T2` \| [`PromiseLike`](internal_.PromiseLike.md)<`T2`\>, `T3` \| [`PromiseLike`](internal_.PromiseLike.md)<`T3`\>, `T4` \| [`PromiseLike`](internal_.PromiseLike.md)<`T4`\>, `T5` \| [`PromiseLike`](internal_.PromiseLike.md)<`T5`\>, `T6` \| [`PromiseLike`](internal_.PromiseLike.md)<`T6`\>, `T7` \| [`PromiseLike`](internal_.PromiseLike.md)<`T7`\>] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:65

▸ **all**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly [`T1` \| [`PromiseLike`](internal_.PromiseLike.md)<`T1`\>, `T2` \| [`PromiseLike`](internal_.PromiseLike.md)<`T2`\>, `T3` \| [`PromiseLike`](internal_.PromiseLike.md)<`T3`\>, `T4` \| [`PromiseLike`](internal_.PromiseLike.md)<`T4`\>, `T5` \| [`PromiseLike`](internal_.PromiseLike.md)<`T5`\>, `T6` \| [`PromiseLike`](internal_.PromiseLike.md)<`T6`\>] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:73

▸ **all**<`T1`, `T2`, `T3`, `T4`, `T5`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly [`T1` \| [`PromiseLike`](internal_.PromiseLike.md)<`T1`\>, `T2` \| [`PromiseLike`](internal_.PromiseLike.md)<`T2`\>, `T3` \| [`PromiseLike`](internal_.PromiseLike.md)<`T3`\>, `T4` \| [`PromiseLike`](internal_.PromiseLike.md)<`T4`\>, `T5` \| [`PromiseLike`](internal_.PromiseLike.md)<`T5`\>] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`, `T5`]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:81

▸ **all**<`T1`, `T2`, `T3`, `T4`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly [`T1` \| [`PromiseLike`](internal_.PromiseLike.md)<`T1`\>, `T2` \| [`PromiseLike`](internal_.PromiseLike.md)<`T2`\>, `T3` \| [`PromiseLike`](internal_.PromiseLike.md)<`T3`\>, `T4` \| [`PromiseLike`](internal_.PromiseLike.md)<`T4`\>] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`, `T4`]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:89

▸ **all**<`T1`, `T2`, `T3`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly [`T1` \| [`PromiseLike`](internal_.PromiseLike.md)<`T1`\>, `T2` \| [`PromiseLike`](internal_.PromiseLike.md)<`T2`\>, `T3` \| [`PromiseLike`](internal_.PromiseLike.md)<`T3`\>] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`, `T3`]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:97

▸ **all**<`T1`, `T2`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly [`T1` \| [`PromiseLike`](internal_.PromiseLike.md)<`T1`\>, `T2` \| [`PromiseLike`](internal_.PromiseLike.md)<`T2`\>] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`T1`, `T2`]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:105

▸ **all**<`T`\>(`values`): [`Promise`](../modules/internal_.md#promise)<`T`[]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly (`T` \| [`PromiseLike`](internal_.PromiseLike.md)<`T`\>)[] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`T`[]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:113

___

### allSettled

▸ **allSettled**<`T`\>(`values`): [`Promise`](../modules/internal_.md#promise)<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<T[P] extends PromiseLike<U\> ? U : T[P]\> }\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] \| readonly [`unknown`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<T[P] extends PromiseLike<U\> ? U : T[P]\> }\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2020.promise.d.ts:40

▸ **allSettled**<`T`\>(`values`): [`Promise`](../modules/internal_.md#promise)<[`PromiseSettledResult`](../modules/internal_.md#promisesettledresult)<`T` extends [`PromiseLike`](internal_.PromiseLike.md)<`U`\> ? `U` : `T`\>[]\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](internal_.Iterable.md)<`T`\> | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<[`PromiseSettledResult`](../modules/internal_.md#promisesettledresult)<`T` extends [`PromiseLike`](internal_.PromiseLike.md)<`U`\> ? `U` : `T`\>[]\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2020.promise.d.ts:49

___

### race

▸ **race**<`T`\>(`values`): [`Promise`](../modules/internal_.md#promise)<`T` extends [`PromiseLike`](internal_.PromiseLike.md)<`U`\> ? `U` : `T`\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](internal_.Iterable.md)<`T`\> | An iterable of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`T` extends [`PromiseLike`](internal_.PromiseLike.md)<`U`\> ? `U` : `T`\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:234

▸ **race**<`T`\>(`values`): [`Promise`](../modules/internal_.md#promise)<`T`\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](internal_.Iterable.md)<`T` \| [`PromiseLike`](internal_.PromiseLike.md)<`T`\>\> | An iterable of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`T`\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:242

▸ **race**<`T`\>(`values`): [`Promise`](../modules/internal_.md#promise)<`T` extends [`PromiseLike`](internal_.PromiseLike.md)<`U`\> ? `U` : `T`\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly `T`[] | An array of Promises. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`T` extends [`PromiseLike`](internal_.PromiseLike.md)<`U`\> ? `U` : `T`\>

A new Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:124

___

### reject

▸ **reject**<`T`\>(`reason?`): [`Promise`](../modules/internal_.md#promise)<`T`\>

Creates a new rejected promise for the provided reason.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason?` | `any` | The reason the promise was rejected. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`T`\>

A new rejected Promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:134

___

### resolve

▸ **resolve**(): [`Promise`](../modules/internal_.md#promise)<`void`\>

Creates a new resolved promise.

#### Returns

[`Promise`](../modules/internal_.md#promise)<`void`\>

A resolved promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:140

▸ **resolve**<`T`\>(`value`): [`Promise`](../modules/internal_.md#promise)<`T`\>

Creates a new resolved promise for the provided value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` \| [`PromiseLike`](internal_.PromiseLike.md)<`T`\> | A promise. |

#### Returns

[`Promise`](../modules/internal_.md#promise)<`T`\>

A promise whose internal state matches the provided promise.

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:147
