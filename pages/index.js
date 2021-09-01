import React from "react";
import Head from "next/head";

//Styles
import styles from "../styles/Home.module.css";

// Components
import Navbar from "../components/navbar";
import Background from "../components/background";

export default function Home(props) {
  const user = props.user;

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/test-7b8b7.appspot.com/o/IMG_20210802_185402_Bokeh-min.jpg?alt=media&token=51c262bc-46c7-4ecf-a5b3-a258d747ba3f"
        />
      </Head>
      <Navbar user={user} />
      <Background user={user} />
    </div>
  );
}
