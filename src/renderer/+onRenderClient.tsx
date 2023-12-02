import { hydrateRoot } from 'react-dom/client'
import type { OnRenderClientAsync } from 'vike/types'

import { PageShell } from '#src/app/PageShell'
import invariant from '#src/lib/invariant'
import createEmotionCache from '#src/mui/createEmotionCache'

const onRenderClient: OnRenderClientAsync = async (pageContext) => {
  const { Page, pageProps } = pageContext
  invariant(
    Page,
    'onRenderClient() hook expects pageContext.Page to be defined',
  )

  const root = document.getElementById('react-root')
  invariant(root, '#react-root not found')

  const emotionCache = createEmotionCache()

  hydrateRoot(
    root,
    <PageShell pageContext={pageContext} emotionCache={emotionCache}>
      <Page {...pageProps} />
    </PageShell>,
  )
}

export default onRenderClient
