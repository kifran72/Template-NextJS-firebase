import React from "react";
import { loginGoogle, logout } from "../firebase/app";
import Link from "next/link";

// Styles
import styles from "../styles/Navbar.module.css";
import Button from "@material-ui/core/Button";

export default function Navbar(props) {
  const user = props.user;

  return (
    <div className={styles.navbar}>
      {user ? (
        <div className={styles.listeButton}>
          <Link href="/">
            <Button className={styles.button}>Home</Button>
          </Link>
          <Link href="/planning">
            <Button className={styles.button}>Planning</Button>
          </Link>
          <Button onClick={logout} className={styles.button}>
            Logout
          </Button>
        </div>
      ) : (
        <Button onClick={loginGoogle} className={styles.button}>
          Login with Google
        </Button>
      )}
    </div>
  );
}
