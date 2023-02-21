
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDEG46KSW-Rnsd1janwTGXYNv8bw4F9KPg",
  authDomain: "blogs-3c2ca.firebaseapp.com",
  projectId: "blogs-3c2ca",
  storageBucket: "blogs-3c2ca.appspot.com",
  messagingSenderId: "641876396554",
  appId: "1:641876396554:web:03d3577047f37853c66df3"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider()