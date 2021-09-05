import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";

//Styles
import styles from "../styles/NotLogged.module.css";

// Components
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/navbar"));
const Background = dynamic(() => import("../components/background"));

export default function Home(props) {
  const [user] = useAuthState(auth);
  const router = useRouter();

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

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
