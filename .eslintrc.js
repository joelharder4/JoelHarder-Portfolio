module.exports = {
  plugins: ['jest'],
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  parser: '@babel/eslint-parser',

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: '6',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-unused-vars': ['warn', { vars: 'all' }],
    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': 2,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/prop-types': 0,
    'no-restricted-imports': [
      2,
      {
        name: 'axios',
        message:
          'Imports of axios package is forbidden. Pwease use axios from /shared-components/axios',
      },
    ],
  },
  ignorePatterns: ['tailwind.config.js'],
};
