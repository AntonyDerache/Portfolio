module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-param-reassign': ['error', { props: false }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
};
