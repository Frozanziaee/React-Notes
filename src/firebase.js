// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7xRdsJeb1v1bUlVNkK1G6oDEKBHyVI-M",
  authDomain: "react-notes-cfd02.firebaseapp.com",
  projectId: "react-notes-cfd02",
  storageBucket: "react-notes-cfd02.appspot.com",
  messagingSenderId: "239648094567",
  appId: "1:239648094567:web:091f7ef6d162d1045e17c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")