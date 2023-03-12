
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCy6t_AM4tAuM_ndjaLnR6nNWwlNq1G3q4",
  authDomain: "gift-2ae31.firebaseapp.com",
  projectId: "gift-2ae31",
  storageBucket: "gift-2ae31.appspot.com",
  messagingSenderId: "171751442912",
  appId: "1:171751442912:web:5e17e4e1333ed8e48a8385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);