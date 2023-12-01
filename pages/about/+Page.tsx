import { Typography } from '@mui/material'

import './code.css'
import PageContentPaper from '../../renderer/PageContentPaper'

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
