# ADR: Site Static Build Baseline

Date: 2026-07-23

## Background

The repository contains static UI prototypes, brand assets, and project requirements. Stage S0 needs a production website workspace that can be built and checked by CI before individual pages are productionized.

The first production target is static Nginx hosting. The production website workspace is expected to live under `site/`, and the generated deployable output is expected under `site/dist/`.

## Decision

The initial production website baseline will remain a static site build:

- `site/src/` is the source directory for production static files.
- `site/dist/` is generated build output.
- `site/scripts/` contains zero-dependency Node.js scripts for `clean`, `build`, and `check`.
- `UI/` remains a read-only visual and content reference for later implementation work. It is not copied into, imported by, or otherwise used as an input to the S0 production build.
- CI gets a dedicated `site-build` job that installs the `site/` workspace and runs `build` and `check` without changing the existing governance assertions.

## Reasons

This baseline keeps the first production artifact small, auditable, and compatible with static Nginx deployment. A zero-dependency build avoids introducing a framework before page productionization requirements justify one.

Separating `site/src` from `UI/` prevents prototype-only markup, placeholder data, example contacts, external image references, or unapproved assets from entering the deployable output by accident.

Keeping the site job independent from `governance-check` preserves the existing repository governance gate while adding a focused build gate for future website work.

## Impact

Future page implementation should happen inside `site/src/` and continue to treat `site/dist/` as generated output. Any future framework adoption should update this ADR or add a superseding ADR with the migration reason, build contract, CI impact, and deployment impact.

The current scaffold page is only a build verification artifact. It is not official website content and must be replaced by productionized multilingual pages in later issues.
