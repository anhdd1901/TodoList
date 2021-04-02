import styles from "./Logout.module.css";
import React from "react";

export default React.memo(function Logout({ clickButton }) {
  console.log("logout button re-render");
  return (
    <button
      onClick={() => clickButton("/")}
      className={styles.logoutButton}
      style={{ marginRight: "5px" }}
    >
      Logout
    </button>
  );
});
