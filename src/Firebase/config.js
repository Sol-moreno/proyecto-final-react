// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUazPdPxKbgKzBXVczPe04f4uAMW5pz0c",
  authDomain: "le-petite-creaciones-801f8.firebaseapp.com",
  projectId: "le-petite-creaciones-801f8",
  storageBucket: "le-petite-creaciones-801f8.appspot.com",
  messagingSenderId: "112752508900",
  appId: "1:112752508900:web:a3ad6806dabae407bb51f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)