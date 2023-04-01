module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'react-app',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-debugger': 'warn',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': [2],
    'import/no-named-as-default': 'off',
    'import/no-anonymous-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        parser: 'typescript',
        arrowParens: 'always',
        bracketSpacing: true,
        bracketSameLine: false,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        tsxSingleQuote: true,
        trailingComma: 'all',
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
