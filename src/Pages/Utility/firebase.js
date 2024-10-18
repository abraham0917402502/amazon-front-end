// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGl_29tBOrblZFSSFZ7lEeKA8Aj0l9d3Q",
  authDomain: "clone-e4c12.firebaseapp.com",
  projectId: "clone-e4c12",
  storageBucket: "clone-e4c12.appspot.com",
  messagingSenderId: "781463804781",
  appId: "1:781463804781:web:594e957881933f92821864",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
