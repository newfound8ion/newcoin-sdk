[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Action

# Interface: Action<T\>

[<internal>](../modules/internal_.md).Action

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [@timestamp](internal_.Action.md#@timestamp)
- [account\_ram\_deltas](internal_.Action.md#account_ram_deltas)
- [act](internal_.Action.md#act)
- [block\_num](internal_.Action.md#block_num)
- [global\_sequence](internal_.Action.md#global_sequence)
- [notified](internal_.Action.md#notified)
- [parent](internal_.Action.md#parent)
- [producer](internal_.Action.md#producer)
- [trx\_id](internal_.Action.md#trx_id)

## Properties

### @timestamp

• **@timestamp**: [`Date`](../modules/internal_.md#date)

#### Defined in

node_modules/@eoscafe/hyperion/dist/src/types/action_trace.d.ts:4

___

### account\_ram\_deltas

• `Optional` **account\_ram\_deltas**: [`AccountRAMDelta`](internal_.AccountRAMDelta.md)[]

#### Defined in

node_modules/@eoscafe/hyperion/dist/src/types/action_trace.d.ts:3

___

### act

• **act**: [`Act`](internal_.Act.md)<`T`\>

#### Defined in

node_modules/@eoscafe/hyperion/dist/src/types/action_trace.d.ts:2

___

### block\_num

• **block\_num**: `number`

#### Defined in

node_modules/@eoscafe/hyperion/dist/src/types/action_trace.d.ts:5

___

### global\_sequence

• **global\_sequence**: `number`

#### Defined in

node_modules/@eoscafe/hyperion/dist/src/types/action_trace.d.ts:9

___

### notified

• **notified**: `string`[]

#### Defined in

node_modules/@eoscafe/hyperion/dist/src/types/action_trace.d.ts:10

___

### parent

• **parent**: `number`

#### Defined in

node_modules/@eoscafe/hyperion/dist/src/types/action_trace.d.ts:8

___

### producer

• **producer**: `string`

#### Defined in

node_modules/@eoscafe/hyperion/dist/src/types/action_trace.d.ts:6

___

### trx\_id

• **trx\_id**: `string`

#### Defined in

node_modules/@eoscafe/hyperion/dist/src/types/action_trace.d.ts:7
