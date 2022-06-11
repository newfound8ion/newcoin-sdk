import exp from 'constants';
import { TransactResult } from 'eosjs/dist/eosjs-api-interfaces';
import { isObjectBindingPattern } from 'typescript';
import { devnet_urls, devnet_services, NCO_BlockchainAPI } from '../../src';
import { 
    NCKeyPair,
    NCCreateUser,  NCCreateCollection, NCCreatePool, 
    NCCreatePermission, NCLinkPerm, 
    NCStakeMainDao, 
    NCCreateDao, NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, 
    NCApproveDaoProposal, NCDaoProposalVote, NCDaoWithdrawVoteDeposit,
    NCExecuteDaoProposal, NCGetDaoProposals, NCGetVotes,
    NCStakePool, NCUnstakePool,
    NCMintAsset, NCTxNcoBal, 
    NCGetAccInfo, 
    NCReturnTxs, NCReturnInfo,NCGetDaoWhiteList,
    default_schema,
    NCBuyRam
} from "../../src/types";
import { normalizeUsername } from '../../src/utils';

//import * as nco from 'newcoin';
let randomname= () => " ".repeat(9).split("").map(_ => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97))).join("") + ".io"
let name = randomname();
console.log(name);

//defaults pre-generation
let pub_key_active = "EOS8KnfBrVCvdWr1JXybAcMvz8NjqB3XLArEAzRm7wLJchWKw6NFM";
let prv_key_active = "5JLUzZYfMJUim4KPdGw1ipA8i4Std8QM4hunnvwaesqgRfWiD3j";

let pub_key_owner = "EOS6j3ATfMaBRM7DnGHqZ8Miqw4ah1awgtpbriq4zubfdhey9pcDx";
let prv_key_owner = "5JvR9dzATtTkPPDcUdNZzQ8Grp6w4eKJz4xqomCx9T7M9VCaQgN";

let pub_key_comm = "EOS5wzNPC5WM73cC3ScApobLgGABMuMSrdJB9b4RqZraGg3BEWnP9";
let prv_key_comm = "5J4twVpFc1dKsqUmcyvUZg5kQ1ofNTJAWZn5xPwsDGo6MkCRpZ2";

let pool_code: string;
let dao_id: string = "160";
let io_vote_id: string = "100";

//@ts-ignore
let wait = (t) => new Promise((res) => setTimeout(res, t));

const api = new NCO_BlockchainAPI(
    devnet_urls, devnet_services, true
);



describe("Basic blockchain operations", () => {
    describe("test template", () => {
        it("test template", async () => {
            let resp = "test template shows tests are running" ;
            console.log(resp);

            return resp;
        }, 1000);
    });


    describe.skip("custom test", () => {
        it("custom code", async () => {
            //let n: NCBuyRam = {  user: "testaaagt.io",  payer: "io", payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV", ram_amt: 8192 };
            //const resp = await api.buyRam(n) as TransactResult;

            let n: NCGetDaoProposals = {
                dao_owner: "testaaagt.io",
                reverse: false
            }
            const resp = await api.getDaoWhitelistProposals(n);
            console.log(JSON.stringify(resp));

        }, 15000);
    });
    
    describe("create key pair", () => {
        it("key pair create", async () => {

            let resp = await api.createKeyPair();
            console.log("Keys owner generated: \n Prv: %s \n Pub: %s\n", resp.prv_key, resp.pub_key);
            pub_key_owner =  resp.pub_key;
            prv_key_owner =  resp.prv_key;
            resp = await api.createKeyPair();
            console.log("Keys active generated: \n Prv: %s \n Pub: %s\n", resp.prv_key, resp.pub_key);
            pub_key_active =  resp.pub_key;
            prv_key_active =  resp.prv_key;
            resp = await api.createKeyPair();
            console.log("Keys comm generated: \n Prv: %s \n Pub: %s\n", resp.prv_key, resp.pub_key);
            pub_key_comm =  resp.pub_key;
            prv_key_comm =  resp.prv_key;
            
            return resp;
        }, 60000);
    });

    describe("open account transaction", () => {
        it("create acc", async () => {

            let nco_struct : NCCreateUser = {
                newUser: name, 
                newacc_pub_active_key: pub_key_active,
                newacc_pub_owner_key:  pub_key_owner,
                payer: "io", 
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV",
                ram_amt : 8196, 
                cpu_amount : "100.0000 NCO", 
                net_amount : "100.0000 NCO", 
                xfer : true, // stake or transfer CPU/NET to the account
            };
            let resp : NCReturnTxs = await api.createUser(nco_struct) ;
            console.log(resp);
            expect(typeof resp.TxID_createAcc).toBe('string');

        }, 30000)
    });

    describe("create collection transaction", () => {
        it("create coll", async () => { 

            let d = 12 - name.length; // short name extension
            let col = normalizeUsername(name, "z"); // name.replace(/\./g, 'z' + 'z'.repeat(d));
            let sch = normalizeUsername(name, "w"); // name.replace(/\./g, 'w' + 'w'.repeat(d));
            let tpn = normalizeUsername(name, "t"); // name.replace(/\./g, 't' + 't'.repeat(d));
            
            let nco_struct : NCCreateCollection = {
                user: name, 
                collection_name: col,
                schema_name: sch,
                schema_fields: default_schema,
                template_name: tpn,
                template_fields: [], 
                user_prv_active_key: prv_key_active,
                allow_notify: true,
                mkt_fee    : 0.05,
                xferable   : true,
                burnable   : true,
                max_supply : 0xffff 
            };

            let resp : NCReturnTxs = await api.createCollection(nco_struct) ;

            console.log(resp);
            expect(typeof resp.TxID_createCol).toBe('string'); 
            expect(typeof resp.TxID_createSch).toBe('string'); 
            //expect(typeof resp.TxID_createTpl).toBe('string');

        }, 60000)
    });

    describe("create permission for an account under active", () => {
        it("create permission", async () => {
            let n: NCCreatePermission = { 
                author: name, 
                perm_name: 'nwpermission', 
                author_prv_active_key: prv_key_active,
                perm_pub_key: pub_key_comm
             } ;
            console.log("creating permission %s for account %s", n.perm_name, n.author);
            let resp: NCReturnTxs = await api.createPermission(n);
            console.log(resp);
            expect(typeof resp.TxID_createPerm).toBe('string');
        }, 60000);
    });

    describe("link permission for an account under active", () => {
        it("link permission", async () => {
            let n: NCLinkPerm = { 
                author: name, 
                perm_to_link: 'nwpermission', 
                author_prv_active_key: prv_key_active,
                action_owner: "atomicassets", 
                action_to_link: "mintasset" // for an example
             } ;
            console.log("linking permission %s for account %s to trigger %s on %s", 
                        n.perm_to_link, n.author, n.action_to_link, n.action_owner);
            let resp: NCReturnTxs = await api.linkPermission(n);
            console.log(resp);
            expect(typeof resp.TxID_linkPerm).toBe('string');
        }, 60000);
    });

    describe("tx NCO transaction", () => {
        it("tx nco balance", async () => {
            let n: NCTxNcoBal = { 
                to:   name, 
                amt: '1000.0000 NCO', 
                payer:'io',
                memo: 'initial balance transfer', 
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"
            };
            
            let resp :NCReturnTxs = await api.txNCOBalance(n) ;
            console.log(resp);
            expect(typeof resp.TxID).toBe('string');

        }, 60000)
    });

    describe("'create pool' transaction", () => {
        it("create pool", async () => {

            let n: NCCreatePool = { 
                owner: name, 
                owner_prv_active_key: prv_key_active
            } ;
            
            let resp :NCReturnTxs = await api.createPool(n) ;
            console.log(resp);
            expect(typeof resp.TxID_createPool).toBe('string');

        }, 60000)
    });

    describe("stake to MainDAO pool transaction", () => {
        it("stake maindao pool", async () => {
        
            let n: NCStakeMainDao = { 
                    amt: '1000.0000 NCO', 
                    payer: name,
                    payer_prv_key: prv_key_active
            } ;
            
        let resp : NCReturnTxs = await api.stakeMainDAO(n) ;
        console.log(resp);
        expect(typeof resp.TxID_stakeMainDAO).toBe('string');
        }, 60000)
    });

    describe("instant unstake MainDAO pool transaction", () => {
        it("unstake maindao pool", async () => {
            let n: NCStakeMainDao = { 
                amt: '100.0000 GNCO', 
                payer: name,
                payer_prv_key: prv_key_active
        } ;
        // check balance?
        let resp : NCReturnTxs = await api.instUnstakeMainDAO(n) ;
        console.log(resp);
        expect(typeof resp.TxID_unstakeMainDAO).toBe('string');
        }, 60000)
    });
        
    describe("delayed unstake MainDAO pool transaction", () => {
        it("delayed unstake maindao pool", async () => {
            let n: NCStakeMainDao = { 
                amt: '100.0000 GNCO', 
                payer: name,
                payer_prv_key: prv_key_active
        } ;
            
        let resp : NCReturnTxs = await api.dldUnstakeMainDAO(n) ;
        console.log(resp);
        expect(typeof resp.TxID_unstakeMainDAO).toBe('string');
        }, 60000)
    });

    describe("stake to pool transaction", () => {
        it("stake pool", async () => {
        let n: NCStakePool = { 
            owner: name, 
            amt: '100.0000 GNCO', 
            payer: name,//'io',  
            payer_prv_key: prv_key_active//"5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"
        } ;
            
        let resp : NCReturnTxs = await api.stakePool(n) ;
        console.log(resp);
        pool_code = resp.pool_code as string;
        
        expect(pool_code).toBeDefined();
        expect(typeof resp.TxID_stakePool).toBe('string');
        }, 60000);
        
    });

    describe("IO stake to pool transaction", () => {
        it("stake pool", async () => {
        let n: NCStakePool = { 
            owner: name, 
            amt: '100.0000 GNCO', 
            payer: 'io',  
            payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"
        } ;
            
        let resp : NCReturnTxs = await api.stakePool(n) ;
        console.log(resp);
        pool_code = resp.pool_code as string;
        
        expect(pool_code).toBeDefined();
        expect(typeof resp.TxID_stakePool).toBe('string');
        }, 60000);
        
    });


    describe("unstake from pool transaction", () => {
        it("withdraw from pool", async () => {
        expect(pool_code).toBeDefined();

        const n: NCUnstakePool = { 
                amt: '5.0000 '+pool_code,  
                payer: name, //"io",
                payer_prv_key: prv_key_active//"5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"//
        } ;
        console.log("unstake action: "+ JSON.stringify(n));
        let resp : NCReturnTxs = await api.unstakePool(n) ;
        console.log(resp);
        expect(typeof resp.TxID_unstakePool).toBe('string');
        }, 60000)
    });
    
    describe("'create dao' transaction", () => {
        it("create dao", async () => {

            let n: NCCreateDao = { 
                author: name, 
                author_prv_key: prv_key_active,
                descr: "test DAO by "+ name
            } ;
            
            let resp :NCReturnTxs = await api.createDao(n) ;
            console.log(resp);
            expect(typeof resp.TxID_createDao).toBe('string');

        }, 60000)
    });

    

    describe("'create whitelist proposal' transaction", () => {
        it("create whitelist proposal", async () => {

            let start = new Date();
            let end = start;
            start = new Date(start.setSeconds(start.getSeconds() + 7)); 
            end   = new Date(end.setSeconds(end.getSeconds() + 27));

            let n: NCCreateDaoUserWhitelistProposal = { 
                proposer: name, 
                proposer_prv_key: prv_key_active,
                dao_owner:name,
                vote_start: start.toISOString().slice(0,-5), //now.toISOString(),
                vote_end:  end.toISOString().slice(0,-5),  //new Date(now.getTime()+ 8*24*60*60*1000).toISOString()
                user: "io"
            } ;              
            
            console.log("Arguments for whitelist user proposal creation : " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.createDaoUserWhitelistProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_createDaoProposal).toBe('string');
            // @ts-ignore
            dao_id = resp.dao_id.toString() ;
            // @ts-ignore
            expect(~~dao_id).toBeGreaterThan(0);
            
        }, 60000)
    });

    

    describe("get whitelist proposal by ID", () => {
        it("get proposal by id", async () => {

            let n: NCGetDaoProposals = { 
                proposal_id: "0",
                dao_id: dao_id
            };              
            
            console.log("Arguments for DAO proposal search: " + JSON.stringify(n));
            let resp = await api.getDaoWhitelistProposal(n);
            console.log(JSON.stringify(resp));
            console.log(
                    "Quantities: " 
                    + " --- Vote YES: " + JSON.stringify(resp.rows[0].vote_yes) 
                    + " --- Vote NO:  " + JSON.stringify(resp.rows[0].vote_no )); 
            expect(resp.rows[0].id).toBe(0);

        }, 60000)
    });

   
    describe("list whitelist proposals", () => {
        it("list whitelist proposals for dao", async () => {
            let n: NCGetDaoProposals = { 
                dao_owner: name, 
                //proposal_author: name 
            };              
            
            //console.log("Arguments for DAO proposal list: " + JSON.stringify(n));
            let resp = await api.listDaoWhitelistProposals(n);
            console.log("list of WL proposals " + JSON.stringify(resp));
            // @ts-ignore
            expect(resp.list[0].id).toBe(0);

        }, 60000)
    });

    describe("'approve whitelist proposal' transaction", () => {
        it("approve WL proposal", async () => {

            let n: NCApproveDaoProposal = { 
                approver: name, approver_prv_key: prv_key_active,
                dao_owner: name, proposal_id: 0

            };              
            
            console.log("Arguments for DAO proposal approval: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.approveDaoWhitelistProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_approveDaoProposal).toBe('string');

        }, 60000)
    });

    describe("vote dao whitelist proposal transaction", () => {
        it("vote proposal",async () => {
            let n: NCDaoProposalVote = {
                voter: name, voter_prv_key: prv_key_active,
                dao_id: dao_id,
                proposal_id: "0",
                proposal_type: "whitelist",
                quantity: "3.1000 " + pool_code, 
                option: "YES"
            };

            console.log("Arguments for Voting whitelist: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.voteOnProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_voteDaoProposal).toBe('string');

        }, 30000);
    });

    describe("'execute whitelist proposal' transaction", () => {
        it("execute whitelist proposal", async () => {

            console.log("waiting 40 sec .... ");
            await wait(40000);

            let n: NCExecuteDaoProposal = { 
                exec: name, 
                exec_prv_key: prv_key_active,
                dao_owner: name,
                proposal_id: 0
            };              
            
            console.log("Arguments for WL proposal execution: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.executeDaoWhitelistProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_executeDaoProposal).toBe('string');

        }, 60000)
    });

    describe("get whitelist by daoID", () => {
        it("get whitelist by daoid", async () => {

            let n: NCGetDaoWhiteList = { 
                dao_id: dao_id
            };              
            
            console.log("Arguments for whitelist search: " + JSON.stringify(n));
            let resp = await api.getDaoWhitelist(n);
            console.log(JSON.stringify(resp));
            //expect(resp.rows[0].id).toBe(0);

        }, 60000)
    });


    describe("'create dao proposal' transaction", () => {
        it("create dao proposal", async () => {

            let start = new Date();
            let end = start;

            start = new Date(start.setSeconds(start.getSeconds() + 10)); 
            end   = new Date(end.setSeconds(start.getSeconds() + 20));
            console.log("start vote: " + start);
            console.log("end vote: " + end);
            
            //end.setMinutes(start.getMinutes() + 1);

            let n: NCCreateDaoProposal = { 
                proposer: name, 
                proposer_prv_key: prv_key_active,
                dao_owner:name,
                title: "Latest news",
                summary: "Don't panic",
                url: "meduza.io",
                vote_start: start.toISOString().slice(0,-5), //now.toISOString(),
                vote_end:  end.toISOString().slice(0,-5)  //new Date(now.getTime()+ 8*24*60*60*1000).toISOString()
            } ;              
            
            console.log("Arguments for DAO proposal creation : " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.createDaoProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_createDaoProposal).toBe('string');
            // @ts-ignore
            dao_id = resp.dao_id.toString() ;
            // @ts-ignore
            expect(~~dao_id).toBeGreaterThan(0);
            
        }, 60000)
    });

    describe("'approve dao proposal' transaction", () => {
        it("approve dao proposal", async () => {

            let n: NCApproveDaoProposal = { 
                approver: name, 
                approver_prv_key: prv_key_active,
                dao_owner: name,
                proposal_id: 0

            };              
            
            console.log("Arguments for DAO proposal approval: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.approveDaoProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_approveDaoProposal).toBe('string');

        }, 60000)
    });

    describe("get DAO proposal by ID", () => {
        it("get proposal by id", async () => {

            let n: NCGetDaoProposals = { 
                proposal_id: "0",
                dao_id: dao_id
            };              
            
            console.log("Arguments for DAO proposal search: " + JSON.stringify(n));
            let resp = await api.getDaoProposal(n);
            console.log(JSON.stringify(resp));
            console.log(
                    "Quantities: " 
                    + " --- Vote YES: " + JSON.stringify(resp.rows[0].vote_yes) 
                    + " --- Vote NO:  " + JSON.stringify(resp.rows[0].vote_no )); 
            expect(resp.rows[0].id).toBe(0);

        }, 60000)
    });

    describe("list proposals", () => {
        it("list proposals for dao", async () => {
            let n: NCGetDaoProposals = { 
               dao_owner: name
            };              
            
            //console.log("Arguments for DAO proposal list: " + JSON.stringify(n));
            let resp = await api.listDaoProposals(n);
            console.log("list of DAO proposals " + JSON.stringify(resp));
            // @ts-ignore
            expect(resp.list[0].id).toBe(0);

        }, 60000)
    });



    describe("vote dao proposal transaction", () => {
        it("vote DAO proposal",async () => {
            let n: NCDaoProposalVote = {
                voter: name,
                voter_prv_key: prv_key_active,
                dao_id: dao_id,
                proposal_id: "0",
                proposal_type: "standart",
                quantity: "2.1000 " + pool_code, 
                option: "YES"
            };

            console.log("Arguments for Voting: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.voteOnProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_voteDaoProposal).toBe('string');

        }, 45000);
    });

    

    describe(" whitelisted IO vote dao proposal transaction", () => {
        it("IO vote proposal",async () => {
            let n: NCDaoProposalVote = {
                voter: "io",
                voter_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV",
                dao_id: dao_id,
                proposal_id: "0",
                proposal_type: "standart",
                quantity: "2.5000 " + pool_code, 
                option: "NO"
            };

            console.log("Arguments for Voting: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.voteOnProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_voteDaoProposal).toBe('string');

        }, 45000);
    });

    describe("'execute dao proposal' transaction", () => {
        it("execute dao proposal", async () => {

            console.log("waiting 25 sec .... ");
            await wait(25000);

            let n: NCExecuteDaoProposal = { 
                exec: name, 
                exec_prv_key: prv_key_active,
                dao_owner: name,
                proposal_id: 0
            };              
            
            console.log("Arguments for DAO proposal execution: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.executeDaoProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_executeDaoProposal).toBe('string');
            

        }, 60000)
    });

    describe("mint ERC721 asset", () => {
        it("Mint asset", async () => {

            let test = "1".repeat(64);

            let n: NCMintAsset = { 
            creator: name, 
            payer: name,  
            payer_prv_key: prv_key_active, 
            immutable_data: [
                {'key': 'name', 'value': ['string', name+'_'+(new Date()).getTime()]},
                {'key': 'description','value': ['string', 'demo nft']}, 
                {'key': 'image','value': ['string', 'https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png']},
                {'key': "external_url",'value':['string', '']},
                {'key': 'content_type','value':['string', 'text']},
                {'key': 'content','value':['string', test]},
                {'key': "license",'value':['string', 'CC-EX-123456']},
                //{'key': "template_name"}, {'value': ['string', '']},
                //{'key': "attributes"}, { 'value': ['string[]', []] }
              ],
            mutable_data: [
                //{'key': 'storage', 'value': ['string', test]}
            ]
            };
            
        let resp :NCReturnTxs = await api.mintAsset(n) ;
        console.log(resp);
        expect(typeof resp.TxID_mintAsset).toBe('string');
        }, 60000)
    });


    //jest.retryTimes(3);
    describe.only("get DAO whitelist", () => {
        it("get dao whitelist", async () => {

            let n: NCGetDaoWhiteList = { 
                dao_id: "97"
            };              
            
            let resp = await api.getDaoWhitelist(n);
            console.log(JSON.stringify(resp));
            expect(resp.rows.length).toBe(2);

        }, 60000)
    });

    describe.only("list votes", () => {
        it("list votes for a proposer", async () => {

            let n: NCGetVotes = { 
                voter: "testaaagt.io",
                lower_bound: "2", 
                limit: "12"
            };              
            
            console.log("Arguments for DAO votes list: " + JSON.stringify(n));
            let resp = await api.getVotes(n);
            console.log("Answer" + JSON.stringify(resp));
            //console.log("Quantity field: " + JSON.stringify(resp.rows[0].quantity));
            expect(resp.rows[0].id).toBe(0);

        }, 60000)
    });

    describe("get vote deposit back", () => {
        it("vote deposit back", async () => {

            let n: NCDaoWithdrawVoteDeposit = { 
                voter:  name,
                voter_prv_key: prv_key_active,
                vote_id: "0",
            };              
            
            console.log("Arguments for get vote depost back : " + JSON.stringify(n));
            let resp = await api.withdrawVoteDeposit(n);
            //console.log("Answer" + JSON.stringify(resp));
            //console.log("Quantity field: " + JSON.stringify(resp.rows[0].quantity));
            expect(typeof resp.TxID_WithdrawVoteDeposit).toBe('string');

        }, 60000)
    });


    describe("get account pools balances", () => {
        it("get pool balances", async () => {
            
            let n:   NCGetAccInfo = { owner: 'io', contract: 'pools2.nco' } ;
            let resp:NCReturnInfo = { acc_balances: [] }
            resp = await api.getAccountBalance(n) as NCReturnInfo ;
            console.log("NEW POOL COINS" + JSON.stringify(resp));
            
            n.contract = "pool.nco";
            resp = await api.getAccountBalance(n) as NCReturnInfo ;
            console.log("GNCO balance" + JSON.stringify(resp));
            
            if(resp.acc_balances)
                expect(typeof resp.acc_balances[0]).toBe('string'); 
            else 
                expect(false).toBe(true);
        }, 60000)
    });

});
