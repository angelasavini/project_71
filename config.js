import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {

    apiKey: "AIzaSyCf4g8U7AhuoHKQHhHn3YlrUQvegpe54qk",
  
    authDomain: "projecy-70.firebaseapp.com",
  
    projectId: "projecy-70",
  
    storageBucket: "projecy-70.appspot.com",
  
    messagingSenderId: "894744585192",
  
    appId: "1:894744585192:web:3b6b5f441673546d61ba5d"
  
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
