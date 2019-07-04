import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCaACTAvKcBNMV82yyL78nlLvJplfLF8Cc",
    authDomain: "turniejdemo.firebaseapp.com",
    databaseURL: "https://turniejdemo.firebaseio.com",
    projectId: "turniejdemo",
    storageBucket: "turniejdemo.appspot.com",
    messagingSenderId: "859713377290",
  };

  firebase.initializeApp(config);

  export default firebase