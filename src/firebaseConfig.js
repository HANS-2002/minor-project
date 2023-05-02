// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnI4v8wa84QpzwBp2ZO4-knM7NZi8icv0",
  authDomain: "minor-project-bdffc.firebaseapp.com",
  projectId: "minor-project-bdffc",
  storageBucket: "minor-project-bdffc.appspot.com",
  messagingSenderId: "809109445265",
  appId: "1:809109445265:web:39ba457ae6d334a8b77d30",
  measurementId: "G-WPB111XZ4W"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const initFirebase = () => {
  return app;
};

export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export default app;
export const auth = getAuth(app);