module.exports = {
  overrides: [
    {
      files: ['src/*.ts'],
      extends: 'standard-with-typescript',
      rules: {
        'array-bracket-spacing': [ 'error', 'always' ],
        '@typescript-eslint/no-confusing-void-expression': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': [ 'error', 'always-multiline' ],
        '@typescript-eslint/strict-boolean-expressions': 'off',
      },
    },
  ],
}
