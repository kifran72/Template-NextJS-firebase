import dynamic from "next/dynamic";
import { useEffect, useState, Component } from "react";
import { useRouter } from "next/router";

// Styles
import styles from "../styles/Calendar.module.css";

// Components
const Head = dynamic(() => import("next/head"));
const Navbar = dynamic(() => import("@/components/navbar"));
const ModalEvent = dynamic(() => import("@/components/modal"));
const Calendar = dynamic(() => import("@/components/calendar"));

// Storage
import { test } from "@/components/firebase";

const Planning = (props) => {
  const user = props.user;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  let [infoEvent, setInfoEvent] = useState(null);

  const handleClose = () => {
    test(user, infoEvent);
    setOpen(false);
  };

  useEffect(async () => {
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
        <Calendar setOpen={setOpen} setInfoEvent={setInfoEvent} />
      </div>
      <ModalEvent open={open} handleClose={handleClose} infoEvent={infoEvent} />
    </div>
  );
};

export default Planning;
