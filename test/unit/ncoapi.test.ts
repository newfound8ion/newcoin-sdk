import { NCO_BlockchainAPI } from '../../src';
import { 
    NCCreateUser,  NCCreatePool, NCStakeToPool, NCMintAsset, NCTxNcoBal, 
    NCGetAccInfo, 
    NCReturnTxs, NCReturnInfo
} from "../../src/types";
//import * as nco from 'newcoin';

let randomname= () => " ".repeat(9).split("").map(_ => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97))).join("") + ".io"
let name = randomname();
console.log(name);

const api = new NCO_BlockchainAPI(
    {
        bc_url:  "http://testnet.newcoin.org",
        hyp_url: "http://hyperion.newcoin.org"
    }
);

describe("Basic blockchain operations", () => {
    describe("open account transaction", () => {
        it("create acc", async () => {

            let nco_struct : NCCreateUser = {
                newUser: name, 
                newacc_public_active_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT",
                newacc_public_owner_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT",
                payer: "io", 
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV",
                ram_amt : 8196, 
                cpu_amount : "100.0000 NCO", 
                net_amount : "100.0000 NCO", 
                xfer : true, // stake or transfer CPU/NET to the account
            };
            let resp :NCReturnTxs = await api.createUser(nco_struct) ;
            console.log(resp);
            expect(typeof resp.TxID_createAcc).toBe('string');
            expect(typeof resp.TxID_createCol).toBe('string'); 
            expect(typeof resp.TxID_createSch).toBe('string'); 
            //expect(typeof resp.TxID_createTpl).toBe('string');

        }, 120000)
    });

    describe("create pool transaction", () => {
        it("create pool", async () => {

            let n: NCCreatePool = { owner: name, payer:'io', 
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV", 
                payer_public_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"
            } ;
            
            let resp :NCReturnTxs = await api.createPool(n) ;
            console.log(resp);
            expect(typeof resp.TxID_createPool).toBe('string');

        }, 60000)
    });

    describe("stake to pool transaction", () => {
        it("stake pool", async () => {
            let n: NCStakeToPool = { to: name, amt: '100000.0000 NCO', payer:'io',  
            payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV", 
            payer_public_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"
        } ;
            
        let resp : NCReturnTxs = await api.stakeToPool(n) ;
        console.log(resp);
        expect(typeof resp.TxID_stakeToPool).toBe('string');
        }, 60000)
    });

    describe("mint ERC721 asset", () => {
        it("Mint asset", async () => {
            let n: NCMintAsset = { 
            creator: name, 
            payer:'io',  
            payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV", 
            payer_public_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT",
            immutable_data: [
                {'key': 'name', 'value': ['string', name+'_'+(new Date()).getTime()]},
                {'key': 'description','value': ['string', 'demo nft']}, 
                {'key': 'image','value': ['string', 'https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png']},
                {'key': "external_url",'value':['string', '']}
                //{'key': "template_name"}, {'value': ['string', '']},
                //{'key': "attributes"}, { 'value': ['string[]', []] }
              ],
            mutable_data: []
            };
            
        let resp :NCReturnTxs = await api.mintAsset(n) ;
        console.log(resp);
        expect(typeof resp.TxID_mintAsset).toBe('string');
        }, 60000)
    });

    describe("get account pools balances", () => {
        it("get pool balances", async () => {
            let n:   NCGetAccInfo = { owner: 'io', contract: 'pools.nco' } ;
            let resp:NCReturnInfo = { acc_balances: [] }
            resp = await api.getAccountBalance(n) as NCReturnInfo ;
            console.log(resp);
            if(resp.acc_balances)
                expect(typeof resp.acc_balances[0]).toBe('string'); 
            else 
                expect(false).toBe(true);
        }, 60000)
    });

    describe("tx NCO transaction", () => {
        it("tx nco balance", async () => {
            let n: NCTxNcoBal = { 
                to: name, 
                amt: '5000.0000 NCO', 
                payer:'io',
                memo: 'test transfer', 
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV", 
                payer_public_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"
            };
            
            debugger;
            let resp :NCReturnTxs = await api.txNcoBalance(n) ;
            console.log(resp);
            expect(typeof resp.TxID_txNcoBalance).toBe('string');

        }, 60000)
    });

});
