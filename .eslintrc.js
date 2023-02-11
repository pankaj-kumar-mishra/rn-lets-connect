module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
  },
  plugins: ['react', 'react-native', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['off'],
        'no-shadow': 'off',
        'no-undef': 'off',
        semi: 'off',
        'react-native/no-inline-styles': 1,
      },
    },
  ],
}
