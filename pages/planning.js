import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

// Styles
import styles from "../styles/Calendar.module.css";

// Components
import Navbar from "../components/navbar";

export default function Planning(props) {
  const user = props.user;

  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Planning</title>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/test-7b8b7.appspot.com/o/IMG_20210802_185402_Bokeh-min.jpg?alt=media&token=51c262bc-46c7-4ecf-a5b3-a258d747ba3f"
        />
      </Head>
      <Navbar user={user} />
      <div>
        <h1>Planning</h1>
        <br />
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          className={styles.calendar}
        />
      </div>
    </div>
  );
}
