// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBW0eu4lMSDqAjhdWTbPiuD8ISC23p5FG8',
  authDomain: 'test-7b8b7.firebaseapp.com',
  projectId: 'test-7b8b7',
  storageBucket: 'test-7b8b7.appspot.com',
  messagingSenderId: '1007666781121',
  appId: '1:1007666781121:web:a4fc6ba4efc424cb9b6d40',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const loginGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const info = {
        credential,
        token,
        user,
      };

      return info;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const logout = () => {
  signOut(auth)
    .then(() => {
      // signOut
    })
    .catch((error) => {
      // An error happened.
    });
};

export { auth, provider, loginGoogle, logout };
