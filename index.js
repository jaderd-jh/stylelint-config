import { stylisticRules } from './stylistic-rules.js'

export default {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-no-unsupported-browser-features',
    '@stylistic/stylelint-plugin',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/load-partial-extension': 'always',
    'scss/at-import-partial-extension-allowed-list': ['scss'],
    'plugin/declaration-block-no-ignored-properties': true,
    'no-descending-specificity': [true, { severity: 'warning' }],
    'plugin/no-unsupported-browser-features': [true, { severity: 'warning', ignorePartialSupport: true }],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'deep'] }],
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'no-empty-source': null,
    'no-duplicate-selectors': null,
    // kebab-case(组件库常用 or snake_case(方便使用css modules)
    'selector-class-pattern': '^([a-z][a-z0-9]*)((_|__|-|--)[a-z0-9]+)*$',
    'declaration-property-value-no-unknown': true,
    ...stylisticRules,
  },
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx,cjs,mjs}'],
      rules: {
        '@stylistic/no-empty-first-line': null,
        '@stylistic/string-quotes': 'single',
      },
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
        'stylelint-config-recommended-vue',
        'stylelint-config-recommended-vue/scss',
        'stylelint-config-standard-vue',
        'stylelint-config-standard-vue/scss',
      ],
      rules: {
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'deep'] }],
        'declaration-property-value-no-unknown': [true, { ignoreProperties: { '/.+/': '/^v-bind(.+)$/' } }],
        '@stylistic/declaration-block-trailing-semicolon': null,
        '@stylistic/indentation': [2, { baseIndentLevel: 0 }],
      },
    },
    {
      files: ['**/*.scss', '**/*.sass', '**/*.less'],
      rules: {
        'plugin/no-unsupported-browser-features': [true, { ignore: ['css-nesting'] }],
      },
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  allowEmptyInput: true,
  cache: true,
}
