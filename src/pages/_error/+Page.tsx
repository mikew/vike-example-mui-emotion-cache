import { Typography } from '@mui/material'

import PageContentPaper from '#src/app/PageContentPaper'

export default function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <>
        <PageContentPaper>
          <Typography variant="h1">404 Page Not Found</Typography>
          <Typography>This page could not be found.</Typography>
        </PageContentPaper>
      </>
    )
  } else {
    return (
      <>
        <PageContentPaper>
          <Typography variant="h1">500 Internal Error</Typography>
          <Typography>Something went wrong.</Typography>
        </PageContentPaper>
      </>
    )
  }
}
