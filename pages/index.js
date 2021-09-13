import dynamic from "next/dynamic";
const Head = dynamic(() => import("next/head"));
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@utils/firebase";

//Styles
import styles from "@css/home.module.css";

// Material
const KeyboardArrowUpIcon = dynamic(() =>
  import("@material-ui/icons/KeyboardArrowUp")
);
const Fab = dynamic(() => import("@material-ui/core/Fab"));
const Toolbar = dynamic(() => import("@material-ui/core/Toolbar"));

// Components
const Navbar = dynamic(() => import("@components/styles/navbar"));
const Background = dynamic(() => import("@components/styles/background"));
const Vitrine = dynamic(() => import("@components/vitrine"));
const ScrollTop = dynamic(() => import("@components/styles/scrollTop"));
const ElevationScroll = dynamic(() =>
  import("@components/styles/elevationScroll")
);

const Home = (props) => {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.container}>
      <Head>
        <title>Accueil</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/IconOnglet.jpg" />
      </Head>

      <Background user={user} />
      <ElevationScroll {...props}>
        <Navbar user={user} page="home" />
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      <Vitrine />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Home;
