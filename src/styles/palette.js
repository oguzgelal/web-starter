import { rgba } from 'polished';

export default vars => ({

  palette: {
    primary: vars.val(vars.primary),
    secondary: vars.val(vars.secondary),
    default: vars.val(vars.default),
    info: vars.val(vars.info),
    error: vars.val(vars.error),
    success: vars.val(vars.success),
    warning: vars.val(vars.warning),
    common: {
      white: vars.white,
      black: vars.black,
    },
    grey: {
      '50': vars.lightGrey[4],
      '100': vars.lightGrey[3],
      '200': vars.lightGrey[2],
      '300': vars.lightGrey[1],
      '400': vars.lightGrey[0],
      '500': vars.grey[4],
      '600': vars.grey[3],
      '700': vars.grey[1],
      '800': vars.grey[0],
      '900': vars.darkGrey[4],
      'A100': vars.darkGrey[3],
      'A200': vars.darkGrey[2],
      'A400': vars.darkGrey[1],
      'A700': vars.darkGrey[0],
    },
    background: {
      paper: vars.m(vars.white, vars.black),
      default: vars.m(vars.lightGrey[4], vars.darkGrey[2]),
    },
    text: {
      primary: rgba(vars.m(vars.black, vars.white), 0.87),
      secondary: rgba(vars.m(vars.black, vars.white), 0.54),
      disabled: rgba(vars.m(vars.black, vars.white), 0.38),
      hint: rgba(vars.m(vars.black, vars.white), 0.38),
    },
    action: {
      active: rgba(vars.m(vars.white, vars.black), 0.54),
      hover: rgba(vars.m(vars.white, vars.black), 0.08),
      selected: rgba(vars.m(vars.white, vars.black), 0.14),
      disabled: rgba(vars.m(vars.white, vars.black), 0.26),
      disabledBackground: rgba(vars.m(vars.white, vars.black), 0.12),
    },
    divider: rgba(vars.m(vars.white, vars.black), 0.12),
  }
})
