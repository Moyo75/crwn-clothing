import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDqafQ8pBDzWpPHvRV16744rBW4EeSRVOg",
    authDomain: "crown-db-2296f.firebaseapp.com",
    databaseURL: "https://crown-db-2296f.firebaseio.com",
    projectId: "crown-db-2296f",
    storageBucket: "",
    messagingSenderId: "1007964037448",
    appId: "1:1007964037448:web:475f159af180b3d0dc537d"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;