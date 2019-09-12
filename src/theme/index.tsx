import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#c158dc',
      main: '#8e24aa',
      dark: '#5c007a',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});
