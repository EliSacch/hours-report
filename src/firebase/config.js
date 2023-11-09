import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDLLfD63OIbpjCQHzAAQuTTDlRi0MBHmK4",
    authDomain: "hours-report-b8773.firebaseapp.com",
    projectId: "hours-report-b8773",
    storageBucket: "hours-report-b8773.appspot.com",
    messagingSenderId: "387776369946",
    appId: "1:387776369946:web:be1d66de0341ea2f5cc8a3"
  };

  // Init firebase
  firebase.initializeApp(firebaseConfig);

  // Init services
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth()


  export { projectFirestore, projectAuth }