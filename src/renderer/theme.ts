import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    background: {
      default: grey[200],
    },
  },

  typography: {
    h1: {
      fontSize: '250%',
    },
    h2: {
      fontSize: '200%',
    },
    h3: {
      fontSize: '175%',
    },
    h4: {
      fontSize: '150%',
    },
    h5: {
      fontSize: '125%',
    },
    h6: {
      fontSize: '100%',
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})

export default theme
