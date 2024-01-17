module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'default-case': 'error',
    eqeqeq: 'error',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-const-assign': 'error',
    'no-else-return': 'error',
    'max-lines': ['warn', { max: 300, skipComments: true }],
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-unreachable': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'case' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'require-await': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: 'default', format: ['camelCase'] },
      { selector: 'variableLike', format: ['camelCase', 'PascalCase'] },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        filter: {
          regex: '^.*$',
          match: true,
        },
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      { selector: 'memberLike', format: ['camelCase'] },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'enum', format: ['UPPER_CASE'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase', 'snake_case'],
      },
      {
        selector: 'variable',
        types: ['import'],
        format: null,
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.spec.*', 'src/{modules, utils, lang, data}/**/*.ts'],
      rules: {
        'max-lines': 'off',
      },
    },
    {
      files: ['src/**/*.spec.*', 'src/{modules, utils, lang, data}/**/*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
};
