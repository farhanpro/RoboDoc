// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0zVbwbAlU4Ku6GsOFZCljiecC54Rot3s",
  authDomain: "robodoc-57cca.firebaseapp.com",
  projectId: "robodoc-57cca",
  storageBucket: "robodoc-57cca.appspot.com",
  messagingSenderId: "679535654944",
  appId: "1:679535654944:web:2b01cc004b93724bbf2445",
  measurementId: "G-19LKS9CD84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();