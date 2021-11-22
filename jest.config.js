module.exports = {
  roots: ["<rootDir>/test"],
  testMatch: [ '**/*.test.ts' ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: [
    "node_modules",
    "<rootDir>/src",
    "node_modules/jose/types"
  ],
  // runner: "jest-serial-runner"
};
