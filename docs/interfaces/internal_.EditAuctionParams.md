[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EditAuctionParams

# Interface: EditAuctionParams

[<internal>](../modules/internal_.md).EditAuctionParams

## Hierarchy

- [`CreateAuctionParams`](internal_.CreateAuctionParams.md)

  ↳ **`EditAuctionParams`**

## Table of contents

### Properties

- [accountName](internal_.EditAuctionParams.md#accountname)
- [assetIds](internal_.EditAuctionParams.md#assetids)
- [auctionId](internal_.EditAuctionParams.md#auctionid)
- [auctionType](internal_.EditAuctionParams.md#auctiontype)
- [buyNowPrice](internal_.EditAuctionParams.md#buynowprice)
- [collection](internal_.EditAuctionParams.md#collection)
- [discountInterval](internal_.EditAuctionParams.md#discountinterval)
- [discountRate](internal_.EditAuctionParams.md#discountrate)
- [endDateMs](internal_.EditAuctionParams.md#enddatems)
- [marketplace](internal_.EditAuctionParams.md#marketplace)
- [minPrice](internal_.EditAuctionParams.md#minprice)
- [precision](internal_.EditAuctionParams.md#precision)
- [priceToken](internal_.EditAuctionParams.md#pricetoken)
- [requestPermission](internal_.EditAuctionParams.md#requestpermission)
- [startDateMs](internal_.EditAuctionParams.md#startdatems)

## Properties

### accountName

• **accountName**: `string`

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[accountName](internal_.CreateAuctionParams.md#accountname)

#### Defined in

[neftymarket/types/actions.ts:58](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L58)

___

### assetIds

• **assetIds**: `string`[]

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[assetIds](internal_.CreateAuctionParams.md#assetids)

#### Defined in

[neftymarket/types/actions.ts:48](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L48)

___

### auctionId

• **auctionId**: `string`

#### Defined in

[neftymarket/types/actions.ts:83](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L83)

___

### auctionType

• **auctionType**: [`AuctionType`](../enums/internal_.AuctionType.md)

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[auctionType](internal_.CreateAuctionParams.md#auctiontype)

#### Defined in

[neftymarket/types/actions.ts:49](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L49)

___

### buyNowPrice

• `Optional` **buyNowPrice**: `number`

optional for standard auctions, required for dutch auctions

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[buyNowPrice](internal_.CreateAuctionParams.md#buynowprice)

#### Defined in

[neftymarket/types/actions.ts:42](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L42)

___

### collection

• **collection**: `string`

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[collection](internal_.CreateAuctionParams.md#collection)

#### Defined in

[neftymarket/types/actions.ts:47](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L47)

___

### discountInterval

• **discountInterval**: `number`

For standard auctions, set this value to 0

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[discountInterval](internal_.CreateAuctionParams.md#discountinterval)

#### Defined in

[neftymarket/types/actions.ts:57](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L57)

___

### discountRate

• **discountRate**: `number`

For standard auctions, set this value to 0

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[discountRate](internal_.CreateAuctionParams.md#discountrate)

#### Defined in

[neftymarket/types/actions.ts:53](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L53)

___

### endDateMs

• **endDateMs**: `number`

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[endDateMs](internal_.CreateAuctionParams.md#enddatems)

#### Defined in

[neftymarket/types/actions.ts:46](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L46)

___

### marketplace

• `Optional` **marketplace**: `string`

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[marketplace](internal_.CreateAuctionParams.md#marketplace)

#### Defined in

[neftymarket/types/actions.ts:60](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L60)

___

### minPrice

• **minPrice**: `number`

In standard auctions is the initial price. For dutch auctions,
it's the bottom price

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[minPrice](internal_.CreateAuctionParams.md#minprice)

#### Defined in

[neftymarket/types/actions.ts:38](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L38)

___

### precision

• **precision**: `number`

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[precision](internal_.CreateAuctionParams.md#precision)

#### Defined in

[neftymarket/types/actions.ts:44](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L44)

___

### priceToken

• **priceToken**: `string`

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[priceToken](internal_.CreateAuctionParams.md#pricetoken)

#### Defined in

[neftymarket/types/actions.ts:43](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L43)

___

### requestPermission

• `Optional` **requestPermission**: `string`

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[requestPermission](internal_.CreateAuctionParams.md#requestpermission)

#### Defined in

[neftymarket/types/actions.ts:59](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L59)

___

### startDateMs

• **startDateMs**: `number`

#### Inherited from

[CreateAuctionParams](internal_.CreateAuctionParams.md).[startDateMs](internal_.CreateAuctionParams.md#startdatems)

#### Defined in

[neftymarket/types/actions.ts:45](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/acb802e/src/neftymarket/types/actions.ts#L45)
