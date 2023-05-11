import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAFmuaGygui0JGjD9Z6c2NlLP_DFzMUmnw",
  authDomain: "react-contact-8b4aa.firebaseapp.com",
  projectId: "react-contact-8b4aa",
  storageBucket: "react-contact-8b4aa.appspot.com",
  messagingSenderId: "568465937685",
  appId: "1:568465937685:web:d246af81dfe64973dd851c"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();