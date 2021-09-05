// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const test = async (user, infoEvent) => {
  try {
    await addDoc(collection(db, "events"), {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      start: infoEvent.start,
      title: infoEvent.title,
      allDay: infoEvent.allDay,
      display: infoEvent.display,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const test2 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const events = [];
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        events.push(doc.data());
      });

      resolve(events);
    } catch (e) {
      reject(e);
    }
  });
};

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

export { auth, provider, test2, loginGoogle, logout, test };
