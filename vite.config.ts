import react from '@vitejs/plugin-react'
import aliasHq from 'alias-hq'
import ssr from 'vike/plugin'
import type { UserConfig } from 'vite'

const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/ssr-options.html#ssr-noexternal
const noExternal: string[] = []
if (isProd) {
  noExternal.push(
    ...[
      // MUI needs to be pre-processed by Vite in production: https://github.com/vikejs/vike/discussions/901
      '@mui/base',
      '@mui/icons-material',
      '@mui/material',
      '@mui/utils',
    ],
  )
}

const config: UserConfig = {
  plugins: [
    react(),
    ssr({
      prerender: true,
    }),
  ],
  resolve: {
    alias: {
      ...aliasHq.get('rollup'),
    },
  },
  ssr: {
    noExternal,
  },
}

export default config
