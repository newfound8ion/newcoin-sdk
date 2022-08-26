[@newcoin-foundation/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCEditAuctionParams

# Interface: NCEditAuctionParams

[<internal>](../modules/internal_.md).NCEditAuctionParams

## Hierarchy

- [`NCCreateAuctionParams`](internal_.NCCreateAuctionParams.md)

  ↳ **`NCEditAuctionParams`**

## Table of contents

### Properties

- [accountName](internal_.NCEditAuctionParams.md#accountname)
- [assetIds](internal_.NCEditAuctionParams.md#assetids)
- [auctionId](internal_.NCEditAuctionParams.md#auctionid)
- [auctionType](internal_.NCEditAuctionParams.md#auctiontype)
- [buyNowPrice](internal_.NCEditAuctionParams.md#buynowprice)
- [collection](internal_.NCEditAuctionParams.md#collection)
- [discountInterval](internal_.NCEditAuctionParams.md#discountinterval)
- [discountRate](internal_.NCEditAuctionParams.md#discountrate)
- [endDateMs](internal_.NCEditAuctionParams.md#enddatems)
- [marketplace](internal_.NCEditAuctionParams.md#marketplace)
- [minPrice](internal_.NCEditAuctionParams.md#minprice)
- [precision](internal_.NCEditAuctionParams.md#precision)
- [priceToken](internal_.NCEditAuctionParams.md#pricetoken)
- [requestPermission](internal_.NCEditAuctionParams.md#requestpermission)
- [startDateMs](internal_.NCEditAuctionParams.md#startdatems)

## Properties

### accountName

• **accountName**: `string`

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[accountName](internal_.NCCreateAuctionParams.md#accountname)

#### Defined in

[neftymarket/types/actions.ts:58](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L58)

___

### assetIds

• **assetIds**: `string`[]

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[assetIds](internal_.NCCreateAuctionParams.md#assetids)

#### Defined in

[neftymarket/types/actions.ts:48](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L48)

___

### auctionId

• **auctionId**: `string`

#### Defined in

[neftymarket/types/actions.ts:83](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L83)

___

### auctionType

• **auctionType**: [`AuctionType`](../enums/internal_.AuctionType.md)

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[auctionType](internal_.NCCreateAuctionParams.md#auctiontype)

#### Defined in

[neftymarket/types/actions.ts:49](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L49)

___

### buyNowPrice

• `Optional` **buyNowPrice**: `number`

optional for standard auctions, required for dutch auctions

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[buyNowPrice](internal_.NCCreateAuctionParams.md#buynowprice)

#### Defined in

[neftymarket/types/actions.ts:42](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L42)

___

### collection

• **collection**: `string`

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[collection](internal_.NCCreateAuctionParams.md#collection)

#### Defined in

[neftymarket/types/actions.ts:47](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L47)

___

### discountInterval

• **discountInterval**: `number`

For standard auctions, set this value to 0

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[discountInterval](internal_.NCCreateAuctionParams.md#discountinterval)

#### Defined in

[neftymarket/types/actions.ts:57](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L57)

___

### discountRate

• **discountRate**: `number`

For standard auctions, set this value to 0

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[discountRate](internal_.NCCreateAuctionParams.md#discountrate)

#### Defined in

[neftymarket/types/actions.ts:53](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L53)

___

### endDateMs

• **endDateMs**: `number`

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[endDateMs](internal_.NCCreateAuctionParams.md#enddatems)

#### Defined in

[neftymarket/types/actions.ts:46](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L46)

___

### marketplace

• `Optional` **marketplace**: `string`

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[marketplace](internal_.NCCreateAuctionParams.md#marketplace)

#### Defined in

[neftymarket/types/actions.ts:60](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L60)

___

### minPrice

• **minPrice**: `number`

In standard auctions is the initial price. For dutch auctions,
it's the bottom price

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[minPrice](internal_.NCCreateAuctionParams.md#minprice)

#### Defined in

[neftymarket/types/actions.ts:38](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L38)

___

### precision

• **precision**: `number`

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[precision](internal_.NCCreateAuctionParams.md#precision)

#### Defined in

[neftymarket/types/actions.ts:44](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L44)

___

### priceToken

• **priceToken**: `string`

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[priceToken](internal_.NCCreateAuctionParams.md#pricetoken)

#### Defined in

[neftymarket/types/actions.ts:43](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L43)

___

### requestPermission

• `Optional` **requestPermission**: `string`

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[requestPermission](internal_.NCCreateAuctionParams.md#requestpermission)

#### Defined in

[neftymarket/types/actions.ts:59](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L59)

___

### startDateMs

• **startDateMs**: `number`

#### Inherited from

[NCCreateAuctionParams](internal_.NCCreateAuctionParams.md).[startDateMs](internal_.NCCreateAuctionParams.md#startdatems)

#### Defined in

[neftymarket/types/actions.ts:45](https://github.com/Newcoin-Foundation/newcoin-sdk/blob/88af4a9/src/neftymarket/types/actions.ts#L45)
