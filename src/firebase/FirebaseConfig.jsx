import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNUH6JMyIa817twYUpKBDa65QoLUOxvhg",
  authDomain: "messthali-6d8fb.firebaseapp.com",
  projectId: "messthali-6d8fb",
  storageBucket: "messthali-6d8fb.appspot.com",
  messagingSenderId: "1085344841512",
  appId: "1:1085344841512:web:8c4f4187c32252f3fe5a1d",
  measurementId: "G-GKFSXZJW70",
};
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
