// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, browserLocalPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAXqHBXpSqvY0QGQQ33LF5BRxTlYO8Vw4Y",
  authDomain: "rtrade-7ce93.firebaseapp.com",
  projectId: "rtrade-7ce93",
  storageBucket: "rtrade-7ce93.appspot.com",
  messagingSenderId: "1080106807030",
  appId: "1:1080106807030:web:d8b5529bd2052d4d4206d7",
  measurementId: "G-VFP0MSRC7M",
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
export const db = getFirestore(app);
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export default app;
export const photoAPI = `https://api.unsplash.com/photos?client_id={process.env.unsplashKey}`
export const auth = getAuth(app)
export const rdb = getDatabase(app)

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const analytics = isSupported().then((yes) =>
//   yes ? getAnalytics(app) : null
// );
// export default app;
// export const photoAPI = `https://api.unsplash.com/photos?client_id={process.env.unsplashKey}`;
// getAuth(app).setPersistence(browserLocalPersistence);
// export const auth = getAuth(app);
// export const rdb = getDatabase(app);
