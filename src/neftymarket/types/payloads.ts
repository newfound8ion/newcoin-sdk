import {
  AcceptedTokens,
  AcceptedTokenContracts,
  Token,
  Price,
  BackendToken,
  AcceptedPrecision,
  ListingPricePayload,
  PriceObject,
} from ".";

export interface Payload {
  success: boolean;
  message?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  query_time: number;
}

// ----------
// ATOMIC
// ----------
export interface PayloadAtomicCollections extends Payload {
  data?: AssetCollection[];
}
export interface PayloadAtomicCollection extends Payload {
  data?: AssetCollection;
}
export interface PayloadAtomicSchemas extends Payload {
  data?: AtomicSchemas;
}
export interface PayloadAtomicAccount extends Payload {
  data?: AtomicAssetsAccount;
}

export interface PayloadAtomicAccountSchemas extends Payload {
  data?: AtomicAssetsAccountSchemas;
}
export interface PayloadAtomicAsset extends Payload {
  data?: AtomicMarketAsset;
}

export interface PayloadAtomicAssets extends Payload {
  data?: AtomicMarketAsset[];
}
export interface PayloadAtomicMarketSales extends Payload {
  data?: AtomicMarketSale[];
}
export interface PayloadAtomicCounter extends Payload {
  data?: number;
}
export interface PayloadAtomicMarketSale extends Payload {
  data?: AtomicMarketSale;
}
export interface PayloadAtomicMarketAssetSales extends Payload {
  data?: AtomicMarketAssetSale[];
}
export interface PayloadAtomicMarketTemplates extends Payload {
  data?: AtomicMarketTemplate[];
}
export interface PayloadAtomicAssetsTemplate extends Payload {
  data?: AtomicAssetsTemplate;
}
export interface PayloadAtomicMarketPrice extends Payload {
  data?: AtomicMarketPrice[];
}
export interface PayloadAtomicMarketTemplatesHistory extends Payload {
  data?: TemplateSaleHistory[];
}

export interface PayloadAtomicMarketTemplateStats extends Payload {
  data?: TemplateStats;
}

export interface PayloadAtomicAccountStats extends Payload {
  data?: {
    templates: AccountTemplateStats[];
  };
}

export interface PayloadNeftyMarketAuctions extends Payload {
  data?: NeftyMarketAuction[];
}

export interface PayloadNeftyMarketAuction extends Payload {
  data?: NeftyMarketAuction;
}

export interface PayloadAtomicMarketCollectionStats extends Payload {
  data?: AtomicMarketCollectionsStats;
}

// ----------
// NEFTY
// ----------

export interface PayloadDrops extends Payload {
  data?: DropPayload[];
}
export interface PayloadDrop extends Payload {
  data?: DropPayload;
}
export interface PayloadNeftyCollections extends Payload {
  data?: NeftyCollection;
}

export interface PayloadWhitelist extends Payload {
  data?: WhitelistPayload[];
}
export interface PayloadNeftyMarketScheme extends Payload {
  data?: NeftyMarketScheme[];
}

export interface PayloadAtomicApiHealth extends Payload {
  data?: AtomicApiHealth;
}

export interface PayloadNeftyQuestLeaderboard extends Payload {
  data?: NeftyQuestAccountStats[];
}

export interface PayloadNeftyQuestLeaderboardCount extends Payload {
  data?: string;
}

export type Assets = AtomicMarketAsset | DropTemplate;

export interface WhitelistPayload {
  collection_name: string;
  contract: "atomhubtools" | "neftyblocksa";
  list: "whitelist" | "nsfw" | "verified" | "blacklist";
}

export interface ListingPriceHelper {
  last: PriceObject | undefined;
  lowest: PriceObject | undefined;
  suggested_median?: PriceObject;
  last_bought: PriceObject | undefined;
}

export interface NeftyCollection {
  symbol: Token;
  results: NeftyCollectionItem[];
}

export interface AtomicAssetsAccount {
  collections: {
    collection: AssetCollection;
    assets: string;
  }[];
  templates: {
    collection_name: string;
    template_id: string;
    assets: string;
  }[];
  assets: string;
}
export interface AtomicAssetsAccountSchemas {
  schemas: {
    schema_name: string;
    assets: string;
  }[];
  templates: {
    template_id: string;
    assets: string;
  }[];
}

export interface NeftyCollectionItem {
  contract: string;
  collection_name: string;
  name: string;
  img: string;
  author: string;
  allow_notify: boolean;
  authorized_accounts: string[];
  notify_accounts: string[];
  market_fee: number;
  data: AssetDataObject;
  created_at_time: string;
  created_at_block: string;
  volume: string;
  sales: string;
}
export interface TemplateSaleHistory {
  sale_id: string;
  auction_id: string | null;
  buyoffer_id: string | null;
  price: string;
  template_mint: number;
  token_symbol: AcceptedTokens;
  token_precision: AcceptedPrecision;
  token_contract: AcceptedTokenContracts;
  block_time: string;
}

export interface TemplateStats {
  burned: string;
}

export interface AtomicMarketAsset {
  contract: string;
  asset_id: string;
  owner: string;
  name: string;
  is_transferable: boolean;
  is_burnable: boolean;
  template_mint: string;
  collection: AssetCollection;
  schema: AssetScheme;
  template: {
    template_id: string;
    max_supply: string;
    issued_supply: string;
    is_transferable: boolean;
    is_burnable: boolean;
    immutable_data: AssetDataObject;
    created_at_time: string;
    created_at_block: string;
  };
  backed_tokens: BackendToken[];
  immutable_data: AssetDataObject;
  mutable_data: AssetDataObject;
  sales?: AtomicMarketAssetSale[];
  auctions?: AtomicMarketAssetAuction[];
  prices?: ListingPricePayload[];
  data: AssetDataObject;
  burned_by_account: string;
  burned_at_block: string;
  burned_at_time: string;
  updated_at_block: string;
  updated_at_time: string;
  transferred_at_block: string;
  transferred_at_time: string;
  minted_at_block: string;
  minted_at_time: string;
}

export interface AtomicMarketAssetAuction {
  market_contract: string;
  auction_id: string;
}

export interface AtomicMarketAssetSale {
  market_contract: string;
  sale_id: string;
}

export interface AtomicMarketSale {
  market_contract: string;
  assets_contract: string;
  sale_id: string;
  seller: string;
  buyer: string;
  offer_id: string;
  price: Price;
  listing_price: string;
  listing_symbol: AcceptedTokens;
  assets: AtomicMarketAsset[];
  maker_marketplace: string;
  taker_marketplace: string;
  collection: AssetCollection;
  state: number;
  updated_at_block: string;
  updated_at_time: string;
  created_at_block: string;
  created_at_time: string;
}

export interface AtomicMarketAssetSale {
  sale_id: string;
  auction_id: string;
  buyoffer_id: string;
  price: string;
  token_symbol: AcceptedTokens;
  token_precision: AcceptedPrecision;
  token_contract: AcceptedTokenContracts;
  seller: string;
  buyer: string;
  block_time: string;
}

export interface AtomicAssetsTemplate {
  contract: string;
  template_id: string;
  is_transferable: boolean;
  is_burnable: boolean;
  max_supply: string;
  issued_supply: string;
  collection: AssetCollection;
  schema: AssetScheme;
  immutable_data: AssetDataObject;
  created_at_time: string;
  created_at_block: string;
  name: string;
}

export type AtomicMarketTemplate = DropTemplate;

export interface AtomicMarketPrice {
  token_symbol: AcceptedTokens;
  token_precision: number;
  token_contract: string;
  median: string;
  average: string;
  min: string;
  max: string;
  suggested_median: string;
  suggested_average: string;
}

export interface AssetDataObject {
  img?: string;
  video?: string;
  name?: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
interface AssetCollection {
  collection_name: string;
  name: string;
  author: string;
  img?: string;
  data?: {
    img?: string;
    url?: string;
    name?: string;
    description?: string;
  };
  allow_notify: true;
  authorized_accounts: string[];
  notify_accounts: string[];
  market_fee: number;
  created_at_block: string;
  created_at_time: string;
}

interface AssetScheme {
  schema_name: string;
  format: Format[];
  created_at_block: string;
  created_at_time: string;
}

export interface AtomicSchemas {
  symbol: Token;
  results: {
    contract: string;
    collection_name: string;
    schema_name: string;
    volume: string;
    sales: string;
    listings: string;
  }[];
}

export interface NeftyMarketScheme {
  key: string;
  value: string;
}

export interface DropPayload {
  name?: string;
  drops_contract: string;
  assets_contract: string;
  drop_id: string;
  price: Price;
  listing_price: string;
  listing_symbol: AcceptedTokens;
  templates: DropTemplate[];
  collection_name: string;
  collection: AssetCollection;
  updated_at_block: string;
  updated_at_time: string;
  created_at_block: string;
  created_at_time: string;
  preminted: boolean;
  start_time: string;
  end_time: string;
  display_data?: {
    name?: string;
    description?: string;
  };
  auth_required: boolean;
  account_limit: string;
  account_limit_cooldown: string;
  max_claimable: string;
  current_claimed: string;
}

export interface DropTemplate {
  contract: string;
  template_id: string;
  is_transferable: boolean;
  is_burnable: boolean;
  issued_supply: string;
  max_supply: string;
  collection: AssetCollection;
  schema: AssetScheme;
  immutable_data: AssetDataObject;
  created_at_time: string;
  created_at_block: string;
  name: string;
  img?: string;
}

export interface Format {
  name: string;
  type: string;
}

interface AtomicApiHealth {
  postgres: {
    readers: {
      block_num: string;
    }[];
  };
}

export interface UserWalletResources {
  delegated_from: {
    net_weight: number;
    cpu_weight: number;
    del_from: string;
  }[];
  delegated_to: unknown[];
  linkauth: unknown[];
  balances: {
    decimals: string;
    amount: string;
    currency: string;
    contract: string;
  }[];
  resources: { cpu_weight: number; net_weight: number; ram_bytes: number };
  account_name: string;
  permissions: [
    { perm: string; auth: Record<string, unknown>; threshold: number },
    { auth: Record<string, unknown>; perm: string; threshold: number }
  ];
  chain: {
    systoken: string;
    block_num: number;
    network: string;
    chainid: string;
    decimals: number;
    block_time: string;
    sync: number;
    rex_enabled: number;
    description: string;
    production: number;
  };
}

export interface AccountTemplateStats {
  collection_name: string;
  template_id: string;
  assets: string;
}

export interface NeftyQuestAccountStats {
  rank: number;
  account: string;
  title?: string;
  total_sold: number;
  total_bought: number;
  total_collected: number;
  symbol: AcceptedTokens;
  symbol_precision: number;
  items_sold: number;
  items_bought: number;
  completion_percentage: number;
  experience: number;
}

export interface NeftyMarketAuction {
  market_contract: string;
  assets_contract: string;
  auction_id: string;
  auction_type: string;
  seller: string;
  buyer: string;
  price: Price;
  buy_now_price: Price;
  original_buy_now_price?: Price;
  min_price: Price;
  assets: AtomicMarketAsset[];
  bids: {
    number: number;
    account: string;
    amount: string;
    created_at_block: string;
    created_at_time: string;
    txid: string;
  }[];
  maker_marketplace: string;
  taker_marketplace: string;
  collection: AssetCollection;
  state: number;
  start_time: string;
  end_time: string;
  discount_rate: number;
  discount_interval: string;
  claimed_by_buyer: boolean;
  claimed_by_seller: boolean;
  updated_at_block: string;
  updated_at_time: string;
  created_at_block: string;
  created_at_time: string;
}

export interface AtomicMarketCollectionsStats {
  symbol: {
    token_symbol: string;
    token_contract: string;
    token_precision: number;
  };
  results: {
    contract: string;
    collection_name: string;
    volume: string;
    sales: string;
    name: string;
    img: string;
    author: string;
    allow_notify: boolean;
    authorized_accounts: string[];
    notify_accounts: string[];
    market_fee: number;
    data: {
      img: string;
      url: string;
      name: string;
      socials: string;
      description: string;
      creator_info: string;
    };
    created_at_time: string;
    created_at_block: string;
  }[];
}
