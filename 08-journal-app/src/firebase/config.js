// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBokJEJWbqktV6HN22oogq0JDD3Zyn_deM",
  authDomain: "react-cursos-11050.firebaseapp.com",
  projectId: "react-cursos-11050",
  storageBucket: "react-cursos-11050.appspot.com",
  messagingSenderId: "797645814611",
  appId: "1:797645814611:web:e2709f5f1041a32bd7bfa6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);