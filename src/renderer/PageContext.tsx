import { createContext, useContext } from 'react'

import invariant from './invariant'

declare global {
  namespace Vike {
    interface PageContext {
      Page: Page
      pageProps?: PageProps
      urlPathname: string
      exports: {
        documentProps?: {
          title?: string
          description?: string
        }
      }
    }
  }
}

type PageProps = Record<string, unknown>
type Page = React.ComponentType<PageProps>

const pageContext = createContext<Vike.PageContext | undefined>(undefined)

export const PageContextProvider: React.FC<
  React.PropsWithChildren<{ value: Vike.PageContext }>
> = ({ value, children }) => {
  return <pageContext.Provider value={value}>{children}</pageContext.Provider>
}

// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere
export function usePageContext() {
  const value = useContext(pageContext)
  invariant(value, 'Cannot access pageContext outside of PageContextProvider')

  return value
}
