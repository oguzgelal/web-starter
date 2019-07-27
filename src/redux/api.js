import app from 'firebase/app';
import 'firebase/auth';
import store from './store';
import { requestActions } from './modules/requests';

class Api {

  getConfig() {
    return {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
    }
  }

  // wrap request within dispatch
  request(...args) {
    store.dispatch(
      requestActions.request(...args)
    )
  }

  // wrap cancel within dispatch
  cancel(...args) {
    store.dispatch(
      requestActions.cancel(...args)
    )
  }

  init() {

    // initialize the app
    app.initializeApp(this.getConfig());

    // initialize auth
    this.auth = app.auth();
    this.authPersistence = app.auth.Auth.Persistence.LOCAL;

    // set api on window for easy debug
    if (process.env.NODE_ENV !== 'production') {
      window.api = this;
    }
  }
}

export default new Api();
