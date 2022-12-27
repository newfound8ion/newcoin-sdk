
export type NCInit = {
    services: NCInitServices,
    urls: NCInitUrls,
    is_proxy: boolean,
    debug: boolean
  };

export type NCInitUrls = {
    nodeos_url: string,
    hyperion_url: string,
    atomicassets_url: string,
    nodeos_proxy_url: string
  };
  
  export type NCInitServices = {
    eosio_contract: string,
    token_contract: string,
    maindao_contract: string,
    staking_contract: string,
    daos_contract: string;
    neftymarket_contract: string;
    atomicassets_contract: string;
  };
  
  export const devnet_urls: NCInitUrls =
  {
    nodeos_url:       "https://nodeos-dev.newcoin.org",
    hyperion_url:     "https://hyperion-dev.newcoin.org",
    atomicassets_url: "https://atomic-nefty-devnet.newcoin.org/",
    nodeos_proxy_url: "https://auth-eu-dev.newsafe.org/v1/tx/newcoin"
  };

    
  export const devnet_urls_prod: NCInitUrls =
  {
    nodeos_url:       "https://nodeos-dev.newcoin.org",
    hyperion_url:     "https://hyperion-dev.newcoin.org",
    atomicassets_url: "https://atomic-nefty-devnet.newcoin.org/",
    nodeos_proxy_url: "https://api.newsafe.org/v1/tx/newcoin"
  };
  
  export const devnet_services: NCInitServices =
  {
    eosio_contract: "eosio",
    token_contract: "eosio.token",
    maindao_contract: "pool.nco",
    staking_contract: "pools2.nco",
    daos_contract: "daos2.nco",
    neftymarket_contract: "market.nefty",
    atomicassets_contract: "atomicassets"
  };
  