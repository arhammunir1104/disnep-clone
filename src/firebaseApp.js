import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDNxRNhHVWsBAXfxeH4AIfMrwnonWChn3k",
    authDomain: "disnep-be589.firebaseapp.com",
    projectId: "disnep-be589",
    storageBucket: "disnep-be589.appspot.com",
    messagingSenderId: "218156530446",
    appId: "1:218156530446:web:6c3d4cf396075c1fca755f",
    measurementId: "G-3LKH192BPZ"
  };

  let firebaseApp = firebase.initializeApp(firebaseConfig)
  let db = firebaseApp.firestore()
  let auth = firebase.auth()
  let provider  = new firebase.auth.GoogleAuthProvider()
  let storage = firebase.storage()

  export default db;
  export {auth, provider, storage};