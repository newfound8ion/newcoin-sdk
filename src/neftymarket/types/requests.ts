export interface NeftyMarketAuctionsRequest extends Record<string, unknown> {
  page: number;
  limit: number;
  order: string;
  sort: string;
  state: string;
}
