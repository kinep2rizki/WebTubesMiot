// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1-ZOocr0I5Ab04u_htrxX7fznjsqYRL4",
  authDomain: "tubesmiot-e80c6.firebaseapp.com",
  projectId: "tubesmiot-e80c6",
  storageBucket: "tubesmiot-e80c6.firebasestorage.app",
  messagingSenderId: "989359643301",
  appId: "1:989359643301:web:20c3b5ea3f0b6aafedcb4c",
  measurementId: "G-BR1Y0D6XGE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);


export { auth, db };
