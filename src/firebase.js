import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0nmO3_vB7Ou2P4n7EKDabU_ul83_l1us",
  authDomain: "portfolio-c1fd9.firebaseapp.com",
  projectId: "portfolio-c1fd9",
  storageBucket: "portfolio-c1fd9.firebasestorage.app",
  messagingSenderId: "262836500884",
  appId: "1:262836500884:web:83566d63c329fd24587781",
  measurementId: "G-4ELML7DR50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };