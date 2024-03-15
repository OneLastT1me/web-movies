import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
    interface CommonColors {
        grey: string,
        lightgrey: string,
        darkgrey: string
        black: string,
    }
  }

export const theme = createTheme({
    palette: {
        common:{
            grey: '#D3CBC5',
            darkgrey: '#B3A59B',
            lightgrey: '#E5E6E6',
            black: '#1B1A1A',
        }
    },
    typography: {
        fontFamily: 'Nunito Sans',
        body1: {
            fontSize: '18px',
            fontWeight: 500,
        },
        body2: {
            fontSize: '16px',
            fontWeight: 800,
        },
        h6:{
            fontSize: '14px',
            fontWeight: 400,
        }
    },
    breakpoints: {
        values: {
          xs: 600,
          sm: 800,
          md: 1045,
          lg: 1420,
          xl: 1920,
        },
      },

})