import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI_9mC-cd60TnqAtSFfhhYsmjtKA_vlS0",
  authDomain: "web-shop-bb9a3.firebaseapp.com",
  projectId: "web-shop-bb9a3",
  storageBucket: "web-shop-bb9a3.appspot.com",
  messagingSenderId: "829788072066",
  appId: "1:829788072066:web:d322af7b3ec7b52dcf6c9b",
  measurementId: "G-68RXHCRZ09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
