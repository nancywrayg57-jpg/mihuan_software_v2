# Issue #90 Visual Report

## Assertion Flip

Removed authorized-value bans from HTML validation only:

- `zennolabchina`
- `48151650`
- `marketing@honeybadgersoft.com`

Kept forbidden checks:

- `dingtalk` / `钉钉`
- copyright year values
- ICP number values
- robots.txt contact-channel checks
- all product/detail/SEO/navigation checks outside Issue #90 scope

## Positive Assertions

Added shared footer assertions for all 39 built HTML pages:

- footer contact title is localized as `联系方式` / `Contacts` / `Контакты`
- footer contact section contains the configured email, WeChat and QQ values
- footer contact section contains no pending contact placeholders
- footer external section contains exactly one ali-exmail link
- ali-exmail link uses `target="_blank"` and `rel="noopener noreferrer"`
- footer compliance placeholder remains present

## Visual Artifacts

| Artifact | Viewport | Target |
|---|---:|---|
| `zh-footer-desktop-1440x900.png` | 1440x900 | zh home footer |
| `en-footer-desktop-1440x900.png` | 1440x900 | en home footer |
| `ru-footer-desktop-1440x900.png` | 1440x900 | ru home footer |
| `zh-about-contact-desktop-1440x900.png` | 1440x900 | zh about contact section |
| `zh-home-footer-mobile-390x844.png` | 390x844 | zh home footer |
| `playwright-evidence.json` | mixed | Playwright text assertions |

## E2E Feedback Table

| Check | Result |
|---|---|
| zh footer contains email, WeChat, QQ and ali-exmail portal | PASS |
| en footer contains email, WeChat, QQ and ali-exmail portal | PASS |
| ru footer contains email, WeChat, QQ and ali-exmail portal | PASS |
| zh about contact section contains email, WeChat and QQ | PASS |
| zh mobile footer contains email, WeChat, QQ and ali-exmail portal | PASS |
| footer contact sections omit pending contact placeholders | PASS |
