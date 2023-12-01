import { hydrateRoot } from 'react-dom/client'
import type { OnRenderClientAsync } from 'vike/types'

import createEmotionCache from './createEmotionCache'
import invariant from './invariant'
import { PageShell } from './PageShell'

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
