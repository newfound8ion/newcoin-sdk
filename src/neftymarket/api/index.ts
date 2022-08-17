import crossfetch from "cross-fetch";
import {
  NeftyMarketAuctionsRequest,
  PayloadNeftyMarketAuctions,
} from "../types";

export class NeftyMarketApi {
  constructor(readonly baseUrl: string, protected fetch = crossfetch) {}

  async getAuctions(
    params: NeftyMarketAuctionsRequest
  ): Promise<PayloadNeftyMarketAuctions> {
    const response = await this.fetch(
      `${this.baseUrl}/neftymarket/v1/auctions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      }
    );
    return (await response.json()) as PayloadNeftyMarketAuctions;
  }
}
