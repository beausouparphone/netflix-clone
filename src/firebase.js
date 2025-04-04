import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDivZ8n-PFXCYI_zeOmhn7G_iyA3iLyMAM",
  authDomain: "netflix-clone-18d23.firebaseapp.com",
  projectId: "netflix-clone-18d23",
  storageBucket: "netflix-clone-18d23.firebasestorage.app",
  messagingSenderId: "260883228852",
  appId: "1:260883228852:web:5fa1b6b9664b9636630fe1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name,
            authProiver: 'local',
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}