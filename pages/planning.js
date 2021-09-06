import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@utils/firebase";

// Styles
import styles from "../styles/Calendar.module.css";

// Components
const Head = dynamic(() => import("next/head"));
const Navbar = dynamic(() => import("@components/navbar"));
const Calendar = dynamic(() => import("@components/calendar"));

const Planning = (props) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Planning</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/IconOnglet.jpg" />
      </Head>
      <Navbar user={user} />
      <div className={styles.calendar}>
        <h1>Planning</h1>
        <Calendar />
      </div>
    </div>
  );
};

export default Planning;
