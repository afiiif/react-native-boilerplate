module.exports = {
  root: true,
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  plugins: [
    'react',
    'react-native',
  ],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'no-console': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'react-native/no-unused-styles': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
  },
};
