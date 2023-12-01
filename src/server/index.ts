// Note that this file isn't processed by Vite, see https://github.com/vikejs/vike/issues/562

import compression from 'compression'
import express from 'express'
import { renderPage } from 'vike/server'

import { root } from './root.js'
const isProduction = process.env.NODE_ENV === 'production'

Error.stackTraceLimit = Infinity

startServer()

async function startServer() {
  const app = express()

  app.use(compression())

  if (isProduction) {
    const sirv = (await import('sirv')).default
    app.use(sirv(`${root}/dist/client`))
  } else {
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }

  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) return next()
    const { body, statusCode, earlyHints, headers } = httpResponse
    if (res.writeEarlyHints)
      res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
    headers.forEach(([name, value]) => res.setHeader(name, value))
    res.status(statusCode).send(body)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.info(`Server running at http://localhost:${port}`)
}
