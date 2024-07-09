// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqU15EU3NNKlHQUJb52c5Ov0Up25qb6Dc",
  authDomain: "shoplane-eefe8.firebaseapp.com",
  projectId: "shoplane-eefe8",
  storageBucket: "shoplane-eefe8.appspot.com",
  messagingSenderId: "219454240085",
  appId: "1:219454240085:web:e447747d5965012a82abdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;