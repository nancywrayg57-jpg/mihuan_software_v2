# Honey Badger Site Scaffold

This directory is the production website workspace for the Honey Badger corporate site.

## Directory Layout

- `src/`: static source files for the production site.
- `scripts/`: zero-dependency Node.js build and validation scripts.
- `dist/`: generated build output. This directory is recreated by `npm run build`.

The `UI/` directory at the repository root is a static prototype reference only. It is not an input to this build.

## Commands

Run commands from this `site/` directory.

```bash
npm install
npm run build
npm run check
npm run clean
```

`npm run build` removes the previous `dist/` directory and copies `src/` into `dist/` using Node's cross-platform path APIs. `npm run check` verifies that `dist/index.html` exists, is non-empty, and has a basic valid HTML document shape.

## Output

The deployable static artifact is `site/dist/`.
