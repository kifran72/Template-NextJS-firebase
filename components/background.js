import React from "react";

//Styles
import styles from "../styles/BackgroundAnimation.module.css";

export default function Background(props) {
  const user = props.user;
  //   console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.title}>
        <span>
          {" "}
          {user && `Bonjour ${user.displayName}`} <br />
          {user && `Comment allez vous ?`}{" "}
        </span>
        <span> {!user && `Vous pouvez vous connecter`}</span>
      </div>
    </div>
  );
}
