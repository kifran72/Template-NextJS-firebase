import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//Styles
import styles from "../styles/NotLogged.module.css";

// Components
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/navbar"));
const Background = dynamic(() => import("../components/background"));

export default function Home(props) {
  const user = props.user;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Connectez vous</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/IconOnglet.jpg" />
      </Head>
      <Navbar user={user} />
      <Background user={user} />
    </div>
  );
}
