module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'import',
    'lodash',
    'promise',
    'react',
    'you-dont-need-lodash-underscore',
    'react-hooks',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: '16.8',
    },
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'comma-spacing': 2,
    'comma-style': 2,
    // "consistent-return": 2,
    curly: 2,
    'eol-last': 2,
    'func-call-spacing': 2,
    'func-name-matching': 2,
    'import/default': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-unresolved': 2,
    'import/order': [
      2,
      { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] },
    ],
    indent: 'off',
    'jsx-quotes': 2,
    'keyword-spacing': [2, { before: true, after: true }],
    'linebreak-style': process.platform === 'win32' ? 'off' : 'error',
    'max-statements-per-line': [2, { max: 1 }],
    'no-debugger': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 2,
    'no-global-assign': 2,
    'no-lonely-if': 2,
    'no-multiple-empty-lines': 2,
    'no-multi-spaces': [2, { ignoreEOLComments: true }],
    'no-native-reassign': 2,
    'no-spaced-func': 2,
    'no-tabs': 2,
    'no-template-curly-in-string': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-unneeded-ternary': 2,
    'no-unsafe-negation': 2,
    'no-useless-computed-key': 2,
    'no-var': 2,
    'no-warning-comments': 1,
    'babel/object-curly-spacing': [2, 'always'],
    'object-shorthand': 2,
    'padded-blocks': [2, 'never'],
    'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'prefer-numeric-literals': 1,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-atomic-updates': 0,
    'require-yield': 0,
    'babel/semi': 2,
    'space-before-blocks': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'template-curly-spacing': 2,
    'unicode-bom': 2,

    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': [2, { children: true }],
    'react/jsx-equals-spacing': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 1,
    'react/jsx-tag-spacing': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-children-prop': 2,
    'react/no-danger': 2,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 1,
    'react/no-multi-comp': 0,
    'react/no-redundant-should-component-update': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-typos': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/self-closing-comp': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
