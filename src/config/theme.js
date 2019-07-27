import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1e72bd' },
    secondary: { main: '#1b212b' },
    error: { main: '#DB3737' },
    success: { main: '#15B371' },
    warning: { main: '#D9822B' },

    bgPaper: { main: '#fff' },
    bg: {
      dark: '#000',
      light: '#fff',
    },

  }
});

console.log('theme', theme);

export default theme;
