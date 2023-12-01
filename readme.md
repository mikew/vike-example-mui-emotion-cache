Example of using [vite-plugin-ssr](https://vite-plugin-ssr.com/) with [MUI](https://mui.com/).

```bash
git clone git@github.com:brillout/vps-mui
cd vps-mui/
pnpm install
pnpm run dev
# Or
pnpm run prod
```

It uses [this workaround](https://github.com/brillout/vps-mui/commit/e74f6e809e2ca6ae54bd593178926a405ffce5b3) for [mui/material-ui#37375](https://github.com/mui/material-ui/issues/37375).

See [this conversation](https://github.com/brillout/vite-plugin-ssr/discussions/901) for more information and for alternative workarounds.
