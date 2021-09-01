import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

// Styles
import styles from "../styles/Calendar.module.css";

// Components
import Navbar from "../components/navbar";
import ModalEvent from "../components/modal";

export default function Planning(props) {
  const user = props.user;
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  let [infoEvent, setInfo] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
  };

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
      <h1>Planning</h1>
      <br />
      <div className={styles.calendar}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={(info) => {
            setOpen(true);
            setInfo({
              dateStr: info.dateStr,
              date: info.date,
            });
          }}
          selectable={false}
          // select={(info) => {
          //   console.log("click", info);
          // }}
          editable={true}
          eventClick={(info) => {
            console.log("click", info);
          }}
        />
      </div>
      <ModalEvent open={open} handleClose={handleClose} infoEvent={infoEvent} />
    </div>
  );
}
