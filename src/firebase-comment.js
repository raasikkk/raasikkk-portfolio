import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0nmO3_vB7Ou2P4n7EKDabU_ul83_l1us",
    authDomain: "portfolio-c1fd9.firebaseapp.com",
    projectId: "portfolio-c1fd9",
    storageBucket: "portfolio-c1fd9.firebasestorage.app",
    messagingSenderId: "262836500884",
    appId: "1:262836500884:web:83566d63c329fd24587781",
    measurementId: "G-4ELML7DR50"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };