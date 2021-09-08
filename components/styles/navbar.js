import dynamic from "next/dynamic";
import { login, logout } from "@utils/auth/google";
const Link = dynamic(() => import("next/link"));

// Styles
import styles from "@css/Navbar.module.css";

// Material
const Button = dynamic(() => import("@material-ui/core/Button"));
const AppBar = dynamic(() => import("@material-ui/core/AppBar"));

// Components

const Navbar = (props) => {
  const user = props.user;

  return (
    <AppBar className={styles.navbar}>
      {user ? (
        <div className={styles.listeButton}>
          <Link href="/">
            <Button className={styles.button}>Accueil</Button>
          </Link>
          <Link href="/about">
            <Button className={styles.button}>A propos</Button>
          </Link>
          <Link href="/planning">
            <Button className={styles.button}>Planning</Button>
          </Link>
          <Link href="/">
            <Button onClick={logout} className={styles.button}>
              Logout
            </Button>
          </Link>
        </div>
      ) : (
        <div className={styles.listeButton}>
          <Link href="/">
            <Button className={styles.button}>Accueil</Button>
          </Link>
          <Link href="/about">
            <Button className={styles.button}>A propos</Button>
          </Link>
          <Button onClick={login} className={styles.button}>
            Rendez vous
          </Button>
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
