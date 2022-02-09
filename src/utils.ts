export const normalizeUsername = (username: string, r: string) => {
    return username.replace(/\./g, r + r.repeat(12 - username.length));
};