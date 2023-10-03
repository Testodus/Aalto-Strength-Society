module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  plugins: ['prettier','@typescript-eslint/eslint-plugin'],
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules', 'build', 'dist', 'public'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'warn'
  },
};
