import clsx from 'clsx'
import { forwardRef } from 'react'

import { usePageContext } from '#src/renderer/PageContext'

export const Link = forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<{ href?: string; className?: string }>
>((props, ref) => {
  const pageContext = usePageContext()
  const className = clsx(props.className, {
    'Mui-selected': pageContext.urlPathname === props.href,
  })

  return (
    <a {...props} className={className} ref={ref}>
      {props.children}
    </a>
  )
})
