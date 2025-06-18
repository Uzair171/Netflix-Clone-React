
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify'


const firebaseConfig = {
  apiKey: "AIzaSyAmTksNPCrfhFcBUoG3e-QtvNtWYLjBcwY",
  authDomain: "netflix-clone-935f1.firebaseapp.com",
  projectId: "netflix-clone-935f1",
  storageBucket: "netflix-clone-935f1.firebasestorage.app",
  messagingSenderId: "790380748773",
  appId: "1:790380748773:web:74fc8039b0bb341190190c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp= async (name,email,password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    console.log(res)
    const user = res.user
    
    await addDoc(collection(db,'user'),{
      uid:user.uid,
      name,
      authprovider:'local',
      email,
      createdAt: serverTimestamp()
    })
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const signIn= async (email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" ").toUpperCase())
  }
}

const logOut = ()=>{
  signOut(auth);
}

export  {auth, db, signIn, signUp, logOut}
