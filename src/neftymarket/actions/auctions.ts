import {
  ClaimNftsActionsParams,
  ClaimWinBidActionsParams,
  CreateActionName,
  CreateAuctionActionsParams,
  EditAuctionActionsParams,
  EraseAuctionActionsParams,
  PlaceBidActionsParams,
  AuctionType,
  CreateAuctionData,
  EosioActionObject,
} from "../types";
import { getNameForTransaction, priceForCurrency } from "../utils";
import { getTransferTokensActions } from "./atomicassets";

export const getCreateAuctionActions = (
  params: CreateAuctionActionsParams
): EosioActionObject[] => {
  const {
    accountName,
    collection,
    assetIds,
    minPrice,
    priceToken,
    precision,
    startDateMs,
    endDateMs,
    buyNowPrice,
    marketplace,
    discountInterval,
    discountRate,
    neftymarketContract,
    atomicassetsContract,
  } = params;
  const requestPermission = params.requestPermission ?? "active";
  const createAuctionData: CreateAuctionData = {
    seller: getNameForTransaction(accountName),
    collection_name: getNameForTransaction(collection),
    asset_ids: assetIds,
    min_price: priceForCurrency(minPrice, priceToken, precision),
    start_time: Math.floor(startDateMs / 1000),
    end_time: Math.floor(endDateMs / 1000),
    buy_now_price: priceForCurrency(buyNowPrice || 0, priceToken, precision),
    security_id: 0,
    marketplace: marketplace ?? "",
  };
  if (params.auctionType === AuctionType.dutch) {
    createAuctionData["discount_rate"] = (discountRate ?? 0) / 100;
    createAuctionData["discount_interval"] = discountInterval ?? 0;
  }

  return [
    {
      account: neftymarketContract,
      name: "openinv",
      authorization: [
        {
          actor: params.accountName,
          permission: requestPermission,
        },
      ],
      data: {
        owner: params.accountName,
        count: params.assetIds.length,
      },
    },
    {
      account: atomicassetsContract,
      name: "transfer",
      authorization: [
        {
          actor: params.accountName,
          permission: requestPermission,
        },
      ],
      data: {
        from: params.accountName,
        to: neftymarketContract,
        asset_ids: params.assetIds || [],
        memo: "deposit",
      },
    },
    {
      account: neftymarketContract,
      name:
        params.auctionType === AuctionType.dutch
          ? CreateActionName.dutch
          : CreateActionName.standard,
      authorization: [
        {
          actor: params.accountName,
          permission: requestPermission,
        },
      ],
      data: createAuctionData,
    },
  ];
};

export const getPlaceBidActions = (
  params: PlaceBidActionsParams
): EosioActionObject[] => {
  const {
    accountName,
    requestPermission = "active",
    decimals,
    symbol,
    amount,
    auctionId,
    marketplace,
    neftymarketContract,
    atomicassetsContract,
  } = params;
  return [
    {
      account: neftymarketContract,
      name: "openbal",
      authorization: [
        {
          actor: getNameForTransaction(accountName),
          permission: requestPermission,
        },
      ],
      data: {
        owner: getNameForTransaction(accountName),
        token_symbol: `${decimals},${symbol}`,
      },
    },
    ...getTransferTokensActions({
      amount,
      to: neftymarketContract,
      contract: atomicassetsContract,
      currency: symbol,
      decimals,
      accountName,
      requestPermission,
      memo: "deposit",
      atomicassetsContract,
      neftymarketContract,
    }),
    {
      account: neftymarketContract,
      name: "bid",
      authorization: [
        {
          actor: getNameForTransaction(accountName),
          permission: requestPermission,
        },
      ],
      data: {
        bidder: getNameForTransaction(accountName),
        auction_id: auctionId,
        bid_amount: priceForCurrency(amount, symbol, decimals),
        marketplace: marketplace ?? "",
      },
    },
  ];
};

export const getClaimNftsActions = (
  params: ClaimNftsActionsParams
): EosioActionObject[] => {
  const {
    accountName,
    requestPermission = "active",
    auctionId,
    neftymarketContract,
  } = params;

  return [
    {
      account: neftymarketContract,
      name: "claimassets",
      authorization: [
        {
          actor: getNameForTransaction(accountName),
          permission: requestPermission,
        },
      ],
      data: {
        auction_id: getNameForTransaction(auctionId),
      },
    },
  ];
};

export const getClaimWinBidActions = (
  params: ClaimWinBidActionsParams
): EosioActionObject[] => {
  const {
    accountName,
    requestPermission = "active",
    auctionId,
    neftymarketContract,
  } = params;

  return [
    {
      account: neftymarketContract,
      name: "claimwinbid",
      authorization: [
        {
          actor: getNameForTransaction(accountName),
          permission: requestPermission,
        },
      ],
      data: {
        auction_id: getNameForTransaction(auctionId),
      },
    },
  ];
};

export const getEraseAuctionActions = (
  params: EraseAuctionActionsParams
): EosioActionObject[] => {
  const {
    accountName,
    requestPermission = "active",
    auctionId,
    neftymarketContract,
  } = params;
  return [
    {
      account: neftymarketContract,
      name: "eraseauct",
      authorization: [
        {
          actor: getNameForTransaction(accountName),
          permission: requestPermission,
        },
      ],
      data: {
        auction_id: getNameForTransaction(auctionId),
      },
    },
  ];
};

export const getEditAuctionActions = (
  params: EditAuctionActionsParams
): EosioActionObject[] => {
  const {
    accountName,
    requestPermission,
    auctionId,
    neftymarketContract,
    atomicassetsContract,
  } = params;
  if (!auctionId) {
    throw new Error("Missing required params");
  }
  return [
    ...getEraseAuctionActions({
      auctionId,
      accountName,
      requestPermission,
      neftymarketContract,
      atomicassetsContract,
    }),
    ...getCreateAuctionActions(params),
  ];
};
