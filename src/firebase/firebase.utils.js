import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyBZsTJNfwbuwJKS1IPrvxZ0uGa9uvrgodc",
  authDomain: "crwn-db-8daeb.firebaseapp.com",
  projectId: "crwn-db-8daeb",
  storageBucket: "crwn-db-8daeb.appspot.com",
  messagingSenderId: "277389041385",
  appId: "1:277389041385:web:8fbe8b3ca9ed3f9d84da78"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const siginInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


