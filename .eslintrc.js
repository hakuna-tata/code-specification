// npx eslint --init 初始化 .eslintrc.js 配置文件
module.exports = {
  root: true,
  // 共享配置
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [
    'react',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: '',
  rules: {
  },
  globals: {
    window: 'readonly',
    define: 'readonly', // seajs keywords
    mqq: 'writable'
  },
};
