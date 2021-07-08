import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBeG97Gfn7efzCDsOI0TE1410-riiIPzxc",
    authDomain: "studentattendance-cbe3c.firebaseapp.com",
    projectId: "studentattendance-cbe3c",
    storageBucket: "studentattendance-cbe3c.appspot.com",
    messagingSenderId: "803658441148",
    appId: "1:803658441148:web:3a5b251317221b23280bb9"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
