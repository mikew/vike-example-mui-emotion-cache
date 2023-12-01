import Menu from '@mui/icons-material/Menu'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'

import PageContentPaper from '../../renderer/PageContentPaper'

import { Counter } from './Counter'

export default function Page() {
  return (
    <>
      <PageContentPaper>
        <Typography variant="h1">Welcome</Typography>

        <Typography component="div">
          This page is:
          <ul>
            <li>Rendered to HTML.</li>
            <li>
              Interactive. <Counter />
            </li>
          </ul>
          <div>
            Menu: <Menu />
          </div>
          <div>
            Button: <Button>Some button</Button>
          </div>
          <div className="mui-overrides">
            Button with styles applied from mui-overrides.css:{' '}
            <Button>Overridden button</Button>
          </div>
        </Typography>
      </PageContentPaper>
    </>
  )
}
