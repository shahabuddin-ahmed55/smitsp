// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz7sAuTAwY0tiopt80RgCHEE4jUJ0P3g0",
  authDomain: "final-hackathon-4c6db.firebaseapp.com",
  databaseURL: "https://final-hackathon-4c6db-default-rtdb.firebaseio.com",
  projectId: "final-hackathon-4c6db",
  storageBucket: "final-hackathon-4c6db.appspot.com",
  messagingSenderId: "161297049076",
  appId: "1:161297049076:web:d1d29b22d730bce00605a1",
  measurementId: "G-070YKFMVEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
