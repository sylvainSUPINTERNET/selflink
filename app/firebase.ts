import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "spetsnaz-b1b60.firebaseapp.com",
    projectId: "spetsnaz-b1b60",
    storageBucket: "spetsnaz-b1b60.appspot.com",
    messagingSenderId: "100751807955",
    appId: "1:100751807955:web:345d46c08c86f73da5cb26",
    measurementId: "G-LPF6573CW4"
  };
  
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);