import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmI7WlBxZ5Bo-KwwaEo_t2_9iJkXuuq-I",
  authDomain: "curso-60b53.firebaseapp.com",
  projectId: "curso-60b53",
  storageBucket: "curso-60b53.appspot.com",
  messagingSenderId: "586187349682",
  appId: "1:586187349682:web:9d09013ff0108764d3b3ab",
  measurementId: "G-JB0YJDVNT5",
};

// Initialize
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
