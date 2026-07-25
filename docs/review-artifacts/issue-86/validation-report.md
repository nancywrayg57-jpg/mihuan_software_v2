# Issue #86 Validation Report

## Scope

- Updated `site/src/robots.txt` to the temporary noindex policy:

```txt
User-agent: *
Disallow: /
```

- Updated only the robots assertion block in `site/scripts/check.mjs`:
  - requires an independent `Disallow: /` line
  - rejects `Allow:` directives
  - rejects `Sitemap:` directives
  - leaves sitemap.xml canonical assertions unchanged

## Commands

The local PowerShell session did not include Node.js on `PATH`, so the successful validation commands used an explicit one-command PATH prefix for `C:\Program Files\nodejs`.

```powershell
cd site
$env:PATH='C:\Program Files\nodejs;' + $env:PATH; & 'C:\Program Files\nodejs\npm.cmd' run build
$env:PATH='C:\Program Files\nodejs;' + $env:PATH; & 'C:\Program Files\nodejs\npm.cmd' run check
$env:PATH='C:\Program Files\nodejs;' + $env:PATH; & 'C:\Program Files\nodejs\npm.cmd' run clean
$env:PATH='C:\Program Files\nodejs;' + $env:PATH; & 'C:\Program Files\nodejs\npm.cmd' run build
```

## Results

```text
npm run build
Built static site: D:\workspace\mihuan_software_v2\site\src -> D:\workspace\mihuan_software_v2\site\dist

npm run check
Checked 39 required static HTML page(s).
Build output contains 59 file(s), 868877 byte(s).
Checked sitemap.xml with 30 canonical loc entry(s).
Checked robots.txt noindex directive without Allow or Sitemap directives.

npm run clean
Removed D:\workspace\mihuan_software_v2\site\dist

npm run build
Built static site: D:\workspace\mihuan_software_v2\site\src -> D:\workspace\mihuan_software_v2\site\dist
```

## Additional Checks

```text
site/dist/robots.txt
User-agent: *
Disallow: /

rg -n "Allow:|Sitemap:" site/dist/robots.txt
No matches.

git diff --check
No output.
```
