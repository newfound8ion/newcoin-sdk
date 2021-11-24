"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../src");
//import * as nco from 'newcoin';
let randomname = () => " ".repeat(9).split("").map(_ => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97))).join("") + ".io";
let name = randomname();
console.log(name);
const api = new src_1.NCO_BlockchainAPI({
    bc_url: "http://testnet.newcoin.org",
    hyp_url: "http://hyperion.newcoin.org"
});
describe("Basic blockchain operations", () => {
    describe("open account transaction", () => {
        it("create acc", async () => {
            let nco_struct = {
                newUser: name,
                newacc_public_active_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT",
                newacc_public_owner_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT",
                payer: "io",
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV",
                ram_amt: 8196,
                cpu_amount: "100.0000 NCO",
                net_amount: "100.0000 NCO",
                xfer: true,
            };
            let resp = await api.createUser(nco_struct);
            console.log(resp);
            expect(typeof resp.TxID_createAcc).toBe('string');
            expect(typeof resp.TxID_createCol).toBe('string');
            expect(typeof resp.TxID_createSch).toBe('string');
            //expect(typeof resp.TxID_createTpl).toBe('string');
        }, 120000);
    });
    describe("create pool transaction", () => {
        it("create pool", async () => {
            let n = { owner: name, payer: 'io',
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV",
                payer_public_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"
            };
            let resp = await api.createPool(n);
            console.log(resp);
            expect(typeof resp.TxID_createPool).toBe('string');
        }, 60000);
    });
    describe("stake to pool transaction", () => {
        it("stake pool", async () => {
            let n = { to: name, amt: '100000.0000 NCO', payer: 'io',
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV",
                payer_public_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"
            };
            let resp = await api.stakeToPool(n);
            console.log(resp);
            expect(typeof resp.TxID_stakeToPool).toBe('string');
        }, 60000);
    });
    describe("mint ERC721 asset", () => {
        it("Mint asset", async () => {
            let n = {
                creator: name,
                payer: 'io',
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV",
                payer_public_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT",
                immutable_data: [
                    { 'key': 'name', 'value': ['string', name + '_' + (new Date()).getTime()] },
                    { 'key': 'description', 'value': ['string', 'demo nft'] },
                    { 'key': 'image', 'value': ['string', 'https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png'] },
                    { 'key': "external_url", 'value': ['string', ''] }
                    //{'key': "template_name"}, {'value': ['string', '']},
                    //{'key': "attributes"}, { 'value': ['string[]', []] }
                ],
                mutable_data: []
            };
            let resp = await api.mintAsset(n);
            console.log(resp);
            expect(typeof resp.TxID_mintAsset).toBe('string');
        }, 60000);
    });
    describe("get account balances", () => {
        it("get balances", async () => {
            let n = { owner: 'io', contract: 'pools.nco' };
            let resp = { acc_balances: [] };
            resp = await api.getAccountBalance(n);
            console.log(resp);
            if (resp.acc_balances)
                expect(typeof resp.acc_balances[0]).toBe('string');
            else
                expect(false).toBe(true);
        }, 60000);
    });
});
