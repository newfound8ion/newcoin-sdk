[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CreateAuctionParams

# Interface: CreateAuctionParams

[<internal>](../modules/internal_.md).CreateAuctionParams

## Hierarchy

- **`CreateAuctionParams`**

  ↳ [`EditAuctionParams`](internal_.EditAuctionParams.md)

## Table of contents

### Properties

- [accountName](internal_.CreateAuctionParams.md#accountname)
- [assetIds](internal_.CreateAuctionParams.md#assetids)
- [auctionType](internal_.CreateAuctionParams.md#auctiontype)
- [buyNowPrice](internal_.CreateAuctionParams.md#buynowprice)
- [collection](internal_.CreateAuctionParams.md#collection)
- [discountInterval](internal_.CreateAuctionParams.md#discountinterval)
- [discountRate](internal_.CreateAuctionParams.md#discountrate)
- [endDateMs](internal_.CreateAuctionParams.md#enddatems)
- [marketplace](internal_.CreateAuctionParams.md#marketplace)
- [minPrice](internal_.CreateAuctionParams.md#minprice)
- [precision](internal_.CreateAuctionParams.md#precision)
- [priceToken](internal_.CreateAuctionParams.md#pricetoken)
- [requestPermission](internal_.CreateAuctionParams.md#requestpermission)
- [startDateMs](internal_.CreateAuctionParams.md#startdatems)

## Properties

### accountName

• **accountName**: `string`

#### Defined in

neftymarket/types/actions.ts:58

___

### assetIds

• **assetIds**: `string`[]

#### Defined in

neftymarket/types/actions.ts:48

___

### auctionType

• **auctionType**: [`AuctionType`](../enums/internal_.AuctionType.md)

#### Defined in

neftymarket/types/actions.ts:49

___

### buyNowPrice

• `Optional` **buyNowPrice**: `number`

optional for standard auctions, required for dutch auctions

#### Defined in

neftymarket/types/actions.ts:42

___

### collection

• **collection**: `string`

#### Defined in

neftymarket/types/actions.ts:47

___

### discountInterval

• **discountInterval**: `number`

Required for dutch auctions

#### Defined in

neftymarket/types/actions.ts:57

___

### discountRate

• **discountRate**: `number`

Required for dutch auctions

#### Defined in

neftymarket/types/actions.ts:53

___

### endDateMs

• **endDateMs**: `number`

#### Defined in

neftymarket/types/actions.ts:46

___

### marketplace

• `Optional` **marketplace**: `string`

#### Defined in

neftymarket/types/actions.ts:60

___

### minPrice

• **minPrice**: `number`

In standard auctions is the initial price. For dutch auctions,
it's the bottom price

#### Defined in

neftymarket/types/actions.ts:38

___

### precision

• **precision**: `number`

#### Defined in

neftymarket/types/actions.ts:44

___

### priceToken

• **priceToken**: `string`

#### Defined in

neftymarket/types/actions.ts:43

___

### requestPermission

• `Optional` **requestPermission**: `string`

#### Defined in

neftymarket/types/actions.ts:59

___

### startDateMs

• **startDateMs**: `number`

#### Defined in

neftymarket/types/actions.ts:45
