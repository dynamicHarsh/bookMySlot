// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBlsOzl-RmkDnTwwMMK4QSarbzx_DVl2eA",
  authDomain: "bookmyslot-777.firebaseapp.com",
  projectId: "bookmyslot-777",
  storageBucket: "bookmyslot-777.appspot.com",
  messagingSenderId: "990760300855",
  appId: "1:990760300855:web:df80ae1a8f76a35d7c2ab2",
  measurementId: "G-MREE9MNV4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)