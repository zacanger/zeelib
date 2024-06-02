const rulesOverrides = {
  'array-bracket-spacing': [ 'error', 'always' ],
  '@typescript-eslint/no-confusing-void-expression': 'off',
  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': [ 'error', 'always-multiline' ],
  '@typescript-eslint/strict-boolean-expressions': 'off',
}
const love = require('eslint-config-love')
love.rules = { ...love.rules, ...rulesOverrides }

module.exports = {
  ...love,
  files: ['src/*.ts'],
}
