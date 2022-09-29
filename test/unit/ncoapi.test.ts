//import exp from 'constants';
//import { TransactResult } from 'eosjs/dist/eosjs-api-interfaces';
//import { isObjectBindingPattern } from 'typescript';
import { debug } from 'console';
import { devnet_urls, devnet_services, NCO_BlockchainAPI } from '../../src/';
import { 
    //NCKeyPair,
    NCCreateUser,  NCCreateCollection, NCCreatePool, 
    NCCreatePermission, NCLinkPerm, 
    NCStakeMainDao, 
    NCCreateDao, NCCreateDaoProposal, NCCreateDaoUserWhitelistProposal, 
    NCApproveDaoProposal, NCDaoProposalVote, NCDaoWithdrawVoteDeposit,
    NCExecuteDaoProposal, NCGetDaoProposals, NCGetVotes,
    NCStakePool, NCUnstakePool,
    NCMintAsset, NCMintFile, NCTxNcoBal, //NCTxBal,
    NCGetAccInfo, 
    NCReturnTxs, NCReturnInfo,NCGetDaoWhiteList,
    default_schema,
    SBT_NFT_schema,
    file_schema,
    NCChangeFile,
    //NCBuyRam
} from "../../src/types";
import { normalizeUsername } from '../../src/utils';
import { readAsset } from '../../src/io/nft';

const TEST_PROXY = false;

//import * as nco from 'newcoin';
let randomname= () => " ".repeat(9).split("").map(_ => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97))).join("") + ".io"
let name = TEST_PROXY ? "dx.io" : randomname();
console.log(name);


const newsafeJwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVkZW50aWFsIjp7Im9yaWdpbiI6ImZpcmViYXNlIn0sImlkZW50aXR5Ijp7InVzZXJuYW1lIjoiZHguaW8ifSwicmVxdWVzdG9yIjoibmV3Z3JhcGguaW8iLCJzY29wZXMiOltdLCJjb25maWciOnsiY3JlYXRlZCI6IjIwMjItMDktMDlUMTI6NDc6MDUuMjYyWiIsImV4cGlyZXMiOiIyMDIyLTA5LTA5VDEzOjE3OjA1LjI2MloiLCJyZW5ld2FibGUiOnRydWV9LCJyZXF1ZXN0Ijp7InJlZmVyZXIiOiJkZXYubmV3Z3JhLnBoIiwiYXBwT3duZXIiOiJuZXdncmFwaC5pbyIsInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly9kZXYubmV3Z3JhLnBoIiwic2NvcGVzIjpbXX0sImF1dGhvcml0eSI6ImF1dGgudW5zaWQub3JnIiwidmVyc2lvbiI6IjEiLCJpYXQiOjE2NjI3Mjc2MjV9.YQuqUxIAPUUMhdPTtFd08KdykA4lXfdUCFtY0cAGhlJ1jm_pypSsDLASw6tfEn4ubAzPz3cYfvsViiIfrD6CpIJ2GliK7v1y7R_ti4vwHkcGfVWlqV8PuNAAPirWfptrYKPWacwZH0lRBTKf8hyzYbTmHOegZBi4dGSarZsDpNnfLpDsYVfVvzu-395Geu3OTyz37wAg7Dmzje5bKDWYiizTQ-oL9Gq45CYJDyJ1Y7wYFiAPE4iMnPFhg3ooHde9URsNXLHJ_Dw8qEelquoB48NCQlH0pff-ESDcVmNrgfDXPTtLUA2mgGR_rhkjWkFQV5GZykijxBMurhuERJYbs7qcP_hclrlSOp-mS3TIELbmVwybS5GCivL0XRyw67cew0FNzJD5roLBPcIFPK9gVE-fwNv4D9W9nq7S00W0o2jYiqSbHtkwAKJo9HbpMe3DOyfVzQt6ZmrXan0fQij9HEt8RJu1ETsOvnJ9zGr0njReoCs_OO1O8DETEEPUApsi";
//jest. retryTimes(3);

//defaults pre-generation
let pub_key_active = "EOS8KnfBrVCvdWr1JXybAcMvz8NjqB3XLArEAzRm7wLJchWKw6NFM";
let prv_key_active = TEST_PROXY ? newsafeJwt : "5JLUzZYfMJUim4KPdGw1ipA8i4Std8QM4hunnvwaesqgRfWiD3j";

let pub_key_owner = "EOS6j3ATfMaBRM7DnGHqZ8Miqw4ah1awgtpbriq4zubfdhey9pcDx";
// @ts-ignore
let prv_key_owner = "5JvR9dzATtTkPPDcUdNZzQ8Grp6w4eKJz4xqomCx9T7M9VCaQgN";

let pub_key_comm = "EOS5wzNPC5WM73cC3ScApobLgGABMuMSrdJB9b4RqZraGg3BEWnP9";
// @ts-ignore
let prv_key_comm = "5J4twVpFc1dKsqUmcyvUZg5kQ1ofNTJAWZn5xPwsDGo6MkCRpZ2";


let col = normalizeUsername(name, "z"); // name.replace(/\./g, 'z' + 'z'.repeat(d));
let sch = normalizeUsername(name, "w"); // name.replace(/\./g, 'w' + 'w'.repeat(d));
let tpn = normalizeUsername(name, "t"); // name.replace(/\./g, 't' + 't'.repeat(d));
// @ts-ignore
let sch_sbt = normalizeUsername(name, "s");

let pool_code: string;
let dao_id: string = "160";
let asset_id: string = "";

// @ts-ignore
//let io_vote_id: string = "100";

//@ts-ignore
let wait = (t) => new Promise((res) => setTimeout(res, t));

const api = new NCO_BlockchainAPI(
    { ...devnet_urls, ...(TEST_PROXY ? { nodeos_url: devnet_urls.nodeos_proxy_url } : {})  }, devnet_services, true, TEST_PROXY
);

    describe("Basic blockchain operations", () => {

        it("test template", async () => {
            let resp = "test template shows tests are running" ;
            console.log(resp);

            return resp;
        }, 1000);
        it("custom code", async () => {
            //let n: NCGetDaoProposals = { dao_owner: "testaaagt.io",] reverse: false  }
            //const resp = await api.getDaoWhitelistProposals(n);
            //console.log(JSON.stringify(resp));
        }, 15000);
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

        }, 30000);
 
        it("create default generic user collection", async () => { 

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

            let resp : NCReturnTxs = await api.createCollection(nco_struct);
            console.log(resp);
            expect(typeof resp.TxID_createCol).toBe('string'); 
            expect(typeof resp.TxID_createSch).toBe('string'); 
            //expect(typeof resp.TxID_createTpl).toBe('string');

        }, 60000);

        it.skip("create special non-transf collection", async () => { 
      
            let nco_struct : NCCreateCollection = {
                user: name, 
                user_prv_active_key: prv_key_active,
                collection_name: col,
                schema_name: sch_sbt,
                schema_fields: SBT_NFT_schema,
                template_name: "-1",
                template_fields: [], 
                allow_notify: true,
                mkt_fee    : 0.00,
                xferable   : false,
                burnable   : false,
                max_supply : 0xffffff 
            };

            let resp : NCReturnTxs = await api.createCollection(nco_struct);

            console.log(resp);
            expect(typeof resp.TxID_createCol).toBe('string'); 
            expect(typeof resp.TxID_createSch).toBe('string'); 
            //expect(typeof resp.TxID_createTpl).toBe('string');

        }, 60000);
    });

    describe.skip("Permission management", () => {
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

    describe.skip("pools tests", () => {
        it("create pool", async () => {

            let n: NCCreatePool = { 
                owner: name, 
                owner_prv_active_key: prv_key_active
            } ;
            
            let resp :NCReturnTxs = await api.createPool(n) ;
            console.log(resp);
            expect(typeof resp.TxID_createPool).toBe('string');

        }, 60000)

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
    
    describe.skip("'DAO tests", () => {
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
    
        it("get proposal by id", async () => {

            let n: NCGetDaoProposals = { 
                proposal_id: "0",
                dao_id: dao_id
            };              
            
            console.log("Arguments for DAO proposal search: " + JSON.stringify(n));
            let resp = await api.getDaoWhitelistProposals(n);
            console.log(JSON.stringify(resp));
            console.log(
                    "Quantities: " 
                    + " --- Vote YES: " + JSON.stringify(resp.rows[0].vote_yes) 
                    + " --- Vote NO:  " + JSON.stringify(resp.rows[0].vote_no )); 
            expect(resp.rows[0].id).toBe(0);

        }, 60000)
    
        it("list whitelist proposals for dao", async () => {
            let n: NCGetDaoProposals = { 
                dao_owner: name, 
                //proposal_author: name 
            };              
            
            //console.log("Arguments for DAO proposal list: " + JSON.stringify(n));
            let resp = await api.getDaoWhitelistProposals(n);
            console.log("list of WL proposals " + JSON.stringify(resp));
            // @ts-ignore
            expect(resp.rows[0].id).toBe(0);

        }, 60000)
    
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
    
        it("get whitelist by daoid", async () => {

            let n: NCGetDaoWhiteList = { 
                dao_id: dao_id
            };              
            
            console.log("Arguments for whitelist search: " + JSON.stringify(n));
            let resp = await api.getDaoWhitelist(n);
            console.log(JSON.stringify(resp));
            //expect(resp.rows[0].id).toBe(0);

        }, 60000)
  
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
    
        it("get proposal by id", async () => {

            let n: NCGetDaoProposals = { 
                proposal_id: "0",
                dao_id: dao_id
            };              
            
            console.log("Arguments for DAO proposal search: " + JSON.stringify(n));
            let resp = await api.getDaoProposals(n);
            console.log("received from DAO proposal search:" + JSON.stringify(resp));
            console.log(
                    "Quantities: " 
                    + " --- Vote YES: " + JSON.stringify(resp.rows[0].vote_yes) 
                    + " --- Vote NO:  " + JSON.stringify(resp.rows[0].vote_no )); 
            expect(resp.rows[0].id).toBe(0);

        }, 60000)
   
        it("list proposals for dao", async () => {
            let n: NCGetDaoProposals = { 
               dao_owner: name
            };              
            
            //console.log("Arguments for DAO proposal list: " + JSON.stringify(n));
            //let resp = await api.listDaoProposals(n);
            //console.log("list of DAO proposals: " + JSON.stringify(resp));
            // @ts-ignore
            //expect(resp.rows[0].id).toBe(0);

            let resp = await api.getDaoProposals(n);
            console.log("get DAO proposals " + JSON.stringify(resp));
            expect(resp.rows[0].id).toBe(0);

        }, 60000)

        it("get one proposal for dao", async () => {
            let n: NCGetDaoProposals = { 
               dao_owner: name,
               proposal_id: "0"
            }; 

            let resp = await api.getDaoProposals(n);
            console.log("get one DAO proposal" + JSON.stringify(resp));
            expect(resp.rows[0].id).toBe(0);
        }, 60000)
   
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

    // ================= minting ================================================== 
    describe("NFT stuff", () => {
        it("Mint asset basic", async () => {

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
        }, 60000);

        it("create file",async () => {
            let test = "test string 0xcafefeed ".repeat(10);

            let n: NCMintFile = { 
                creator: name,
                payer: name,  
                user_prv_active_key: prv_key_active, 
                payer_prv_key: prv_key_active, 
                name: name+'_'+(new Date()).getTime(),
                path: 'demo/file', 
                content: test,
                image: 'https://storage.googleapis.com/opensea-prod.appspot.com/creature/12.png'
            };
            
            let resp : NCReturnTxs = await api.createFile(n) as NCReturnTxs;
            asset_id = resp.asset_id as string;
            console.log(resp);
            expect(typeof resp.TxID_mintFile).toBe('string');
        }, 60000);

        it("modify and read file",async () => {
            
            let test = "new test string 0xcafefeed ".repeat(3);

            let n: NCChangeFile = { 
                asset_id: asset_id,
                editor: name,
                owner: name,
                payer_prv_key: prv_key_active, 
                new_name: name+'_'+(new Date()).getTime(),
                new_path: 'demo/file', 
                new_content: test,
                new_image: 'https://storage.googleapis.com/opensea-prod.appspot.com/creature/11.png'
            };
            
            let resp : NCReturnTxs = await api.changeFile(n) as NCReturnTxs;
            console.log(resp);

            const file = await readAsset(resp.asset_id as string);
            console.log("asset: ... " + JSON.stringify(file.mutable_data));

            expect(typeof resp.TxID_changeFile).toBe('string');


        },30000);

        it.skip("Mint file (old experiment)", async () => {

            let test = "2".repeat(64);
            let n: NCMintAsset = { 
                creator: name,
                col_name: normalizeUsername(name, "y"),
                sch_name: normalizeUsername(name, "v"),
                payer: name,  
                payer_prv_key: prv_key_active, 
                immutable_data: [
                    {'key': 'name', 'value': ['string', name+'_'+(new Date()).getTime()]},
                    {'key': 'path','value': ['string', 'demo/file']}, 
                    {'key': 'content','value': ['string',  test]},
                ],
                mutable_data: [
                    //{'key': 'storage', 'value': ['string', test]}
                ]
            };
            
            let resp : NCReturnTxs = {};
            try {
                let resp :NCReturnTxs = await api.mintAsset(n) ;
                console.log(resp);
            } catch(e) {
                debug;;
                let m = (e as Error).message;
                console.log("Error message:  " + m );
                console.log("type " + typeof(e));
                //console.log(e);

                let nco_struct : NCCreateCollection = {
                    user: name, 
                    collection_name: normalizeUsername(name, "y"),
                    schema_name: normalizeUsername(name, "v"),
                    schema_fields: file_schema,
                    template_name: normalizeUsername(name, "t"),
                    template_fields: [], 
                    user_prv_active_key: prv_key_active,
                    allow_notify: true,
                    mkt_fee    : 0.00,
                    xferable   : false,
                    burnable   : false, // undeletable from ceramic
                    max_supply : 0xffffff 
                };

                resp = await api.createCollection(nco_struct);
                console.log("created collection " + resp);

                resp  = await api.mintAsset(n) ;
                console.log("minted file: " + resp);

        }
        
        expect(typeof resp.TxID_mintAsset).toBe('string');

        //resp  = await api.createCollection(nco_struct);
        //console.log("error text: " + resp);

        }, 60000);

        it.skip("Mint SBT", async () => {

            //let test = "1".repeat(64);
            let n: NCMintAsset = { 
            creator: name,
            //col_name: "sbtcollctn11",
            sch_name: normalizeUsername(name, "s"),
            payer: name,  
            payer_prv_key: prv_key_active, 
            immutable_data: [
                {'key': 'name', 'value': ['string', name+'_'+(new Date()).getTime()]},
                {'key': 'description','value': ['string', 'demo nft']}, 
                {'key': 'image','value': ['string', 'https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png']},
                { 'key': 'type', 'value':['string', 'non transferable SBT'] },
                { 'key': 'issuer', 'value': ['string', 'io'] },
                { 'key': 'recipient','value': ['string', name] },
                { 'key': 'quantifiers','value': ['string', ''] },
                { 'key': 'signature', 'value': ['string', 'SIG_example'] },
                { 'key': 'content', 'value': ['string', 'example JSON here'] },
                { 'key': 'version', 'value': ['string', '1.0']}
              ],
            mutable_data: [
                //{'key': 'storage', 'value': ['string', test]}
            ]
        };  
            
        let resp :NCReturnTxs = await api.mintAsset(n) ;
        console.log(resp);
        expect(typeof resp.TxID_mintAsset).toBe('string');
        }, 60000);
    });


    describe.skip("Votes tests", () => {
        it("get dao whitelist", async () => {

            let n: NCGetDaoWhiteList = { 
                dao_id: "97"
            };              
            
            let resp = await api.getDaoWhitelist(n);
            console.log(JSON.stringify(resp));
            expect(resp.rows.length).toBe(2);

        }, 60000)

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


    describe.skip("get account pools balances", () => {
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

