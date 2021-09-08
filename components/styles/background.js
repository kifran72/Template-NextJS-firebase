//Styles
import styles from "@css/BackgroundAnimation.module.css";

const Background = (props) => {
  const user = props.user;
  return (
    <div className={styles.container}>
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
};

export default Background;
