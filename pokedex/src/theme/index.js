import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});