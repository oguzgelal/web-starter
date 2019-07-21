export default class AuthCtrl {

  constructor(app) {
    this.auth = app.auth();
  }

  // registers an observer that triggers every time user state changes
  registerAuthStateObserver(callback) {
    this.auth.onAuthStateChanged(callback)
  }

  login({ email, password, onFail }) {
    const defaultPersistence = this.auth.Auth.Persistence.LOCAL;
    this.auth.setPersistence(defaultPersistence).then(() => {
      this.auth.signInWithEmailAndPassword(email, password).catch(onFail)  
    }).catch(onFail)

  }

  logout() {

  }
}
