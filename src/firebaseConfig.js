// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpEXrPD_DxItyg5mKEndmFdVsWVgLrYS0",
  authDomain: "student-management-syste-a3a38.firebaseapp.com",
  projectId: "student-management-syste-a3a38",
  storageBucket: "student-management-syste-a3a38.appspot.com",
  messagingSenderId: "956000086575",
  appId: "1:956000086575:web:7edb4b7bccc71230c6f4da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
const db = getFirestore(app);

export {db}