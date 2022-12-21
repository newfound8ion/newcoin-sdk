import {devnet_services, devnet_urls} from "../../../src";
import {NCO_BlockchainAPI} from "../../../src";

const TEST_PROXY = true;
const DEBUG = false;

export const newsafeJwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVkZW50aWFsIjp7Im9yaWdpbiI6ImZpcmViYXNlIn0sImlkZW50aXR5Ijp7InVzZXJuYW1lIjoiZHguaW8ifSwicmVxdWVzdG9yIjoibmV3Z3JhcGguaW8iLCJzY29wZXMiOltdLCJjb25maWciOnsiY3JlYXRlZCI6IjIwMjItMDktMDlUMTI6NDc6MDUuMjYyWiIsImV4cGlyZXMiOiIyMDIyLTA5LTA5VDEzOjE3OjA1LjI2MloiLCJyZW5ld2FibGUiOnRydWV9LCJyZXF1ZXN0Ijp7InJlZmVyZXIiOiJkZXYubmV3Z3JhLnBoIiwiYXBwT3duZXIiOiJuZXdncmFwaC5pbyIsInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly9kZXYubmV3Z3JhLnBoIiwic2NvcGVzIjpbXX0sImF1dGhvcml0eSI6ImF1dGgudW5zaWQub3JnIiwidmVyc2lvbiI6IjEiLCJpYXQiOjE2NjI3Mjc2MjV9.YQuqUxIAPUUMhdPTtFd08KdykA4lXfdUCFtY0cAGhlJ1jm_pypSsDLASw6tfEn4ubAzPz3cYfvsViiIfrD6CpIJ2GliK7v1y7R_ti4vwHkcGfVWlqV8PuNAAPirWfptrYKPWacwZH0lRBTKf8hyzYbTmHOegZBi4dGSarZsDpNnfLpDsYVfVvzu-395Geu3OTyz37wAg7Dmzje5bKDWYiizTQ-oL9Gq45CYJDyJ1Y7wYFiAPE4iMnPFhg3ooHde9URsNXLHJ_Dw8qEelquoB48NCQlH0pff-ESDcVmNrgfDXPTtLUA2mgGR_rhkjWkFQV5GZykijxBMurhuERJYbs7qcP_hclrlSOp-mS3TIELbmVwybS5GCivL0XRyw67cew0FNzJD5roLBPcIFPK9gVE-fwNv4D9W9nq7S00W0o2jYiqSbHtkwAKJo9HbpMe3DOyfVzQt6ZmrXan0fQij9HEt8RJu1ETsOvnJ9zGr0njReoCs_OO1O8DETEEPUApsi";

export const user = "dx.io";
export let prv_key_active = newsafeJwt || "";

export const wait = (t: number | undefined) => new Promise((res) => setTimeout(res, t));

export const api = new NCO_BlockchainAPI(
    {
        urls: devnet_urls,
        services: devnet_services,
        debug: DEBUG,
        is_proxy: TEST_PROXY
    }
);
