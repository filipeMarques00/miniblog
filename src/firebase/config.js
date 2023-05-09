import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhrmGyuW0y-oxmxub07xWt5K7UgZ8Ub9k",
  authDomain: "miniblog-2ffd1.firebaseapp.com",
  projectId: "miniblog-2ffd1",
  storageBucket: "miniblog-2ffd1.appspot.com",
  messagingSenderId: "484640866515",
  appId: "1:484640866515:web:60f1838825db68179d5426",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
