// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb80b8ZJjISeYeZ2lSnmsm6Mz_9bVnIGk",
  authDomain: "test-20721.firebaseapp.com",
  projectId: "test-20721",
  storageBucket: "test-20721.appspot.com",
  messagingSenderId: "515072191305",
  appId: "1:515072191305:web:f6194c4a189a92269fc898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize database
export const db = getDatabase(app);