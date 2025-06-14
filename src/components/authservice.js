// src/components/authservice.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";  // pastikan path ini benar

export const login = async (email, password) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user.uid;  // kembalikan UID user jika sukses
  } catch (error) {
    throw error;  // lempar error supaya bisa ditangkap di komponen LoginPage
  }
};
