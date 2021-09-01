import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/app";

// Styles
import "../styles/globals.css";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  return <Component user={user} {...pageProps} />;
}

export default MyApp;
