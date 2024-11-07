// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBr1rSf_Ylmi3Tq7LUyJM2dHzVvtemqCQ",
  authDomain: "ai-room-des.firebaseapp.com",
  projectId: "ai-room-des",
  storageBucket: "ai-room-des.firebasestorage.app",
  messagingSenderId: "199498818409",
  appId: "1:199498818409:web:f47df87890a0f789bd53f8",
  measurementId: "G-R3HLD1Z3S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);