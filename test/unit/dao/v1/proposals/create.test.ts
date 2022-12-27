import {
    NCCreateDao, NCCreateDaoProposal, NCCreateDaoStakeProposal,
    NCCreateDaoUserWhitelistProposal,
    NCCreateDaoUserWhitelistRemoveProposal,
    NCReturnTxs
} from "../../../../../src";
import { api, prv_key_active, user } from "../../index";

it("create dao", async () => {

    let n: NCCreateDao = {
        author: user,
        author_prv_key: prv_key_active,
        descr: "test DAO by "+ user
    } ;

    let resp :NCReturnTxs = await api.daos.createDao(n) ;
    console.log(resp);
    expect(typeof resp.TxID_createDao).toBe('string');

}, 60000);

it("create whitelist proposal", async () => {

    let start = new Date();
    let end = start;
    start = new Date(start.setSeconds(start.getSeconds() + 7));
    end = new Date(end.setSeconds(end.getSeconds() + 27));

    let n: NCCreateDaoUserWhitelistProposal = {
        proposer: user,
        proposer_prv_key: prv_key_active,
        dao_owner: user,
        type: "",
        pass_rate: 0,
        vote_start: start.toISOString().slice(0,-5),
        vote_end:  end.toISOString().slice(0,-5),
        user: "io"
    };

    console.log("Arguments for whitelist user proposal creation : " + JSON.stringify(n));
    let resp :NCReturnTxs = await api.daos.createDaoUserWhitelistProposal(n) ;
    console.log(resp);
    expect(typeof resp.TxID_createDaoProposal).toBe('string');
    let dao_id = resp?.dao_id?.toString();
    // @ts-ignore
    expect(~~dao_id).toBeGreaterThan(0);

}, 60000);

it("create remove member proposal", async () => {

    let start = new Date();
    let end = start;
    start = new Date(start.setSeconds(start.getSeconds() + 10));
    end = new Date(end.setSeconds(start.getSeconds() + 20));

    let n: NCCreateDaoUserWhitelistRemoveProposal = {
        user: "zuzanella.io",
        proposer: user,
        proposer_prv_key: prv_key_active,
        dao_owner: user,
        pass_rate: 0,
        vote_start: start.toISOString().slice(0,-5),
        vote_end:  end.toISOString().slice(0,-5)
    } ;

    console.log("Arguments for DAO proposal creation : " + JSON.stringify(n));
    let resp :NCReturnTxs = await api.daos.createDaoRemoveMemberProposal(n) ;
    console.log(resp);
    expect(typeof resp.TxID_createDaoProposal).toBe('string');
    // @ts-ignore
    dao_id = resp.dao_id.toString() ;
    // @ts-ignore
    expect(~~dao_id).toBeGreaterThan(0);

}, 60000);

it("create dao proposal", async () => {

    let start = new Date();
    let end = start;
    start = new Date(start.setSeconds(start.getSeconds() + 10));
    end = new Date(end.setSeconds(start.getSeconds() + 20));

    let n: NCCreateDaoProposal = {
        proposer: user,
        proposer_prv_key: prv_key_active,
        dao_owner: user,
        title: "Latest news",
        summary: "Don't panic",
        url: "meduza.io",
        pass_rate: 0,
        vote_start: start.toISOString().slice(0,-5),
        vote_end:  end.toISOString().slice(0,-5)
    };

    console.log("Arguments for DAO proposal creation : " + JSON.stringify(n));
    let resp :NCReturnTxs = await api.daos.createDaoProposal(n);
    console.log(resp);
    expect(typeof resp.TxID_createDaoProposal).toBe('string');
}, 60000);

it("create stake proposal", async () => {
    let start = new Date();
    let end = start;
    start = new Date(start.setSeconds(start.getSeconds() + 10));
    end = new Date(end.setSeconds(start.getSeconds() + 20));

    // let quantity = {
    //     quantity: "1.000 DXDXIO",
    //     contract: "pools2.nco"
    // };

    // let quantity = {
    //     quantity: "1.000 DXDXIO",
    //     contract: "eosio.token"
    // };

    let quantity = "quantity: 1.0000 DXDXIO"

    // const quantity = "2.100 " + "DXDXIO"
    let n: NCCreateDaoStakeProposal = {
        quantity: quantity,
        to: "dx.io",
        dao_id:"0",
        proposer: user,
        proposer_prv_key: prv_key_active,
        dao_owner: user,
        pass_rate: 0,
        vote_start: start.toISOString().slice(0,-5),
        vote_end:  end.toISOString().slice(0,-5)
    };

    console.log("Arguments for DAO proposal creation : " + JSON.stringify(n));
    let resp :NCReturnTxs = await api.daos.createDaoStakeProposal(n) ;
    console.log(resp);
    // expect(typeof resp.TxID_createDaoProposal).toBe('string');
    // // @ts-ignore
    // dao_id = resp.dao_id.toString() ;
    // // @ts-ignore
    // expect(~~dao_id).toBeGreaterThan(0);
}, 60000);