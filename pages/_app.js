import dynamic from "next/dynamic";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";

//components
const NotLogged = dynamic(() => import("./notLogged.js"));
const Loading = dynamic(() => import("@/components/loading.js"));

// Styles
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />;
  if (!user) return <NotLogged />;
  return <Component {...pageProps} />;
};

export default MyApp;
