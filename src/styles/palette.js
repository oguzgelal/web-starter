import { rgba } from 'polished';

export default vars => ({
  palette: {
    type: vars.mode,
    primary: { main: vars.primary, light: vars.primary, dark: vars.primary },
    secondary: { main: vars.secondary, light: vars.secondary, dark: vars.secondary },
    default: { main: vars.secondary, light: vars.secondary, dark: vars.secondary },
    info: { main: vars.blue, light: vars.blue, dark: vars.blue },
    error: { main: vars.red, light: vars.red, dark: vars.red },
    success: { main: vars.green, light: vars.green, dark: vars.green },
    warning: { main: vars.orange, light: vars.orange, dark: vars.orange },
    common: {
      white: vars.white,
      black: vars.black,
    },
    background: {
      paper: vars.mode === 'dark' ? vars.black : vars.white,
      default: vars.mode === 'dark' ? vars.dark : vars.light,
    },
    text: {
      primary: rgba((vars.mode === 'light' ? vars.black : vars.white), 0.87),
      secondary: rgba((vars.mode === 'light' ? vars.black : vars.white), 0.54),
      disabled: rgba((vars.mode === 'light' ? vars.black : vars.white), 0.38),
      hint: rgba((vars.mode === 'light' ? vars.black : vars.white), 0.38),
    },
    action: {
      active: rgba((vars.mode === 'dark' ? vars.black : vars.white), 0.54),
      hover: rgba((vars.mode === 'dark' ? vars.black : vars.white), 0.08),
      selected: rgba((vars.mode === 'dark' ? vars.black : vars.white), 0.14),
      disabled: rgba((vars.mode === 'dark' ? vars.black : vars.white), 0.26),
      disabledBackground: rgba((vars.mode === 'dark' ? vars.black : vars.white), 0.12),
    },
    divider: rgba((vars.mode === 'dark' ? vars.black : vars.white), 0.12),
  }
})
