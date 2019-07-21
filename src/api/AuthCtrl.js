export default class AuthCtrl {

  constructor(app) {
    this.auth = app.auth();
    this.defaultPersistence = app.auth.Auth.Persistence.LOCAL;
  }

  // registers an observer that triggers every time user state changes
  registerAuthStateObserver(callback) {
    this.auth.onAuthStateChanged(callback)
  }

  login({ email, password, onFail }) {
    this.auth.setPersistence(this.defaultPersistence).then(() => {
      this.auth.signInWithEmailAndPassword(email, password).catch(onFail)
    }).catch(onFail)

  }

  logout() {

  }
}
