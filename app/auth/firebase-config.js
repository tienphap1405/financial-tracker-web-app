import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAupAtTInaTRhg3nZJ6WiwAAwBIKExsn2E",
  authDomain: "basic-financial-web-app.firebaseapp.com",
  projectId: "basic-financial-web-app",
  storageBucket: "basic-financial-web-app.firebasestorage.app",
  messagingSenderId: "540553367159",
  appId: "1:540553367159:web:7fa5ed57ffb81dd75bc072",
  measurementId: "G-RM4C4926W5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);