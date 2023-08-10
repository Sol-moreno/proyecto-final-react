// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDazKH0S7c1xRSWNvKbjd-TXhP3jxdhwq8",
  authDomain: "le-petite-creaciones-c1867.firebaseapp.com",
  projectId: "le-petite-creaciones-c1867",
  storageBucket: "le-petite-creaciones-c1867.appspot.com",
  messagingSenderId: "110281477575",
  appId: "1:110281477575:web:f261e736c3968c022cdde2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)