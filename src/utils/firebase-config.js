// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAwUoQVp1vFLNLaUM3-pqzaqcGDKN1xCU",
  authDomain: "learn-with-firebase.firebaseapp.com",
  projectId: "learn-with-firebase",
  storageBucket: "learn-with-firebase.appspot.com",
  messagingSenderId: "464801240094",
  appId: "1:464801240094:web:8fb0dbaf062cf96bfd0a0f",
  measurementId: "G-RW0CR0QTX9"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const db=getFirestore(firebaseapp);
export const auth=getAuth(firebaseapp);

