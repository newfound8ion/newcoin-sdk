import exp from 'constants';
import { devnet_urls, devnet_services, NCO_BlockchainAPI } from '../../src';
import { 
    NCKeyPair,
    NCCreateUser,  NCCreateCollection, NCCreatePool, 
    NCCreatePermission, NCLinkPerm, 
    NCStakeMainDao, 
    NCCreateDao, NCCreateDaoProposal, NCApproveDaoProposal, NCExecuteDaoProposal,
    NCStakePool, NCUnstakePool,
    NCMintAsset, NCTxNcoBal, 
    NCGetAccInfo, 
    NCReturnTxs, NCReturnInfo,
    default_schema
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

const api = new NCO_BlockchainAPI(
    devnet_urls, devnet_services
);

describe("Basic blockchain operations", () => {
    describe("test template", () => {
        it("test template", async () => {
            let resp = "test template shows tests are running" ;
            console.log(resp);

            return resp;
        }, 1000);
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

    describe.only("stake to MainDAO pool transaction", () => {
        it("stake maindao pool", async () => {
        
            let n: NCStakeMainDao = { 
                    amt: '100.0000 NCO', 
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
            payer:'io',  
            payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"
        } ;
            
        let resp : NCReturnTxs = await api.stakePool(n) ;
        console.log(resp);
        pool_code = resp.pool_code as string;
        
        n.owner


        expect(pool_code).toBeDefined();
        expect(typeof resp.TxID_stakePool).toBe('string');
        }, 60000);
        
    });

    describe("unstake from pool transaction", () => {
        it("withdraw from pool", async () => {
        expect(pool_code).toBeDefined();

        const n: NCUnstakePool = { 
                payer: "io",
                amt: '5.0000 '+pool_code,  
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"//
        } ;
        console.log("unstake action: "+ JSON.stringify(n));
        let resp : NCReturnTxs = await api.unstakePool(n) ;
        console.log(resp);
        expect(typeof resp.TxID_unstakePool).toBe('string');
        }, 60000)
    });

    describe("figure all pools transaction", () => {
        it("find all pools pool", async () => {
           
           /*
            const api = new PoolsRpcApi("http://testnet.newcoin.org", "pools.nco", fetch);
            let p: PoolsPayload = { };
            let r: NCReturnTxs = {};
            type RetT = { rows: PoolsPayload[] };
            let t;
            for (let i = 0; i < 10; i++) 
            {
                 p.id = i;

                console.log("Get poolbyid: ", JSON.stringify(p));
                let q = await api.getPoolByOwner(p);
                t = await q.json() as RetT;
                let pool_id = t.rows[0].id as string;
                let pool_code = t.rows[0].code as string;
                console.log("pool:" + JSON.stringify(t));
            }
            */
        const n: NCUnstakePool = { 
                payer: "io",
                amt: '5.0000 '+pool_code,  
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV"//
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
                authpr_prv_key: prv_key_active,
                descr: "test DAO by "+ name
            } ;
            
            let resp :NCReturnTxs = await api.createDao(n) ;
            console.log(resp);
            expect(typeof resp.TxID_createDao).toBe('string');

        }, 60000)
    });

    describe("'create dao proposal' transaction", () => {
        it("create dao proposal", async () => {

            const now = new Date();

            let n: NCCreateDaoProposal = { 
                proposer: name, 
                proposer_prv_key: prv_key_active,
                //dao_id: 0,//dao_id,
                
                dao_owner:name,
                title: "Latest news",
                summary: "Slava Ukraini",
                url: "meduza.io",
                vote_start: "2022-10-01T00:00:00", //now.toISOString(),
                vote_end:   "2022-11-01T00:00:00"  //new Date(now.getTime()+ 8*24*60*60*1000).toISOString()
            } ;              
            
            console.log("Arguments for DAO proposal: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.createDaoProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_createDaoProposal).toBe('string');

        }, 60000)
    });

    describe("'approve dao proposal' transaction", () => {
        it("create dao proposal", async () => {

            const now = new Date();

            let n: NCApproveDaoProposal = { 
                approver: name, 
                approver_prv_key: prv_key_active,
                dao_owner: name,
                proposal_author: name,

            };              
            
            console.log("Arguments for DAO proposal approval: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.approveDaoProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_approveDaoProposal).toBe('string');

        }, 60000)
    });


    describe("'execute dao proposal' transaction", () => {
        it("execute dao proposal", async () => {

            const now = new Date();

            let n: NCExecuteDaoProposal = { 
                exec: name, 
                exec_prv_key: prv_key_active,
                dao_owner: name,
                proposal_author: name,

            };              
            
            console.log("Arguments for DAO proposal approval: " + JSON.stringify(n));
            let resp :NCReturnTxs = await api.executeDaoProposal(n) ;
            console.log(resp);
            expect(typeof resp.TxID_executeDaoProposal).toBe('string');

        }, 60000)
    });
    
    describe("list daos", () => {
        it("list proposals for dao", async () => {

            // const now = new Date();

            // let n: NCListDaoProposals = { 
            //     exec: name, 
            //     exec_prv_key: prv_key_active,
            //     dao_owner: name,
            //     proposal_author: name,

            // };              
            
            // console.log("Arguments for DAO proposal approval: " + JSON.stringify(n));
            let resp = await api.getDaoProposals({ dao_id: "28" });
            console.log(resp);
            //debugger;
            // expect(typeof resp.TxID_executeDaoProposal).toBe('string');

        }, 60000)
    });
    
    describe("mint ERC721 asset", () => {
        it("Mint asset", async () => {
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
                {'key': 'content','value':['string', 'test content']},
                {'key': "license",'value':['string', 'CC-EX-123456']},
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

    describe.only("get account pools balances", () => {
        it("get pool balances", async () => {
            
            let n:   NCGetAccInfo = { owner: 'io', contract: 'pools2.nco' } ;
            let resp:NCReturnInfo = { acc_balances: [] }
            resp = await api.getAccountBalance(n) as NCReturnInfo ;
            console.log(resp);
            
            n.contract = "pool.nco";
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
                to:   name, 
                amt: '1000.0000 NCO', 
                payer:'io',
                memo: 'test transfer', 
                payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV", 
                payer_pub_key: "EOS5PU92CupzxWEuvTMcCNr3G69r4Vch3bmYDrczNSHx5LbNRY7NT"
            };
            
            let resp :NCReturnTxs = await api.txNcoBalance(n) ;
            console.log(resp);
            expect(typeof resp.TxID_txNcoBalance).toBe('string');

        }, 60000)
    });

});
