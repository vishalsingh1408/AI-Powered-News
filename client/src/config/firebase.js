import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkU7jlxqcN2h9aZhSJCMgBTsKAFJFPMqk",
  authDomain: "news-423cd.firebaseapp.com",
  projectId: "news-423cd",
  storageBucket: "news-423cd.firebasestorage.app",
  messagingSenderId: "421779158305",
  appId: "1:421779158305:web:b4084cae7520f243927a60",
  measurementId: "G-G586PX0DP1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
