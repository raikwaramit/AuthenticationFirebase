// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import App from "../../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGhbk1JotPBGmRvHa_JirPFiaVahyLFUg",
  authDomain: "fir-authentication-f2b6b.firebaseapp.com",
  projectId: "fir-authentication-f2b6b",
  storageBucket: "fir-authentication-f2b6b.appspot.com",
  messagingSenderId: "564212233055",
  appId: "1:564212233055:web:4ba84ebd06688aef9f7cea",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(fireBaseApp);
