/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['../.eslintrc.cjs'],
  rules: {
    'no-console': 'off',
    'unicorn/no-process-exit': 'off',
  },
};
