import {NCExecuteDaoProposal, NCReturnTxs} from "../../../../../src";
import {api, prv_key_active, user, wait} from "../../index";

it("execute dao proposal", async () => {
    await wait(25000);

    let n: NCExecuteDaoProposal = {
        exec: user,
        exec_prv_key: prv_key_active,
        dao_owner: user,
        proposal_id: 0
    };

    console.log("Arguments for DAO proposal execution: " + JSON.stringify(n));
    let resp :NCReturnTxs = await api.daos.executeDaoProposal(n) ;
    console.log(resp);
    expect(typeof resp.TxID_executeDaoProposal).toBe('string');

}, 60000);

it("execute whitelist proposal", async () => {
    await wait(40000);

    let n: NCExecuteDaoProposal = {
        exec: user,
        exec_prv_key: prv_key_active,
        dao_owner: user,
        proposal_id: 0
    };

    console.log("Arguments for WL proposal execution: " + JSON.stringify(n));
    let resp: NCReturnTxs = await api.daos.executeDaoWhitelistProposal(n);
    console.log(resp);
    expect(typeof resp.TxID_executeDaoProposal).toBe('string');

}, 60000);