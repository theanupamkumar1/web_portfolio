// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg3fPHO_8-0-YLewQebJgK5AQ60DlMm64",
  authDomain: "portfoio-cms.firebaseapp.com",
  projectId: "portfoio-cms",
  storageBucket: "portfoio-cms.firebasestorage.app",
  messagingSenderId: "1035732418325",
  appId: "1:1035732418325:web:80b7ad18b6e7423195731c",
  measurementId: "G-6VKV7MGT23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
