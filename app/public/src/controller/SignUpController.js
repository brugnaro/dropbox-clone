class SignUpController {

  constructor() {

    this.formSignupUser = document.querySelector('#signup-form');
    this.btnBack = document.querySelector('#btn-back');
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

    this.formSignupUser.addEventListener('submit', e => {

      e.preventDefault();

      let formData = new FormData(this.formSignupUser);

      let object = {};

      formData.forEach((value, key) => {

        object[key] = value;

      });

      let json = object;

      let jsonKey = firebase.database().ref().child('users').push().key;

      let updates = {};

      updates[jsonKey] = json;

      return firebase.database().ref('/users').update(updates);

    });

    this.btnBack.addEventListener('click', e => {
      location.href = '/';
    })

  }



}