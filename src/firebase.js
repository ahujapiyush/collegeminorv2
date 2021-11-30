import firebase from 'firebase/compat/app'; import 'firebase/compat/auth';



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAAnYtI1CPEAinKR0m6W9-S32P83UHm42U",
    authDomain: "auth-f7dad.firebaseapp.com",
    projectId: "auth-f7dad",
    storageBucket: "auth-f7dad.appspot.com",
    messagingSenderId: "245510081373",
    appId: "1:245510081373:web:029628e6f38e04c915b6b4",
    measurementId: "G-CXLM2LY3JW"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;