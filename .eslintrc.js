module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/click-events-have-key-events': 'warn',
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    'react/no-array-index-key': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'react/jsx-indent': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'comma-dangle': 'warn',
    'object-curly-spacing': 'warn',
    'quotes': 'warn',
    'react/self-closing-comp': 'warn',
    'no-trailing-spaces': 'warn',
    'import/prefer-default-export': 0,
    'default-param-last': 0,
    'quote-props': 'warn',
    'no-console': 'warn',
    'no-multiple-empty-lines': 'warn',
  },
};