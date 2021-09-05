import dynamic from "next/dynamic";
const Head = dynamic(() => import("next/head"));

//Styles
import styles from "../styles/Home.module.css";

// Components
const Navbar = dynamic(() => import("@/components/navbar"));
const Background = dynamic(() => import("@/components/background"));

const Home = (props) => {
  const user = props.user;
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/IconOnglet.jpg" />
      </Head>
      <Navbar user={user} />
      <Background user={user} />
    </div>
  );
};

export default Home;
