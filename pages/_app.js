import dynamic from "next/dynamic";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/components/firebase.js";
import { useEffect } from "react";

//components
const NotLogged = dynamic(() => import("./notLogged.js"));
const Loading = dynamic(() => import("@/components/loading.js"));

// Styles
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {}, [user]);

  if (loading) return <Loading />;
  if (!user) return <NotLogged user={user} />;
  return <Component user={user} {...pageProps} />;
};

export default MyApp;
