import { createMuiTheme } from '@material-ui/core/styles';
import getColor from '../utils/getColor';

const blue = '#1e72bd';
const red = '#DB3737';
const green = '#15B371';
const orange = '#D9822B';

const primary = '#1e72bd';
const secondary = '#1b212b';

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
    default: { main: secondary },
    info: { main: blue },
    error: { main: red },
    success: { main: green },
    warning: { main: orange },
    bg: {
      paper: { light: '#fff', dark: '#000' },
      default: { light: '#fafafa', dark: '#1b212b' }
    }
  }
});

theme.c = getColor(theme, 'dark');

console.log(theme);
export default theme;
