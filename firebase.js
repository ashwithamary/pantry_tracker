// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRUxDBuyd3bVizZ34Owrxvo4mq4IAp8EE",
    authDomain: "pantry-tracker123.firebaseapp.com",
    projectId: "pantry-tracker123",
    storageBucket: "pantry-tracker123.appspot.com",
    messagingSenderId: "652470876890",
    appId: "1:652470876890:web:54eb3684de9211dc1583e3",
    measurementId: "G-6WL3J4968B"
  };

// Initialize Firebase
let app;
let firestore;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  firestore = getFirestore(app);
}

export { firestore };