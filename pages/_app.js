import dynamic from "next/dynamic";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@utils/firebase";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@utils/theme";
//components
const Loading = dynamic(() => import("@components/styles/loading"));
const Home = dynamic(() => import("./index.js"));

// Styles
import "@css/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />;
  if (user && loading) return <Home />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
