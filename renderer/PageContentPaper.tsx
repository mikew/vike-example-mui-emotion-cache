import { Paper } from '@mui/material'

const PageContentPaper: React.FC<React.PropsWithChildren> = (props) => {
  return <Paper sx={{ padding: 4 }}>{props.children}</Paper>
}

export default PageContentPaper
