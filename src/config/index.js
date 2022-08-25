import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBwjjUGYFNNJVngF1nPTqufrjfztLA8HOE",
    authDomain: "live-cht-me.firebaseapp.com",
    projectId: "live-cht-me",
    storageBucket: "live-cht-me.appspot.com",
    messagingSenderId: "125633907373",
    appId: "1:125633907373:web:7ecdd4a14f52e1175d1424",
    measurementId: "G-RPS2HFY13K"
};

// Initialize Firebase 

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;