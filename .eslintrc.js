module.exports = {
  parser: 'babel-eslint',
  plugins: ['flowtype', 'prettier', 'import'],
  extends: ['plugin:flowtype/recommended', 'prettier', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    jest: true,
    node: true,
  },
};
