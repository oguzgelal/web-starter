import { createMuiTheme } from '@material-ui/core/styles';
import { rgba } from 'polished';

import getColor from '../utils/getColor';

import palette from './palette';
import overrides from './overrides';

export default (options = {}) => {

  // define variables
  const vars = {

    // settings
    mode: options.mode,

    // colors
    red: '#DB3737',
    blue: '#1e72bd',
    green: '#15B371',
    orange: '#D9822B',
    white: '#fff',
    black: '#000',
    light: '#fafafa',
    dark: '#1b212b',

    /*
    get textPrimary() {
      return this.mode === 'light' ?
        rgba(this.black, 0.87) :
        rgba(this.white, 0.87)
    },
    get textSecondary() {
      return this.mode === 'light' ?
        rgba(this.black, 0.54) :
        rgba(this.white, 0.54)
    }
    */

    // variants
    get primary() { return this.blue; },
    get secondary() { return this.mode === 'light' ? this.dark : this.light; },
    get default() { return this.dark; },
    get info() { return this.blue; },
    get error() { return this.red; },
    get success() { return this.green; },
    get warning() { return this.orange; },
  }

  // create mui theme
  const theme = createMuiTheme({
    ...palette(vars),
    ...overrides(vars),
  });

  // attach getter method
  theme.c = getColor(theme, vars.mode);

  return theme;
}
