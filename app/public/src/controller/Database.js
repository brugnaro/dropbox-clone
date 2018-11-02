class Database {

  static connect() {
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

}

