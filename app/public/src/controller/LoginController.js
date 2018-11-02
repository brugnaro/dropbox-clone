class LoginController {

  constructor() {

    this.btnBack = document.querySelector('#btn-back');
    this.btnLogin = document.querySelector('#btn-login');
    this.connectFirebase();
    this.initEvents();

  }

  connectFirebase() {
    var config = {
      apiKey: "AIzaSyBPB5AbtpHyOvP8cm1bc15v4Rx6l1bpMM8",
      authDomain: "dropbox-clone-e5485.firebaseapp.com",
      databaseURL: "https://dropbox-clone-e5485.firebaseio.com",
      projectId: "dropbox-clone-e5485",
      storageBucket: "dropbox-clone-e5485.appspot.com",
      messagingSenderId: "708796556682"
    };
    firebase.initializeApp(config);
  }

  initEvents() {

    this.btnBack.addEventListener('click', e => {
      location.href = '/';
    })

    this.btnLogin.addEventListener('click', e => {

      e.preventDefault();

      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;

      let ref = firebase.database().ref('users');

      ref.orderByChild('password').equalTo(password).on('child_added', snapshot => {

        let passRef = snapshot.key

        ref.orderByChild('email').equalTo(email).on('child_added', snapshot => {

          passRef == snapshot.key ? location.href = '/home' : console.log('not find');

        });

      });

    });

  }

}