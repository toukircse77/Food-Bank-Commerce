// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtowbc_3E0tNBi9kyMtjI44loFvVoBhBg",
  authDomain: "khabarbari.firebaseapp.com",
  projectId: "khabarbari",
  storageBucket: "khabarbari.appspot.com",
  messagingSenderId: "668395809904",
  appId: "1:668395809904:web:1390aceaca20cd6fbc98b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app