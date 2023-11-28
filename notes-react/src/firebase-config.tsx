import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCH6OCku7UTDqkoRjKNrvmmh780mGBSEuQ",
    authDomain: "mynotes-75ae6.firebaseapp.com",
    projectId: "mynotes-75ae6",
    storageBucket: "mynotes-75ae6.appspot.com",
    messagingSenderId: "769083698113",
    appId: "1:769083698113:web:1d5d08d05e42d7633a1d40"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);