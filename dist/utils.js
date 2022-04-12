"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeUsername = void 0;
const normalizeUsername = (username, r) => {
    return username.replace(/\./g, r + r.repeat(12 - username.length));
};
exports.normalizeUsername = normalizeUsername;
