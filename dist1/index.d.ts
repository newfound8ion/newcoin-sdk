import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { ReadOnlyTransactResult } from "eosjs/dist/eosjs-rpc-interfaces";
import { GetTransaction } from "@eoscafe/hyperion";
import { NCKeyPair, NCCreateUser, NCCreateCollection, NCCreatePool, NCStakePool, NCUnstakePool, NCStakeMainDao, NCCreateDao, NCGetDaoWhiteList, NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes, NCGetDaoProposals, NCDaoProposalVote, NCMintAsset, NCCreatePermission, NCGetAccInfo, NCGetPoolInfo, NCLinkPerm, NCPoolsInfo, NCNameType, NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, default_schema } from "./types";
export { NCKeyPair, NCCreateUser, NCCreateCollection, NCCreatePool, NCStakePool, NCUnstakePool, NCStakeMainDao, NCCreateDao, NCGetDaoWhiteList, NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, NCApproveDaoProposal, NCExecuteDaoProposal, NCGetVotes, NCGetDaoProposals, NCDaoProposalVote, NCMintAsset, NCCreatePermission, NCGetAccInfo, NCGetPoolInfo, NCLinkPerm, NCPoolsInfo, NCNameType, NCReturnTxs, NCReturnInfo, NCTxBal, NCTxNcoBal, default_schema };
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
export declare const devnet_urls: NCInitUrls;
export declare const devnet_services: NCInitServices;
/**
 * The primary tool to interact with [https://newcoin.org](newcoin.org).
 *
 * This is an early alpha.
 *
 * See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.
 */
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
        default_schema: {
            name: string;
            type: string;
        }[];
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
     * @params none
     * @returns An EOS key pair
     */
    createKeyPair(): Promise<NCKeyPair>;
    /**
     * Create a user - multistage operation creating new user account,
     * defailt collection, schema and template for the account
     * @param NCCreateUser
     * @returns NCReturnTxs
     */
    createUser(inpt: NCCreateUser): Promise<NCReturnTxs>;
    /**
     * Create default collection for the account
     * @param  NCCreateCollection
     * @returns Create Collection and template transactions' ids
     */
    createCollection(inpt: NCCreateCollection): Promise<NCReturnTxs>;
    /**
     * Create a new permission subordinate to the Active permission.
     * (future optional: allow under owner, TBD)
     * @param NCCreatePermission
     * @returns Create permission transaction id
     */
    createPermission(inpt: NCCreatePermission): Promise<NCReturnTxs>;
    /**
     * Link a permission to a specific action of a specific contract.
     * @param NCLinkPerm
     * author: the permission's owner to be linked
     * code: the owner of the action to be linked
     * type: the action to be linked
     * 'active', 'owner' ...
     * @returns Link permission transaction id
     */
    linkPermission(inpt: NCLinkPerm): Promise<NCReturnTxs>;
    stakeMainDAO(inpt: NCStakeMainDao): Promise<NCReturnTxs>;
    /**
    * Instant UnStake mainDAO with penalty
    * @param NCStakeMainDao
    * @returns NCReturnTxs
    */
    instUnstakeMainDAO(inpt: NCStakeMainDao): Promise<NCReturnTxs>;
    /**
     * Delayed UnStake mainDAO delay without penalty
     * @param NCStakeMainDao
     * @returns NCReturnTxs
     */
    dldUnstakeMainDAO(inpt: NCStakeMainDao): Promise<NCReturnTxs>;
    /** Staking pools service, issuing social tokens
     *
     * Create a staking pool for an account.
     * Selection of ticker and inflation/deflation optionality
     * @param   NCCreatePool
     * @returns Create Pool transaction id
     */
    createPool(inpt: NCCreatePool): Promise<NCReturnTxs>;
    /**
     * Stake to creator pool
     * @param
     * @returns Create Pool transaction id
     */
    stakePool(inpt: NCStakePool): Promise<NCReturnTxs>;
    /**
     * Unstake creator pool
     * @param   NCUnstakePool
     * @returns Create Pool transaction id
     */
    unstakePool(inpt: NCUnstakePool): Promise<NCReturnTxs>;
    /**
     * DAO creation. One per account.
     * @param inpt : NCCreateDao
     * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
     */
    createDao(inpt: NCCreateDao): Promise<NCReturnTxs>;
    getDaoProposals(inpt: NCGetDaoProposals): Promise<any>;
    /**
     *
     * @param inpt : NCCreateDaoProposal
     * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
     */
    createDaoProposal(inpt: NCCreateDaoProposal): Promise<NCReturnTxs>;
    /**
     *
     * @param inpt : NCCreateDaoUserWhitelistProposal
     * @returns NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id
     */
    createDaoUserWhitelistProposal(inpt: NCCreateDaoUserWhitelistProposal): Promise<NCReturnTxs>;
    /**
   *
   * @param inpt : NCApproveDaoProposal
   * @returns NCReturnTxs.TxID_approveDaoProposal
   */
    approveDaoProposal(inpt: NCApproveDaoProposal): Promise<NCReturnTxs>;
    /**
     *
     * @param inpt : NCApproveDaoProposal
     * @returns NCReturnTxs.TxID_approveDaoProposal
     */
    approveDaoWhitelistProposal(inpt: NCApproveDaoProposal): Promise<NCReturnTxs>;
    /**
     *
     * @param inpt : NCExecuteDaoProposal
     * @returns NCReturnTxs.TxID_executeDaoProposal
     */
    executeDaoProposal(inpt: NCExecuteDaoProposal): Promise<NCReturnTxs>;
    /**
     * @param inpt : NCExecuteDaoProposal
     * @returns NCReturnTxs.TxID_executeDaoProposal
     */
    executeDaoWhitelistProposal(inpt: NCExecuteDaoProposal): Promise<NCReturnTxs>;
    /**
     * @param inpt : NCCreateDao
     * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
     */
    voteOnProposal(inpt: NCDaoProposalVote): Promise<NCReturnTxs>;
    /**
     * @param inpt : NCCreateDao
     * @returns NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id
     */
    getDaoIdByOwner(owner?: string, noFail?: boolean): Promise<string>;
    getDaoWhitelist(inpt: NCGetDaoWhiteList): Promise<any>;
    getDaoProposal(inpt: NCGetDaoProposals): Promise<any>;
    getDaoWhitelistProposals(dao_id: number, proposer: string): Promise<any>;
    getDaoWhitelistProposal(inpt: NCGetDaoProposals): Promise<any>;
    listDaoProposals(inpt: NCGetDaoProposals): Promise<{
        list: any;
        id: string | undefined;
    }>;
    listDaoWhitelistProposals(inpt: NCGetDaoProposals): Promise<{
        list: any;
        id: string;
    }>;
    getProposalVotes(inpt: NCGetVotes): Promise<any>;
    /**
     * Mint an asset
     * @returns Create Pool transaction id
     */
    mintAsset(inpt: NCMintAsset): Promise<NCReturnTxs>;
    /**
     * Get account balance
     * @param acc: NCGetAccInfo
     * @param acc.token_name will set correct contract
     * @returns Tx data
     */
    getAccountBalance(acc: NCGetAccInfo): Promise<NCReturnInfo | undefined>;
    /**
     * Transfer GNCO between accounts
     * @param NCTxBal
     * @returns Transfer transaction id
     */
    txGNCOBalance(inpt: NCTxBal): Promise<NCReturnTxs>;
    /**
     * Transfer NCO between accounts
     * @param NCTxBal
     * @returns Transfer transaction id
     */
    txNCOBalance(inpt: NCTxBal): Promise<NCReturnTxs>;
    /**
     * Transfer creator tokens between accounts
     * @param   NCTxBal
     * @returns Transfer transaction id
     */
    txDAOTokenBalance(inpt: NCTxBal): Promise<NCReturnTxs>;
    /**
   * Get pool info
   * @param
   * @returns Tx data
   */
    getPoolInfo(payload: NCGetPoolInfo): Promise<NCPoolsInfo>;
    /**
     * Get trasaction data
     * @returns Tx data
     */
    getTxData(txid: string): Promise<GetTransaction<unknown>>;
    /**
     * Transfer NCO between accounts
     * @returns Transfer transaction id
     */
    _txBalance(contract: string, inpt: NCTxBal): Promise<NCReturnTxs>;
    SubmitTx(actions: any[], public_keys: string[], // testnet ["EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"]
    private_keys: string[]): Promise<TransactResult | ReadOnlyTransactResult>;
}
