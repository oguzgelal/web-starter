import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/styles';

import Base from './components/Base';

import store from './redux/store';
import theme from './config/theme';

const app = (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <>
          <CssBaseline />
          <Base />
        </>
      </Provider>
    </ThemeProvider>
  </StylesProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
