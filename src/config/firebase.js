import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCjZcemJuSx9c7R4Btpr63PNxExYheZz9A",
  authDomain: "jornada-clone-tiktok.firebaseapp.com",
  projectId: "jornada-clone-tiktok",
  storageBucket: "jornada-clone-tiktok.appspot.com",
  messagingSenderId: "471820848746",
  appId: "1:471820848746:web:c4594220c27fe7a62a4413",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
