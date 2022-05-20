module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    "no-underscore-dangle": "off",
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": "off",
    "no-console": "off",
    "no-undef": "off",
    "consistent-return": "off",
    "no-prototype-builtins": "off",
  },
};
