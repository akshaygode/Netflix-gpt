// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUPNZR9RiUh3_tUWHIn-3jqiHhU0WscLY",
  authDomain: "netflixgpt-68882.firebaseapp.com",
  projectId: "netflixgpt-68882",
  storageBucket: "netflixgpt-68882.appspot.com",
  messagingSenderId: "191886896977",
  appId: "1:191886896977:web:d4dc66f38e01386692ad70",
  measurementId: "G-V9XBB37VST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);