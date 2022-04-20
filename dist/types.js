"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721_schema = exports.default_schema = void 0;
exports.default_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'external_url', type: 'string' },
    { name: 'content_type', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'license', type: 'string' }
];
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
exports.ERC721_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
];
// https://docs.opensea.io/docs/metadata-standards
// export const OpenSea_schema = [
//]
