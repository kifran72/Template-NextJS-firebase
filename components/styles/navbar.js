import { useState } from "react";
import dynamic from "next/dynamic";
import { login, logout } from "@utils/auth/google";
const Link = dynamic(() => import("next/link"));
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

// Styles
import styles from "@css/Navbar.module.css";

// Material
const Button = dynamic(() => import("@material-ui/core/Button"));
const AppBar = dynamic(() => import("@material-ui/core/AppBar"));

// Components

const Navbar = (props) => {
  const { user, page } = props;
  let home, about, planning;

  switch (page) {
    case "home":
      home = "secondary";
      break;
    case "about":
      about = "secondary";
      break;
    case "planning":
      planning = "secondary";
      break;
    default:
      home = "primary";
      about = "primary";
      planning = "primary";
      break;
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  return (
    <AppBar className={trigger ? styles.navFixed : styles.navbar}>
      {user ? (
        <div className={styles.listeButton}>
          <Link href="/">
            <Button
              className={home === "secondary" ? styles.linked : styles.link}
            >
              Accueil
            </Button>
          </Link>
          <Link href="/about">
            <Button
              className={about === "secondary" ? styles.linked : styles.link}
            >
              A propos
            </Button>
          </Link>
          <Link href="/planning">
            <Button
              className={planning === "secondary" ? styles.linked : styles.link}
            >
              Planning
            </Button>
          </Link>
          <Link href="/">
            <Button onClick={logout} className={styles.link}>
              Logout
            </Button>
          </Link>
        </div>
      ) : (
        <div className={styles.listeButton}>
          <Link href="/">
            <Button
              className={home === "secondary" ? styles.linked : styles.link}
            >
              Accueil
            </Button>
          </Link>
          <Link href="/about">
            <Button
              className={about === "secondary" ? styles.linked : styles.link}
            >
              A propos
            </Button>
          </Link>
          <Button onClick={login} className={styles.link}>
            Connexion
          </Button>
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
