import type { EmotionCache } from '@emotion/react'
import { CacheProvider } from '@emotion/react'
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  ThemeProvider,
} from '@mui/material'
import { StrictMode } from 'react'

import { Link } from './Link'
import logo from './logo.svg'
import theme from './theme'

import { PageContextProvider } from '#src/renderer/PageContext'

import './mui-overrides.css'

export function PageShell({
  children,
  pageContext,
  emotionCache,
}: {
  children: React.ReactNode
  pageContext: Vike.PageContext
  emotionCache: EmotionCache
}) {
  return (
    <StrictMode>
      <CacheProvider value={emotionCache}>
        <PageContextProvider value={pageContext}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Stack
                direction="row"
                spacing={2}
                divider={<Divider flexItem orientation="vertical" />}
                flexGrow={1}
              >
                <Sidebar />

                <Box paddingY={2} flexGrow={1}>
                  {children}
                </Box>
              </Stack>
            </Layout>
          </ThemeProvider>
        </PageContextProvider>
      </CacheProvider>
    </StrictMode>
  )
}

function Layout({ children }: React.PropsWithChildren) {
  return (
    <Box minHeight="100vh" display="flex">
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

function Sidebar() {
  return (
    <Box paddingY={2} display="flex" flex="0 0 200px">
      <Paper sx={{ flexGrow: 1 }}>
        <Box padding={2}>
          <a href="/">
            <img src={logo} width="100%" alt="logo" />
          </a>
        </Box>

        <List disablePadding>
          <ListItemButton component={Link} href="/" divider>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} href="/about">
            <ListItemText primary="About" />
          </ListItemButton>
        </List>
      </Paper>
    </Box>
  )
}
