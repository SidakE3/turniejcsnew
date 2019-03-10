import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBwODgFZKRXYAVjdKWmXxXKaH84gjHsUuc",
    authDomain: "turniejcspzs3.firebaseapp.com",
    databaseURL: "https://turniejcspzs3.firebaseio.com",
    projectId: "turniejcspzs3",
    storageBucket: "turniejcspzs3.appspot.com",
    messagingSenderId: "849466155266"
  };

  firebase.initializeApp(config);

  export default firebase