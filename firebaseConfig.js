import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ8OQ-rwcwerr1rdPl3BSEJ9Tem4KUeZU",
  authDomain: "customer-counter-759a4.firebaseapp.com",
  projectId: "customer-counter-759a4",
  storageBucket: "customer-counter-759a4.appspot.com",
  messagingSenderId: "523789217621",
  appId: "1:523789217621:web:02a8e9a51a34bc535bc9dc"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
