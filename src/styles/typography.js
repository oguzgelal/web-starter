export default vars => ({
  MuiTypography: {
    root: {
      color: (vars.mode === 'light') ?
        vars.textDark :
        vars.textLight
    }
  }
})
