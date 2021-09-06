import { login, logout, auth } from "@utils/auth/google";
import { AddEvent } from "@utils/db";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";

initializeApp(firebaseConfig, firebaseConfig.projectId);

const getEvents = async () => {
  const events = [];
  const db = getFirestore();

  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    events.push(doc.data());
  });
  return events;
};

export { login, logout, AddEvent, getEvents, auth };
