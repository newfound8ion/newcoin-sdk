import { AcceptedTokens } from ".";

export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

export enum AuctionType {
  standard = "standard",
  dutch = "dutch",
}

export enum CreateActionName {
  standard = "createenauct",
  dutch = "createduauct",
}

export interface NCTransferTokenTransactionParams {
  accountName: string;
  requestPermission?: string;
  to: string;
  contract: string;
  amount: number;
  currency: string;
  decimals: number;
  memo?: string;
}

export interface NCCreateAuctionParams {
  /**
   * In standard auctions is the initial price. For dutch auctions,
   * it's the bottom price
   */
  minPrice: number;
  /**
   * optional for standard auctions, required for dutch auctions
   */
  buyNowPrice?: number;
  priceToken: string;
  precision: number;
  startDateMs: number;
  endDateMs: number;
  collection: string;
  assetIds: string[];
  auctionType: AuctionType;
  /**
   * For standard auctions, set this value to 0
   */
  discountRate: number;
  /**
   * For standard auctions, set this value to 0
   */
  discountInterval: number;
  accountName: string;
  requestPermission?: string;
  marketplace?: string;
}

export interface NCPlaceBidParams {
  accountName: string;
  requestPermission?: string;
  auctionId: string;
  amount: number;
  symbol: AcceptedTokens;
  decimals: number;
  marketplace?: string;
}

export interface NCClaimNftsParams {
  accountName: string;
  requestPermission?: string;
  auctionId: string;
}

export type NCClaimWinBidParams = NCClaimNftsParams;
export type NCEraseAuctionParams = NCClaimNftsParams;

export interface NCEditAuctionParams extends NCCreateAuctionParams {
  auctionId: string;
}

// Types for get auctions actions functions

export interface NeftyMarketParamsBase {
  neftymarketContract: string;
  atomicassetsContract: string;
}

export type NCTransferTokenTransactionActionsParams = NCTransferTokenTransactionParams & NeftyMarketParamsBase;
export type NCCreateAuctionActionsParams = NCCreateAuctionParams & NeftyMarketParamsBase;
export type NCPlaceBidActionsParams = NCPlaceBidParams & NeftyMarketParamsBase;
export type NCClaimNftsActionsParams = NCClaimNftsParams & NeftyMarketParamsBase;
export type NCClaimWinBidActionsParams = NCClaimWinBidParams & NeftyMarketParamsBase;
export type NCEraseAuctionActionsParams = NCEraseAuctionParams & NeftyMarketParamsBase;
export type NCEditAuctionActionsParams = NCEditAuctionParams & NeftyMarketParamsBase;

// create auction data
export interface CreateAuctionData {
  seller: string;
  collection_name: string;
  asset_ids: string[];
  min_price: string;
  start_time: number;
  end_time: number;
  buy_now_price: string;
  security_id: number;
  marketplace: string;
  discount_rate?: number;
  discount_interval?: number;
}
