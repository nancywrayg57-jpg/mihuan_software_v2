# Honey Badger Static Site Deploy Runbook

This runbook covers the administrator-confirmed S5 manual HTTP-first deployment flow.

## Local Build And Package

Run from the repository root:

```powershell
cd site
npm ci
npm run package
```

`npm run package` runs `build` and `check`, then writes:

```text
site/release/honeybadger-dist-<git-short-sha>.tar.gz
```

The archive name uses the current Git short SHA and must not use a timestamp.

## Upload With FinalShell

1. Open the production server session in FinalShell.
2. Upload `site/release/honeybadger-dist-<git-short-sha>.tar.gz` to a temporary upload directory controlled through the private operations channel.
3. Do not commit or paste server IP addresses, usernames, passwords, private keys, or credential file paths into this repository.

## Server Release Layout

Target layout:

```text
/var/www/honeybadger/
  releases/
    <git-short-sha>/
  current -> /var/www/honeybadger/releases/<git-short-sha>
```

Example server-side commands, with `<git-short-sha>` replaced by the archive SHA:

```bash
sudo mkdir -p /var/www/honeybadger/releases/<git-short-sha>
sudo tar -xzf honeybadger-dist-<git-short-sha>.tar.gz -C /var/www/honeybadger/releases/<git-short-sha>
sudo ln -sfn /var/www/honeybadger/releases/<git-short-sha> /var/www/honeybadger/current
```

Nginx should serve:

```text
/var/www/honeybadger/current
```

## Rollback

Keep the previous release directory under `/var/www/honeybadger/releases/`.

To roll back, switch the symlink back to the previous release:

```bash
sudo ln -sfn /var/www/honeybadger/releases/<previous-git-short-sha> /var/www/honeybadger/current
```

Then rerun the smoke checklist below.

## HTTP-First Notes

- This S5 flow deploys HTTP first.
- HTTPS certificates and HTTP to HTTPS redirect are handled later by certbot and Nginx configuration.
- `canonical`, `hreflang`, `robots.txt`, and `sitemap.xml` intentionally keep `https://www.honeybadgersoft.com/` URLs during the HTTP transition. No source change is needed when certbot is later enabled.
- Contact values, ICP, copyright, and legal entity placeholders remain unchanged until administrators provide confirmed production values.

## Smoke Checklist

Run these checks after switching `current`:

1. Home page returns HTTP 200.
2. zh, en, and ru language entry pages are mutually reachable.
3. Six core page classes are reachable: home, products, cross-border network services, news, careers, and about.
4. `/favicon.svg` loads with `image/svg+xml` content.
5. `/robots.txt` loads and points to `https://www.honeybadgersoft.com/sitemap.xml`.
6. `/sitemap.xml` loads and contains the expected canonical entries.
7. A nonexistent path returns the configured 404 page.

## Verification Evidence

For each manual deployment, record:

- Git short SHA.
- Archive filename.
- Upload destination handled through private operations channel.
- Release directory.
- `current` symlink target before and after deployment.
- Smoke checklist result.
- Rollback target.
