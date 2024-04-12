import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn_EhQuKM6figUrA4H0XHvlCOHHEaots0",
  authDomain: "mymoney-ff0f8.firebaseapp.com",
  projectId: "mymoney-ff0f8",
  storageBucket: "mymoney-ff0f8.appspot.com",
  messagingSenderId: "664125429911",
  appId: "1:664125429911:web:493b2a36999434239fb1d2",
};

// Initiera firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initiera firebase auth
const auth = getAuth(app);

export { db, auth };
