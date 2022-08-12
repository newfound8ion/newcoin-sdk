import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
      file: "./dist/index.esm.js",
      format: "esm",
    },
    {
      file: "./dist/index.js",
      format: "cjs",
    }],
    plugins: [resolve(), json(), commonjs(), typescript()],
  },
];
