import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { ReadOnlyTransactResult } from "eosjs/dist/eosjs-rpc-interfaces";
import { GetTransaction } from "@eoscafe/hyperion";
import { NCKeyPair, NCCreateUser, NCCreateCollection, NCCreatePool, NCStakePool, NCUnstakePool, NCAddToWhiteList, NCRemoveFromWhiteList, NCStakeMainDao, NCCreateDao, NCCreateDaoProposal, NCApproveDaoProposal, NCExecuteDaoProposal, NCMintAsset, NCTxNcoBal, NCCreatePermission, NCGetAccInfo, NCGetPoolInfo, NCLinkPerm, NCPoolsInfo, NCReturnTxs, NCReturnInfo, NCTxBal, NCGetDaoProposals, NCDaoProposalVote } from "./types";
export * from './types';
/**
 * The primary tool to interact with [https://newcoin.org](newcoin.org).
 *
 * This is an early alpha.
 *
 * See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.
 */
export declare const devnet_urls: NCInitUrls;
export declare const devnet_services: NCInitServices;
export declare type NCInitUrls = {
    nodeos_url: string;
    hyperion_url: string;
    atomicassets_url: string;
};
export declare type NCInitServices = {
    eosio_contract: string;
    token_contract: string;
    maindao_contract: string;
    staking_contract: string;
    daos_contract: string;
};
export declare class NCO_BlockchainAPI {
    private _url;
    private _h_url;
    private _aa_url;
    private aa_api;
    private nodeos_rpc;
    private hrpc;
    private poolsRpcApi;
    private poolRpcApi;
    private cApi;
    private aGen;
    private mGen;
    private pGen;
    private sdkGen;
    private dao_id;
    private pool_id;
    private pool_code;
    private _services;
    /**
     * Init the api
     * @name newcoin-api
     * @param urls
     * @param services
     * @returns a Newcoin API instance
     */
    constructor(urls: NCInitUrls, services: NCInitServices);
    /**
     * Create a key pair assuming a secure environment (not frontend)
     * @returns A key pair
     */
    createKeyPair(): Promise<NCKeyPair>;
    /**
     * Create a user
     * @returns Create User transaction id
     */
    createUser(inpt: NCCreateUser): Promise<NCReturnTxs>;
    /**
     * Create collection
     * @returns Create Collection and template transactions' ids
     */
    createCollection(inpt: NCCreateCollection): Promise<NCReturnTxs>;
    /**
     * Create a new permission subject to Active permission.
     * @returns Create permission transaction id
     */
    createPermission(inpt: NCCreatePermission): Promise<NCReturnTxs>;
    /**
     * Link a permission to a specific action of a specific contract.
     * @returns Link permission transaction id
     */
    linkPermission(inpt: NCLinkPerm): Promise<NCReturnTxs>;
    /**
     * Create a staking pool for an account
     * @returns Create Pool transaction id
     */
    createPool(inpt: NCCreatePool): Promise<NCReturnTxs>;
    /**
     * Stake mainDAO
     * @param inpt
     * @returns
     */
    stakeMainDAO(inpt: NCStakeMainDao): Promise<NCReturnTxs>;
    /**
    * inst UnStake mainDAO
    * @param inpt
    * @returns
    */
    instUnstakeMainDAO(inpt: NCStakeMainDao): Promise<NCReturnTxs>;
    /**
     * delayed UnStake mainDAO
     * @param inpt
     * @returns
     */
    dldUnstakeMainDAO(inpt: NCStakeMainDao): Promise<NCReturnTxs>;
    /**
     * Stake to pool
     * @returns Create Pool transaction id
     */
    stakePool(inpt: NCStakePool): Promise<NCReturnTxs>;
    unstakePool(inpt: NCUnstakePool): Promise<NCReturnTxs>;
    addToWhiteList(inpt: NCAddToWhiteList): Promise<NCReturnTxs>;
    removeFromWhiteList(inpt: NCRemoveFromWhiteList): Promise<NCReturnTxs>;
    createDao(inpt: NCCreateDao): Promise<NCReturnTxs>;
    createDaoProposal(inpt: NCCreateDaoProposal): Promise<NCReturnTxs>;
    approveDaoProposal(inpt: NCApproveDaoProposal): Promise<NCReturnTxs>;
    executeDaoProposal(inpt: NCExecuteDaoProposal): Promise<NCReturnTxs>;
    getDaoProposals(inpt: NCGetDaoProposals): Promise<any>;
    voteOnDaoProposal(inpt: NCDaoProposalVote): Promise<{
        TxID_voteForDaoProposal: string;
    }>;
    /**
     * Mint an asset
     * @returns Create Pool transaction id
     */
    mintAsset(inpt: NCMintAsset): Promise<NCReturnTxs>;
    /**
     * Get trasaction data
     * @returns Tx data
     */
    getTxData(txid: string): Promise<GetTransaction<unknown>>;
    /**
     * Get account balance
     * @returns Tx data
     */
    getAccountBalance(acc: NCGetAccInfo): Promise<NCReturnInfo>;
    /**
     * Transfer NCO between accounts
     * @returns Transfer transaction id
     */
    _txBalance(contract: string, inpt: NCTxBal, memo?: string): Promise<NCReturnTxs>;
    txGNCOBalance(inpt: NCTxBal): Promise<string>;
    txNCOBalance(inpt: NCTxBal): Promise<string>;
    /**
     * Transfer NCO between accounts
     * @returns Transfer transaction id
     */
    txNcoBalance(inpt: NCTxNcoBal): Promise<NCReturnTxs>;
    /**
   * Get pool info
   * @returns Tx data
   */
    getPoolInfo(payload: NCGetPoolInfo): Promise<NCPoolsInfo>;
    SubmitTx(actions: any[], public_keys: string[], // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
    private_keys: string[]): Promise<TransactResult | ReadOnlyTransactResult>;
}
