import get from 'lodash/get';

export default (theme, mode) => path => {
  return (
    get(theme, `palette.${path}['${mode}']`) ||
    get(theme, `palette.${path}.main`) ||
    get(theme, `palette.${path}`)
  );
}
