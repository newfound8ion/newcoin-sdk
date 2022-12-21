import {NCApproveDaoProposal, NCReturnTxs} from "../../../../../src";
import {api, prv_key_active, user} from "../../index";

it("approve standard proposal", async () => {
    let n: NCApproveDaoProposal = {
        approver: user,
        approver_prv_key: prv_key_active,
        dao_owner: user,
        proposal_id: 22
    };
    console.log("Arguments for DAO proposal approval: " + JSON.stringify(n));
    let resp :NCReturnTxs = await api.daos.approveDaoProposal(n) ;
    console.log(resp);
    expect(typeof resp.TxID_approveDaoProposal).toBe('string');
}, 60000);

it("approve whitelist proposal", async () => {
    let n: NCApproveDaoProposal = {
        approver: user, approver_prv_key: prv_key_active,
        dao_owner: user, proposal_id: 0
    };
    console.log("Arguments for DAO proposal approval: " + JSON.stringify(n));
    let resp :NCReturnTxs = await api.daos.approveDaoWhitelistProposal(n) ;
    console.log(resp);
    expect(typeof resp.TxID_approveDaoProposal).toBe('string');
}, 60000);