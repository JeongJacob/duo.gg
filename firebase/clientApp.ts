// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzVWs9QI9MVRK7ygQKP-_KkRNy13MQgcM",
  authDomain: "duogg-jacob.firebaseapp.com",
  projectId: "duogg-jacob",
  storageBucket: "duogg-jacob.appspot.com",
  messagingSenderId: "1046875417034",
  appId: "1:1046875417034:web:e9d3171d0735a177338733",
  measurementId: "G-CJK2YQQ29M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
