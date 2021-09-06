import { login, logout, auth } from "@utils/auth/google";
import { AddEvent, getEvents } from "@utils/db";
import firebaseConfig from "@utils/firebaseConfig";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

export { login, logout, AddEvent, getEvents, auth };
