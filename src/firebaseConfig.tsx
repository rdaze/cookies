import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAfZv0a1NwYFg1UFd_ZfB0YSP0E8Pj0To",
  authDomain: "dexp-98c2b.firebaseapp.com",
  projectId: "dexp-98c2b",
  storageBucket: "dexp-98c2b.firebasestorage.app",
  messagingSenderId: "528771383737",
  appId: "1:528771383737:web:46aa72dd26ca8615783668",
  measurementId: "G-RTJQHQCGWX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
