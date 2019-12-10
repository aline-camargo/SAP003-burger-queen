import firebase from 'firebase';
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
export const db = firebase.firestore();