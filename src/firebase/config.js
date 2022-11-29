// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUZRxYaq3XCPz7vsBQTL5H-V272HvwbV4",
  authDomain: "mymoney-4f312.firebaseapp.com",
  projectId: "mymoney-4f312",
  storageBucket: "mymoney-4f312.appspot.com",
  messagingSenderId: "928235543242",
  appId: "1:928235543242:web:f21a1d46a217738380b233"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp }