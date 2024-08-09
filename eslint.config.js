import jhqn from '@jhqn/eslint-config'

export default jhqn(
  {
    type: 'lib',
    lessOpinionated: true,
    stylistic: {
      overrides: {
        'style/indent': 'off',
        'style/jsx-indent': 'off',
        'style/jsx-one-expression-per-line': 'off',
        'style/multiline-ternary': 'off',
        'style/operator-linebreak': 'off',
      },
    },
    vue: {
      overrides: {
        'vue/script-indent': 'off', // https://biomejs.dev/internals/language-support/#html-super-languages-support
      },
    },
  },
)
