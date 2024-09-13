// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVF3sC3F661GfmHsdtGi-hzEgzKYoAqck",
  authDomain: "alta-e13b3.firebaseapp.com",
  projectId: "alta-e13b3",
  storageBucket: "alta-e13b3.appspot.com",
  messagingSenderId: "188058996502",
  appId: "1:188058996502:web:d4c7b0b0146e6d1c01ca37",
  measurementId: "G-5H2QWS8KMT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);