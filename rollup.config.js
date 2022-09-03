import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/index.ts",
    external: ['eosjs', 'eosjs/dist/eosjs-jssig.js', '@eoscafe/hyperion', '@newfound8ion/newcoin.pools-js', '@newfound8ion/newcoin.pool-js', '@newfound8ion/newcoin.daos-js', 'cross-fetch'],
    output: [
      {
      file: "./dist/index.mjs",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "./dist/index.cjs",
      format: "cjs",
      sourcemap: true,
    }],
    plugins: [typescript()],
  },
];
