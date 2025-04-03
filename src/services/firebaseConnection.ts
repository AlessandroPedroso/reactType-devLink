
import { initializeApp } from "firebase/app";
//banco
import { getFirestore } from 'firebase/firestore'
//auth
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDkioOyk_Io-BLGJBFt7HeWIorGt8rTEiU",
  authDomain: "reactlinks-92d6e.firebaseapp.com",
  projectId: "reactlinks-92d6e",
  storageBucket: "reactlinks-92d6e.firebasestorage.app",
  messagingSenderId: "722301607855",
  appId: "1:722301607855:web:55e48cd20d12021047195a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db }