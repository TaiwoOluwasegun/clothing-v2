import { initializeApp } from "firebase/app";
// setting up authentication
import {getAuth, signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc,} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDyG22OpYxVkYs8ejI_EQRaBSfbnjapoQ",
    authDomain: "crown-db-2-a8b1c.firebaseapp.com",
    projectId: "crown-db-2-a8b1c",
    storageBucket: "crown-db-2-a8b1c.appspot.com",
    messagingSenderId: "739461323259",
    appId: "1:739461323259:web:2f2838dbf357f6976f935e"
  };
  

  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef)
      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot.exists())

  }