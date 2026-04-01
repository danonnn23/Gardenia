import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Додаємо це
import { getStorage } from "firebase/storage";   // Додаємо це

const firebaseConfig = {
  apiKey: "AIzaSyDBPyELZSlDkKMcoIRT0CWzDtTeg1Na9RE",
  authDomain: "gardenia-shop-65a2c.firebaseapp.com",
  projectId: "gardenia-shop-65a2c",
  storageBucket: "gardenia-shop-65a2c.firebasestorage.app",
  messagingSenderId: "871703494464",
  appId: "1:871703494464:web:e7bec020497b28177b44a5",
  measurementId: "G-9QZ1S5VJXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Експортуємо бази даних для використання в проекті
export const db = getFirestore(app);
export const storage = getStorage(app);