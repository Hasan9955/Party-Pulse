// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt0kKZcyDHXxUKlPV2DpXAETBI-x9zLpA",
  authDomain: "manage-social-events.firebaseapp.com",
  projectId: "manage-social-events",
  storageBucket: "manage-social-events.appspot.com",
  messagingSenderId: "426743972995",
  appId: "1:426743972995:web:9440352156c78e7fd407b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;