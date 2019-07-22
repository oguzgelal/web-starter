export default class AuthCtrl {

  constructor(app, request) {
    this.request = request;
    this.auth = app.auth();
    this.defaultPersistence = app.auth.Auth.Persistence.LOCAL;
  }

  // registers an observer that triggers every time user state changes
  registerAuthStateObserver(callback) {
    this.auth.onAuthStateChanged(callback)
  }

  login({ email, password, onFail }) {
    this.request(() => new Promise((rs, rj) => {
      this.auth.setPersistence(this.defaultPersistence).then(() => {
        this.auth.signInWithEmailAndPassword(email, password)
          .then(rs).catch(rj)
      }).catch(rj)
    }), { id: 'login', onFail });
  }

  logout() {
  }
}
