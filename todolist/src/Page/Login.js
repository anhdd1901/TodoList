import styles from "./Login.module.css";
import handleLogin from './../Actions/handleLogin'

import { useHistory } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.login.users);

  const [loginID, setLoginID] = React.useState("");
  const [loginPass, setLoginPass] = React.useState("");

  let history = useHistory();

  // Nhấn nút Login
  function clickLogin(id, password) {
    if (users.filter((x) => id === x.id).length !== 0) {
      if (users.filter((x) => id === x.id)[0].password === password) {
        history.push("/home");
        dispatch(handleLogin(users.filter((x) => id === x.id)[0]));
      }
    } else history.push("/loginFailed");
  }

  return (
    <div className={styles.all}>
      <div className={styles.main}>
        <div className={styles.head}>Login</div>
        <input
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              clickLogin(loginID, loginPass);
            }
          }}
          onChange={(e) => setLoginID(e.target.value)}
          value={loginID}
          className={styles.detail}
          type="text"
          placeholder="Input your ID"
        ></input>
        <input
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              clickLogin(loginID, loginPass);
            }
          }}
          onChange={(e) => setLoginPass(e.target.value)}
          value={loginPass}
          className={styles.detail}
          type="password"
          placeholder="Password"
        ></input>
        <button
          onClick={() => {
            clickLogin(loginID, loginPass);
          }}
          className={styles.loginButton}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
