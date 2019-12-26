import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFhNiWC1U5hiG8fHXRU3Xa0hYCLRhDTro",
    authDomain: "lab-burguer-queen.firebaseapp.com",
    databaseURL: "https://lab-burguer-queen.firebaseio.com",
    projectId: "lab-burguer-queen",
    storageBucket: "lab-burguer-queen.appspot.com",
    messagingSenderId: "109448070284",
    appId: "1:109448070284:web:494354e267034a5dfa27a9"
  };
  
  export const firebaseImpl = firebase.initializeApp(firebaseConfig);
  firebase.firestore().enablePersistence()
  .then(res => {
    // console.log(res)
  })
  .catch(function(err) {
      if (err.code === 'failed-precondition') {
        
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });


export const db = firebase.firestore();
export const auth = firebase.auth();