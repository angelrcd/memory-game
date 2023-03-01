module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-spaced-func": "error",
    "space-in-parens": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "keyword-spacing": ["error", {
      "after": true,
    }],
  }
};
