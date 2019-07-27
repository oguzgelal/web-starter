import typography from './typography';

export default vars => ({
  overrides: {
    ...typography(vars),
  }
})
