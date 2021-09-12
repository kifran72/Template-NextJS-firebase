import dynamic from "next/dynamic";
const Head = dynamic(() => import("next/head"));
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@utils/firebase";

// CUSTOM CSS
import styles from "@css/about.module.css";

// Material
const Fab = dynamic(() => import("@material-ui/core/Fab"));
const Toolbar = dynamic(() => import("@material-ui/core/Toolbar"));
const KeyboardArrowUpIcon = dynamic(() =>
  import("@material-ui/icons/KeyboardArrowUp")
);

// Components
const About = dynamic(() => import("@components/about"));
const Navbar = dynamic(() => import("@components/styles/navbar"));
const Background = dynamic(() => import("@components/styles/background"));
const ScrollTop = dynamic(() => import("@components/styles/scrollTop"));
const ElevationScroll = dynamic(() =>
  import("@components/styles/elevationScroll")
);
const AboutPage = (props) => {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.container}>
      <Head>
        <title>A-Propos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/IconOnglet.jpg" />
      </Head>
      <Background user={user} />
      <ElevationScroll {...props}>
        <Navbar user={user} page="about" />
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      <About />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default AboutPage;
