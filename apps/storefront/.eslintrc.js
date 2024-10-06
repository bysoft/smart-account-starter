/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  "plugins": [
    "unicorn",
  ],
  rules: {
    "unicorn/filename-case": "off",
  },
};
