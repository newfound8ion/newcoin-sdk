import { NCGetDaoProposals} from "../../../../../src";
import {api} from "../../index";

it("gets stake proposals", async () => {
    let ps = await api.daos.getDaoStakeProposals({dao_id: "1", proposal_author: "nco"} as NCGetDaoProposals);
    console.log(ps.error.details);
}, 60000);