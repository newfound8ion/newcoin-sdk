import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { ReadOnlyTransactResult } from "eosjs/dist/eosjs-rpc-interfaces";
import { GetTransaction } from "@eoscafe/hyperion";
import * as NCO from "./types";
import { NCCreateCollection, NCCreatePool, NCStakePool, NCUnstakePool, NCAddToWhiteList, NCRemoveFromWhiteList, NCStakeMainDao, NCCreateDao, NCCreateDaoProposal, NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes, NCMintAsset, NCCreatePermission, NCGetAccInfo, NCGetPoolInfo, NCLinkPerm, NCReturnTxs, NCTxBal, NCGetDaoProposals, NCDaoProposalVote } from "./types";
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
    private urls;
    private services;
    private nodeos_rpc;
    private hrpc;
    private poolsRpcApi;
    private poolRpcApi;
    private cApi;
    private aGen;
    private mGen;
    private pGen;
    private sdkGen;
    static defaults: {
        devnet_services: NCInitServices;
        devnet_urls: NCInitUrls;
    };
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
    createKeyPair(): Promise<NCO.NCKeyPair>;
    /**
     * Create a user
     * @returns Create User transaction id
     */
    createUser(inpt: NCO.NCCreateUser): Promise<NCO.NCReturnTxs>;
    /**
     * Create collection
     * @returns Create Collection and template transactions' ids
     */
    createCollection(inpt: NCCreateCollection): Promise<NCO.NCReturnTxs>;
    /**
     * Create a new permission subject to Active permission.
     * @returns Create permission transaction id
     */
    createPermission(inpt: NCCreatePermission): Promise<NCO.NCReturnTxs>;
    /**
     * Link a permission to a specific action of a specific contract.
     * @returns Link permission transaction id
     */
    linkPermission(inpt: NCLinkPerm): Promise<NCO.NCReturnTxs>;
    /**
     * Create a staking pool for an account
     * @returns Create Pool transaction id
     */
    createPool(inpt: NCCreatePool): Promise<NCO.NCReturnTxs>;
    /**
     * Stake mainDAO
     * @param inpt
     * @returns
     */
    stakeMainDAO(inpt: NCStakeMainDao): Promise<NCO.NCReturnTxs>;
    /**
    * inst UnStake mainDAO
    * @param inpt
    * @returns
    */
    instUnstakeMainDAO(inpt: NCStakeMainDao): Promise<NCO.NCReturnTxs>;
    /**
     * delayed UnStake mainDAO
     * @param inpt
     * @returns
     */
    dldUnstakeMainDAO(inpt: NCStakeMainDao): Promise<NCO.NCReturnTxs>;
    /**
     * Stake to pool
     * @returns Create Pool transaction id
     */
    stakePool(inpt: NCStakePool): Promise<NCO.NCReturnTxs>;
    unstakePool(inpt: NCUnstakePool): Promise<NCO.NCReturnTxs>;
    addToWhiteList(inpt: NCAddToWhiteList): Promise<NCO.NCReturnTxs>;
    removeFromWhiteList(inpt: NCRemoveFromWhiteList): Promise<NCO.NCReturnTxs>;
    createDao(inpt: NCCreateDao): Promise<NCO.NCReturnTxs>;
    _getDAOidByOwner(owner: string): Promise<number>;
    _getProposalsIds(dao_id: number, proposer: string): Promise<number[]>;
    createDaoProposal(inpt: NCCreateDaoProposal): Promise<NCO.NCReturnTxs>;
    approveDaoProposal(inpt: NCApproveDaoProposal): Promise<NCO.NCReturnTxs>;
    executeDaoProposal(inpt: NCExecuteDaoProposal): Promise<NCO.NCReturnTxs>;
    getDaoProposals(inpt: NCGetDaoProposals): Promise<any>;
    voteOnDaoProposal(inpt: NCDaoProposalVote): Promise<NCO.NCReturnTxs>;
    getProposalVotes(inpt: NCGetVotes): Promise<any>;
    /**
     * Mint an asset
     * @returns Create Pool transaction id
     */
    mintAsset(inpt: NCMintAsset): Promise<NCO.NCReturnTxs>;
    /**
     * Get trasaction data
     * @returns Tx data
     */
    getTxData(txid: string): Promise<GetTransaction<unknown>>;
    /**
     * Get account balance
     * @returns Tx data
     */
    getAccountBalance(acc: NCGetAccInfo): Promise<NCO.NCReturnInfo>;
    /**
     * Transfer NCO between accounts
     * @returns Transfer transaction id
     */
    _txBalance(contract: string, inpt: NCTxBal): Promise<NCReturnTxs>;
    /**
     * Transfer GNCO between accounts
     * @returns Transfer transaction id
     */
    txGNCOBalance(inpt: NCTxBal): Promise<string>;
    /**
     * Transfer NCO between accounts
     * @returns Transfer transaction id
     */
    txNCOBalance(inpt: NCTxBal): Promise<string>;
    /**
     * Transfer pool staking tokens  between accounts
     * @returns Transfer transaction id
     */
    txDAOTokenBalance(inpt: NCTxBal): Promise<string>;
    /**
   * Get pool info
   * @returns Tx data
   */
    getPoolInfo(payload: NCGetPoolInfo): Promise<NCO.NCPoolsInfo>;
    SubmitTx(actions: any[], public_keys: string[], // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
    private_keys: string[]): Promise<TransactResult | ReadOnlyTransactResult>;
}
