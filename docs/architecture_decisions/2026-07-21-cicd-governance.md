# 2026-07-21 CI/CD Governance Decision

## Decision

This repository uses an owner-gated CI/CD workflow.

- CODEOWNER / gate owner: @nancywrayg57-jpg
- Implementation collaborator: @xtzhou247
- Default branch: main
- Merge strategy: squash merge only
- CI required check: governance-check
- Governance files: Agent.md, .github/CODEOWNERS, .github/workflows/ci.yml, docs/agent/

## Workflow

1. Claude Code operating as @nancywrayg57-jpg creates issues and task prompts.
2. Remote Codex operating as @xtzhou247 creates a Pursuing Goal, implements changes on a feature branch, and opens a PR.
3. GitHub Actions runs CI on PRs.
4. @nancywrayg57-jpg reviews as CODEOWNER.
5. @nancywrayg57-jpg squash merges only after CI and review gates pass.

## Guardrails

- @xtzhou247 must not be a CODEOWNER, admin, maintainer, ruleset bypass actor, or direct main committer.
- main must be protected by PR review, CODEOWNER review, required CI checks, and conversation resolution.
- Branch ruleset must restrict direct updates, deletions, force pushes, and non-linear history.