import { Typography } from '@mui/material'

import PageContentPaper from '#src/app/PageContentPaper'

import './code.css'

export default function Page() {
  return (
    <>
      <PageContentPaper>
        <Typography variant="h1">About</Typography>
        <Typography>
          Example of using <code>vike</code>.
        </Typography>
      </PageContentPaper>
    </>
  )
}
