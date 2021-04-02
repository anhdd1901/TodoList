import styles from "./LoginFailed.module.css";
import { useHistory } from "react-router-dom";

function LoginFailed() {
  const history = useHistory();
  function clickButton(Page) {
    history.push(Page);
  }
  return (
    <div className={styles.all}>
      <div className={styles.main}>
        <div className={styles.head}>Login Failed</div>
        <button
          onClick={() => clickButton("/")}
          className={styles.loginButton}
          style={{ marginRight: "5px" }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default LoginFailed;
