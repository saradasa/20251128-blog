import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "process.env.project/blog-e9ede",
    authDomain: "process.env.20251128.firebaseapp.com",
    projectId: "process.env.2025112",
    storageBucket: "process.env.20251128appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: "process.env.https://console.firebase.google.com/u/0/project/blog-e9ede/firestore/databases/-default-/data",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);