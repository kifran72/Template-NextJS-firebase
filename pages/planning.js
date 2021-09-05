import dynamic from "next/dynamic";
import { useEffect, useState, Component } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";
// const fetcher = (url) => axios.get(url).then((res) => res.data);

// Styles
import styles from "../styles/Calendar.module.css";

// Components
const Head = dynamic(() => import("next/head"));
const Navbar = dynamic(() => import("@/components/navbar"));
const ModalEvent = dynamic(() => import("@/components/modal"));
const Calendar = dynamic(() => import("@/components/calendar"));

// Storage
import { test, test2 } from "@/firebase/firestore";

const Planning = ({ props }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [infoEvent, setInfoEvent] = useState(null);
  // console.log(props);
  const handleClose = () => {
    test(user, infoEvent);
    setOpen(false);
  };

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
        <Calendar setOpen={setOpen} setInfoEvent={setInfoEvent} />
      </div>
      <ModalEvent open={open} handleClose={handleClose} infoEvent={infoEvent} />
    </div>
  );
};

export default Planning;

export async function getStaticProps(context) {
  return {
    props: {
      // events: await test2(),
    }, // will be passed to the page component as props
  };
}
