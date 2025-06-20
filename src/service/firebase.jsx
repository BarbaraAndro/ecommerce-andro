// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuclsmbwdx5BcJ9YndMqJDZa1Zim_qLzg",
  authDomain: "ecommerce-andro-535c8.firebaseapp.com",
  projectId: "ecommerce-andro-535c8",
  storageBucket: "ecommerce-andro-535c8.firebasestorage.app",
  messagingSenderId: "194643252966",
  appId: "1:194643252966:web:2972f98edfb55c8bd08d27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)