module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      'ecmaVersion': 6,
      'sourceType': 'module',
      'ecmaFeatures': {
        'jsx': true
      }
    },
    plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint/eslint-plugin'],
    extends: [
      "eslint:recommended",
      'plugin:react/recommended',
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
    ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      'eqeqeq': 'error',
      'no-console': 'warn',
      'prettier/prettier': 'error',
      'react/display-name': 'off',
      'react/no-children-prop': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'warn'
    },
  };
  