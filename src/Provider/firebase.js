// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKiXZlzB3RzMJb3V-KoPjCmCbwLlBHPzw",
  authDomain: "assignment-11-1f30f.firebaseapp.com",
  projectId: "assignment-11-1f30f",
  storageBucket: "assignment-11-1f30f.firebasestorage.app",
  messagingSenderId: "498904367581",
  appId: "1:498904367581:web:80c8a686e85d107d403634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth