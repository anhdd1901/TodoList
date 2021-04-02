import styles from "./Profile.module.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  function clickButton(Page) {
    history.push(Page);
  }
  return (
    <div className={styles.all}>
      <div className={styles.main}>
        <div className={styles.head}>Profile</div>
        <div style={{ width: "102%", display: "flex" }}>
          <button
            onClick={() => clickButton("/")}
            className={styles.loginButton}
            style={{ marginRight: "5px" }}
          >
            Logout
          </button>
          <button
            onClick={() => clickButton("/home")}
            className={styles.loginButton}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
