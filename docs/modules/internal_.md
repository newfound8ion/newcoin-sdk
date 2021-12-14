[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Interfaces

- [AccountRAMDelta](../interfaces/internal_.AccountRAMDelta.md)
- [Act](../interfaces/internal_.Act.md)
- [Action](../interfaces/internal_.Action.md)
- [Authorization](../interfaces/internal_.Authorization.md)
- [Date](../interfaces/internal_.Date.md)
- [DateConstructor](../interfaces/internal_.DateConstructor.md)
- [DateTimeFormatOptions](../interfaces/internal_.DateTimeFormatOptions.md)
- [GetTransaction](../interfaces/internal_.GetTransaction.md)
- [Iterable](../interfaces/internal_.Iterable.md)
- [Iterator](../interfaces/internal_.Iterator.md)
- [IteratorReturnResult](../interfaces/internal_.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/internal_.IteratorYieldResult.md)
- [Promise](../interfaces/internal_.Promise.md)
- [PromiseConstructor](../interfaces/internal_.PromiseConstructor.md)
- [PromiseFulfilledResult](../interfaces/internal_.PromiseFulfilledResult.md)
- [PromiseLike](../interfaces/internal_.PromiseLike.md)
- [PromiseRejectedResult](../interfaces/internal_.PromiseRejectedResult.md)

### Type aliases

- [IteratorResult](internal_.md#iteratorresult)
- [PromiseSettledResult](internal_.md#promisesettledresult)

### Variables

- [Date](internal_.md#date)
- [Promise](internal_.md#promise)

## Type aliases

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/internal_.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/internal_.IteratorReturnResult.md)<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:41

___

### PromiseSettledResult

Ƭ **PromiseSettledResult**<`T`\>: [`PromiseFulfilledResult`](../interfaces/internal_.PromiseFulfilledResult.md)<`T`\> \| [`PromiseRejectedResult`](../interfaces/internal_.PromiseRejectedResult.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/typescript/lib/lib.es2020.promise.d.ts:31

## Variables

### Date

• **Date**: [`DateConstructor`](../interfaces/internal_.DateConstructor.md)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:907

___

### Promise

• **Promise**: [`PromiseConstructor`](../interfaces/internal_.PromiseConstructor.md)

#### Defined in

node_modules/typescript/lib/lib.es2015.promise.d.ts:150
