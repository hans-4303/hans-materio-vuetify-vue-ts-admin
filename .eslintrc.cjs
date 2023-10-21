module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-essential', 'prettier'],
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
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.mjs'],
      },
      alias: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.mjs'],
        map: [
          ['@', './src'],
          ['@core', './src/core'],
          ['@layouts', './src/layouts'],
          ['@configured-variables', './src/styles/variables/_template.scss'],
          ['@axios', './src/plugins/axios'],
          ['apexcharts', 'node_modules/apexcharts-clevision'],
        ],
      },
    },
  },
}
