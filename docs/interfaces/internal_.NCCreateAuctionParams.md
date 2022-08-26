[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCCreateAuctionParams

# Interface: NCCreateAuctionParams

[<internal>](../modules/internal_.md).NCCreateAuctionParams

## Hierarchy

- **`NCCreateAuctionParams`**

  ↳ [`NCEditAuctionParams`](internal_.NCEditAuctionParams.md)

## Table of contents

### Properties

- [accountName](internal_.NCCreateAuctionParams.md#accountname)
- [assetIds](internal_.NCCreateAuctionParams.md#assetids)
- [auctionType](internal_.NCCreateAuctionParams.md#auctiontype)
- [buyNowPrice](internal_.NCCreateAuctionParams.md#buynowprice)
- [collection](internal_.NCCreateAuctionParams.md#collection)
- [discountInterval](internal_.NCCreateAuctionParams.md#discountinterval)
- [discountRate](internal_.NCCreateAuctionParams.md#discountrate)
- [endDateMs](internal_.NCCreateAuctionParams.md#enddatems)
- [marketplace](internal_.NCCreateAuctionParams.md#marketplace)
- [minPrice](internal_.NCCreateAuctionParams.md#minprice)
- [precision](internal_.NCCreateAuctionParams.md#precision)
- [priceToken](internal_.NCCreateAuctionParams.md#pricetoken)
- [requestPermission](internal_.NCCreateAuctionParams.md#requestpermission)
- [startDateMs](internal_.NCCreateAuctionParams.md#startdatems)

## Properties

### accountName

• **accountName**: `string`

#### Defined in

[neftymarket/types/actions.ts:58](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L58)

___

### assetIds

• **assetIds**: `string`[]

#### Defined in

[neftymarket/types/actions.ts:48](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L48)

___

### auctionType

• **auctionType**: [`AuctionType`](../enums/internal_.AuctionType.md)

#### Defined in

[neftymarket/types/actions.ts:49](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L49)

___

### buyNowPrice

• `Optional` **buyNowPrice**: `number`

optional for standard auctions, required for dutch auctions

#### Defined in

[neftymarket/types/actions.ts:42](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L42)

___

### collection

• **collection**: `string`

#### Defined in

[neftymarket/types/actions.ts:47](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L47)

___

### discountInterval

• **discountInterval**: `number`

For standard auctions, set this value to 0

#### Defined in

[neftymarket/types/actions.ts:57](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L57)

___

### discountRate

• **discountRate**: `number`

For standard auctions, set this value to 0

#### Defined in

[neftymarket/types/actions.ts:53](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L53)

___

### endDateMs

• **endDateMs**: `number`

#### Defined in

[neftymarket/types/actions.ts:46](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L46)

___

### marketplace

• `Optional` **marketplace**: `string`

#### Defined in

[neftymarket/types/actions.ts:60](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L60)

___

### minPrice

• **minPrice**: `number`

In standard auctions is the initial price. For dutch auctions,
it's the bottom price

#### Defined in

[neftymarket/types/actions.ts:38](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L38)

___

### precision

• **precision**: `number`

#### Defined in

[neftymarket/types/actions.ts:44](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L44)

___

### priceToken

• **priceToken**: `string`

#### Defined in

[neftymarket/types/actions.ts:43](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L43)

___

### requestPermission

• `Optional` **requestPermission**: `string`

#### Defined in

[neftymarket/types/actions.ts:59](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L59)

___

### startDateMs

• **startDateMs**: `number`

#### Defined in

[neftymarket/types/actions.ts:45](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L45)
