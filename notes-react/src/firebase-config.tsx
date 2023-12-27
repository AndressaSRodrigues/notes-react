import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH6OCku7UTDqkoRjKNrvmmh780mGBSEuQ",
  authDomain: "mynotes-75ae6.firebaseapp.com",
  projectId: "mynotes-75ae6",
  storageBucket: "mynotes-75ae6.appspot.com",
  messagingSenderId: "769083698113",
  appId: "1:769083698113:web:1d5d08d05e42d7633a1d40"
};

const app = initializeApp(firebaseConfig);

import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

export { googleProvider };
export const db = getFirestore(app);
export const auth = getAuth(app);