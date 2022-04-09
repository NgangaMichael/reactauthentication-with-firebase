// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  // sign in to fire base and plave your api key here 
  apiKey: "",
  authDomain: "authentication-firebase-c0200.firebaseapp.com",
  projectId: "authentication-firebase-c0200",
  storageBucket: "authentication-firebase-c0200.appspot.com",
  messagingSenderId: "333063757987",
  appId: "1:333063757987:web:c61e1d756d51558bf99f16",
  measurementId: "G-V13DS7VYYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);