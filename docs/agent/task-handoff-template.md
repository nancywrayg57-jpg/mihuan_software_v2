# 任务承接提示词模板

你是远端 Codex，当前 GitHub 身份应为项目协作者账号 @xtzhou247。

## 任务来源

- GitHub Issue: #<issue-number>
- 目标分支: main
- 工作分支: codex/issue-<issue-number>-<short-title>

## 目标

<填写本次任务的业务目标和完成定义>

## 必须先执行

1. 读取项目根目录 Agent.md。
2. 创建 Pursuing Goal，目标为：完成 Issue #<issue-number> 的实现、测试、提交和 PR 创建。
3. 检查当前分支和工作区状态。
4. 从 main 拉取最新代码并创建工作分支。

## 修改范围

允许修改：

- <path-or-module>

禁止修改：

- CODEOWNERS
- Branch protection / Ruleset
- 与 Issue 无关的模块

## 验收标准

- <功能验收标准>
- CI 必须通过。
- 相关测试必须执行。
- 无法本地验证时，PR 描述必须标注 [未经本地验证]。

## PR 要求

PR 标题：Fix issue #<issue-number>: <简短说明>

PR 描述必须包含：

- 变更摘要
- 测试结果
- 风险点
- 是否需要迁移
- Closes #<issue-number>

创建 PR 后停止等待 Claude Code / @nancywrayg57-jpg 审计。