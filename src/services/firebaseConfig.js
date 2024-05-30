// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHf3twkeH33ZhV1JwXSBEu_vKfQ0OgxeY",
  authDomain: "plugin--chrome.firebaseapp.com",
  projectId: "plugin--chrome",
  storageBucket: "plugin--chrome.appspot.com",
  messagingSenderId: "897702550372",
  appId: "1:897702550372:web:c855419acc27b8bf37b871",
  measurementId: "G-3VVJDTKKTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);