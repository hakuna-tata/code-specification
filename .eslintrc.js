// npx eslint --init 初始化 .eslintrc.js 配置文件
module.exports = {
  root: true,
  // eslint-config-[confignname]
  // 共享配置对象
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // eslint-plugin-[pluginname]
  // 插件加载了一些定制化的 eslint 规则能力，开启规则还是需要通过 rules
  plugins: ["react", "prettier"],
  parserOptions: {
    parser: '',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  // 0: "off" 关闭规则
  // 1: "warn" 开启规则,使用警告
  // 2: "error" 开启规则，使用错误
  rules: {
    "no-console": 1,
    "key-spacing": [1, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
    "no-alert": 2,
    "no-var": 2,
    eqeqeq: 2, // 必须全等
    curly: [2, "all"], // 必须使用 if(){} 中的{}
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,

    // prettier
    "prettier/prettier": 2,

    // React & JSX
    "react/jsx-boolean-value": [2, "always"],
  },
  globals: {
    window: "readonly",
    define: "readonly", // seajs keywords
    mqq: "writable",
  },
};
