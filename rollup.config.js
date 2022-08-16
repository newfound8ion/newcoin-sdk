import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/index.ts",
    external: ['eosjs', 'eosjs/dist/eosjs-jssig', '@eoscafe/hyperion', '@newcoin-foundation/newcoin.pools-js', '@newcoin-foundation/newcoin.pool-js', '@newcoin-foundation/newcoin.daos-js', 'cross-fetch'],
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
