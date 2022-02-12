import { GetTransaction } from "@eoscafe/hyperion";
import { NCKeyPair, NCCreateUser, NCCreateCollection, NCCreatePool, NCStakeToPool, NCMintAsset, NCTxNcoBal, NCCreatePermission, NCGetAccInfo, NCGetPoolInfo, NCLinkPerm, NCPoolsInfo, NCReturnTxs, NCReturnInfo } from "./types";
export * from './types';
/**
 * The primary tool to interact with [https://newcoin.org](newcoin.org).
 *
 * This is an early alpha.
 *
 * See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.
 */
export declare class NCO_BlockchainAPI {
    /** @internal */
    private _url;
    /** @internal */
    private _h_url;
    /**
     * Init the api
     * @name newcoin-api
     * @param bc_url - newcoin url - http://testnet.newcoin.org
     * @param hyp_url - hyperion url - http://hyperion.newcoin.org
     * @returns a Newcoin API instance
     */
    constructor({ bc_url, hyp_url }: {
        bc_url: string;
        hyp_url: string;
    });
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
     * Create a staking pool.
     * @returns Create Pool transaction id
     */
    createPool(inpt: NCCreatePool): Promise<NCReturnTxs>;
    /**
     * Stake to pool
     * @returns Create Pool transaction id
     */
    stakeToPool(inpt: NCStakeToPool): Promise<NCReturnTxs>;
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
    txNcoBalance(inpt: NCTxNcoBal): Promise<NCReturnTxs>;
    /**
     * Get pool info
     * @returns Tx data
     */
    getPoolInfo(payload: NCGetPoolInfo): Promise<NCPoolsInfo>;
}
