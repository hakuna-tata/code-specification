# 代码规范化
> 前端项目快速规范化模板

**1. editorconfig**
  - 偏向于代码风格，有助于维护跨多个编辑器和IDE的同一项目;安装 EditorConfig for VS Code 插件

**2. eslint**
  - 更注重代码质量规则的校验;安装 ESLint 插件

**3. prettier**
  - 更注重代码格式规则的校验;安装 Prettier - Code formatter 插件

**4. husky**
  - 1.借助husky（哈士奇）增强 **pre-commit** 和 **commit-msg** 这两个 Git Hook
  - 2.项目如果越来越大，**pre-commit** 时 ESLint 校验的时间可能越来越长，因此可以借助 **lint-staged** 工具（听这个工具的名字就能够猜测 lint 的是已经放入 Git Stage 暂存区中的代码）减少代码的检测量。
  - 3.借助 **@commitlint/{cli, config-conventional}** 工具在 **commit-msg** 时规范 git commit message