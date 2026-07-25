# Issue #80 Browser Validation

Validated at: `2026-07-25T23:29:50.9864381+08:00`

Local build served from `site/dist` at `http://127.0.0.1:4173`.

## Commands

```powershell
npm run clean
npm run build
npm run check
npx --yes --package playwright playwright screenshot --channel chrome --full-page --viewport-size=1440,900 http://127.0.0.1:4173/dynamic-ip.html docs/review-artifacts/issue-80/dynamic-ip-zh-desktop.png
npx --yes --package playwright playwright screenshot --channel chrome --full-page --viewport-size=1440,900 http://127.0.0.1:4173/en/dynamic-ip.html docs/review-artifacts/issue-80/dynamic-ip-en-desktop.png
npx --yes --package playwright playwright screenshot --channel chrome --full-page --viewport-size=1440,900 http://127.0.0.1:4173/ru/dynamic-ip.html docs/review-artifacts/issue-80/dynamic-ip-ru-desktop.png
npx --yes --package playwright playwright screenshot --channel chrome --full-page --viewport-size=1440,900 http://127.0.0.1:4173/跨境网络服务.html docs/review-artifacts/issue-80/network-services-zh-desktop.png
npx --yes --package playwright playwright screenshot --channel chrome --full-page --viewport-size=390,844 http://127.0.0.1:4173/dynamic-ip.html docs/review-artifacts/issue-80/dynamic-ip-zh-mobile.png
```

## Checklist

| Check | Result | Evidence |
| --- | --- | --- |
| Chinese Dynamic IP detail page renders as a full static page | Pass | `dynamic-ip-zh-desktop.png`, `dynamic-ip-zh-mobile.png` |
| English Dynamic IP detail page renders localized content | Pass | `dynamic-ip-en-desktop.png` |
| Russian Dynamic IP detail page handles longer text without visible overlap | Pass | `dynamic-ip-ru-desktop.png` |
| Dynamic IP hero uses the DIP SVG background without a white translucent block over the SVG | Pass | `dynamic-ip-zh-desktop.png`, `dynamic-ip-zh-mobile.png` |
| Merged Chinese network-services page exposes Static IP, IDC IP and Dynamic IP detail links | Pass | `network-services-zh-desktop.png` |
| Mobile layout has no observed horizontal overflow or CTA/card overlap at 390px width | Pass | `dynamic-ip-zh-mobile.png` |

## Artifacts

- `dynamic-ip-zh-desktop.png` - 1440x3473
- `dynamic-ip-en-desktop.png` - 1440x3705
- `dynamic-ip-ru-desktop.png` - 1440x3709
- `network-services-zh-desktop.png` - 1440x5330
- `dynamic-ip-zh-mobile.png` - 390x5952
- `browser-validation.json`
