// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6gI-TCW9YCgfR4Z3FoMOi6wM7jkau2Lk",
  authDomain: "netflix-gpt-7802e.firebaseapp.com",
  projectId: "netflix-gpt-7802e",
  storageBucket: "netflix-gpt-7802e.appspot.com",
  messagingSenderId: "1017613804133",
  appId: "1:1017613804133:web:a772837b375ee83f5f9c8c",
  measurementId: "G-EZW627N04M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();