import dynamic from "next/dynamic";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@utils/firebase";

//components
const Home = dynamic(() => import("./index.js"));
const Loading = dynamic(() => import("@components/loading.js"));

// Styles
import "@styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />;
  if (!user) return <Home />;
  return <Component {...pageProps} />;
};

export default MyApp;
