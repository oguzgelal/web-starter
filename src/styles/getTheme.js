import { createMuiTheme } from '@material-ui/core/styles';

import getColor from '../utils/getColor';

import palette from './palette';
import overrides from './overrides';
import zIndex from './zIndex';

export default (options = {}) => {

  // define variables
  const vars = {

    // settings
    mode: options.mode,

    // mixins
    val: v => ({ main: v, light: v, dark: v }),
    m: function(lightVal, darkVal) {
      return this.mode === 'light' ? lightVal : darkVal;
    },

    // colors
    white: '#FFFFFF',
    black: '#10161A',

    darkGrey: ['#182026', '#202B33', '#293742', '#30404D', '#394B59'],
    grey: ['#5C7080', '#738694', '#8A9BA8', '#A7B6C2', '#BFCCD6'],
    lightGrey: ['#CED9E0', '#D8E1E8', '#E1E8ED', '#EBF1F5', '#F5F8FA'],

    red: ['#A82A2A', '#C23030', '#DB3737', '#F55656', '#FF7373'],
    blue: ['#0E5A8A', '#106BA3', '#137CBD', '#2B95D6', '#48AFF0'],
    green: ['#0A6640', '#0D8050', '#0F9960', '#15B371', '#3DCC91'],
    orange: ['#A66321', '#BF7326', '#D9822B', '#F29D49', '#FFB366'],
    vermilion: ['#9E2B0E', '#B83211', '#D13913', '#EB532D', '#FF6E4A'],
    rose: ['#A82255', '#C22762', '#DB2C6F', '#F5498B', '#FF66A1'],
    violet: ['#5C255C', '#752F75', '#8F398F', '#A854A8', '#C274C2'],
    indigo: ['#5642A6', '#634DBF', '#7157D9', '#9179F2', '#AD99FF'],
    cobalt: ['#1F4B99', '#2458B3', '#2965CC', '#4580E6', '#669EFF'],
    turquoise: ['#008075', '#00998C', '#00B3A4', '#14CCBD', '#2EE6D6'],
    forest: ['#1D7324', '#238C2C', '#29A634', '#43BF4D', '#62D96B'],
    lime: ['#728C23', '#87A629', '#9BBF30', '#B6D94C', '#D1F26D'],
    gold: ['#A67908', '#BF8C0A', '#D99E0B', '#F2B824', '#FFC940'],
    sepia: ['#63411E', '#7D5125', '#96622D', '#B07B46', '#C99765'],

    // variants
    get primary() { return this.m(this.blue[2], this.blue[3]); },
    get secondary() { return this.m(this.gold[1], this.gold[3]); },
    get default() { return this.m(this.lightGrey[1], this.darkGrey[1]); },
    get info() { return this.m(this.blue[4], this.blue[4]); },
    get error() { return this.m(this.red[2], this.red[2]); },
    get success() { return this.m(this.forest[1], this.forest[1]); },
    get warning() { return this.m(this.orange[1], this.orange[1]); },
  }

  // create mui theme
  const theme = createMuiTheme({
    ...palette(vars),
    ...overrides(vars),
    ...zIndex(vars),
  });

  // attach getter method
  theme.m = getColor(theme, vars.mode);

  return theme;
}
