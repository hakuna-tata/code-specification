// git commit -m <type>[optional scope]: <subject>
// 0: disbale 1: warn 2:error
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
      'feat', // 新功能
      'fix', // bug
      'docs', // 文档
      'style', // 样式
      'refactor', // 重构
      'test', // 测试
      'revert', // 回滚
      'chore', // 依赖库、工具等
      ]
    ],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
  }
}
