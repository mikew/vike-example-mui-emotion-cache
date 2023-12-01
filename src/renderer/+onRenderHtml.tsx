// See https://vite-plugin-ssr.com/data-fetching
import createEmotionServer from '@emotion/server/create-instance'
import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import type { OnRenderHtmlAsync } from 'vike/types'

import createEmotionCache from './createEmotionCache'
import invariant from './invariant'
import logoUrl from './logo.svg'
import { PageShell } from './PageShell'

const onRenderHtml: OnRenderHtmlAsync = async (pageContext) => {
  const { Page, pageProps } = pageContext
  invariant(Page, 'onRenderHtml() hook expects pageContext.Page to be defined')

  const emotionCache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(emotionCache)

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext} emotionCache={emotionCache}>
      <Page {...pageProps} />
    </PageShell>,
  )

  const chunks = extractCriticalToChunks(pageHtml)
  const styles = constructStyleTagsFromChunks(chunks)

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = documentProps?.title || 'Vite SSR app'
  const desc = documentProps?.description || 'App using Vite + vike'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <meta name="emotion-insertion-point" content="" />
        ${dangerouslySkipEscape(styles)}
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}

export default onRenderHtml
