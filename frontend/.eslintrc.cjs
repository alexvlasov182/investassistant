module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Make ESLint respect Prettier
  ],
  rules: {
    'prettier/prettier': 'error', // Show Prettier issues as ESLint errors
    'react/react-in-jsx-scope': 'off', // Not needed with React 18+
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
