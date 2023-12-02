# vike-example-mui-emotion-cache

Example of using [vike](https://github.com/vikejs/vike) with [MUI](https://mui.com/).

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_Small.svg)](https://stackblitz.com/~/github.com/mikew/vike-example-mui-emotion-cache)

## Getting Started

```bash
git clone https://github.com/mikew/vike-example-mui-emotion-cache

cd vike-example-mui-emotion-cache/
pnpm install

pnpm run dev
# Or
pnpm run prod
```

## Notes

This was adapted from https://github.com/brillout/vps-mui.

While Emotion (the CSS-in-JS solution that MUI uses) works out-of-the-box with
SSR, [it does have a caveat](https://emotion.sh/docs/ssr#advanced-approach).

This repo adds the Emotion cache portion. After some discussion, [we decided to
keep this as a separate
example](https://github.com/brillout/vps-mui/pull/1#issuecomment-1834311851).
