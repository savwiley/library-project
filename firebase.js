import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcPq3J_Yeex39izUWyerDoNRPan9XWwJw",
  authDomain: "library-79cdb.firebaseapp.com",
  projectId: "library-79cdb",
  storageBucket: "library-79cdb.appspot.com",
  messagingSenderId: "603775734043",
  appId: "1:603775734043:web:47b551a4110cb35f2143be",
  measurementId: "G-CGHSMSDCVY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;