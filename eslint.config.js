import { Linter } from 'eslint';
import { readFileSync } from 'fs';
import { join } from 'path';

const config = new Linter.Config({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
});

export default config;
