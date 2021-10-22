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


export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const cratedAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        cratedAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message );
    }
  }
  return userRef;
}



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const siginInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

