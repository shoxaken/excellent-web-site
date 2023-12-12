// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAm8n-m2NltNgeRqrJQkD6lIz2V5o5jEM0",
  authDomain: "for-excellent.firebaseapp.com",
  projectId: "for-excellent",
  storageBucket: "for-excellent.appspot.com",
  messagingSenderId: "308171425297",
  appId: "1:308171425297:web:ea3353520d9028d20f53b0",
  measurementId: "G-DQRY6BNQL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth();
export { app, auth }