import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyAQFfFqu57O9e79Rz5tIxHkkGIEPrUhhko",
    authDomain: "aapnugram.firebaseapp.com",
    databaseURL: "https://aapnugram.firebaseio.com",
    projectId: "aapnugram",
    storageBucket: "aapnugram.appspot.com",
    messagingSenderId: "205892176326"
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
