/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['plugin:unicorn/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-implicit-coercion': ['error', { allow: ['!!', '+', '~'] }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'unicorn/import-index': 'error',
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    {
      // i: None common style files only
      files: ['*.mjs', '*.js', '*.cts', '*.mts', '*.ts'],
      extends: ['eslint:recommended'],
      rules: {
        'unicorn/filename-case': ['error', { case: 'camelCase' }],
      },
    },
    {
      // i: None React files only
      files: ['*.cjs', '*.mjs', '*.js', '*.cts', '*.mts', '*.ts'],
      rules: {
        'unicorn/filename-case': ['error', { case: 'camelCase' }],
      },
    },
    {
      // i: None React and none JavaScript files only
      files: ['*.cts', '*.mts', '*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
    {
      // i: React files only
      files: ['*.jsx', '*.tsx'],
      extends: ['plugin:eslint-plugin-react/recommended', 'next/core-web-vitals'],
      settings: {
        react: { version: 'detect' },
      },
      rules: {
        'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
        'react/jsx-no-useless-fragment': 'warn',
        'react/react-in-jsx-scope': 'off',
        'unicorn/filename-case': ['error', { case: 'pascalCase' }],
      },
    },
    {
      // i: Packages only
      files: ['packages/**/*.jsx', 'packages/**/*.tsx'],
      extends: ['next/core-web-vitals'],
      rules: {
        '@next/next/no-html-link-for-pages': 'off',
      },
    },
  ],
};
