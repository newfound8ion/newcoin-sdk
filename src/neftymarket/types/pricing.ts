export type AcceptedPrecision = number;
export type AcceptedTokens = string;
export type AcceptedTokenContracts = string;
export type AcceptedPrecisionSymbol = string;

export interface Price {
  amount: string;
  median?: string;
  token_precision: AcceptedPrecision;
  token_contract?: AcceptedTokenContracts;
  token_symbol: AcceptedTokens;
}

export interface BackendToken {
  amount: number;
  token_precision: AcceptedPrecision;
  token_contract?: AcceptedTokenContracts;
  token_symbol: AcceptedTokens;
}

// !! preproccessed listingPrice !!
export interface ListingPricePayload {
  market_contract: string;
  token: Token;
  median: string;
  average: string;
  suggested_median: string;
  suggested_average: string;
  min: string;
  max: string;
  sales: string;
}

export interface ListingPrice {
  symbol: AcceptedTokens;
  amount: number;
}

export interface PriceObject {
  amount: number;
  amount_long: string;
  symbol: AcceptedTokens;
  contract: AcceptedTokenContracts;
  precision_symbol: AcceptedPrecisionSymbol;
}

export interface TokenConversion {
  [key: string]: number;
}

export interface Token {
  token_precision: AcceptedPrecision;
  token_contract: AcceptedTokenContracts;
  token_symbol: AcceptedTokens;
}

export type TokensType = {
  [key in AcceptedTokens]: TokenType;
};

export interface TokenType {
  precision_symbol: AcceptedPrecisionSymbol;
  settlement_symbol: string;
  symbol: AcceptedTokens;
  precision: AcceptedPrecision;
  contract: AcceptedTokenContracts;
}

export interface Balance {
  tokens: {
    [key: string]: {
      symbol: AcceptedTokens;
      amount: number;
    };
  };
  games: {
    [key: string]: {
      symbol: AcceptedTokens;
      amount: number;
      icon: string;
    };
  };
  images: Record<AcceptedTokens, string>;
}
