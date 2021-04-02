import styles from "./AddTask.module.css";
import { onAddTask } from "./../Actions/thunk";

import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

function AddTask() {
  let dispatch = useDispatch();
  let reloadCount = useSelector((state) => state.statuses.reloadCount);
  let loginUser = useSelector((state) => state.login.user);
  let isLoadingAddTodo = useSelector(
    (state) => state.statuses.isLoadingAddTodo
  );
  let isErrorAddTodo = useSelector((state) => state.statuses.isErrorAddTodo);

  return (
    <div className={styles.task}>
      <div className={styles.main}>
        <div className={styles.pointer}>
          <PlusOutlined className={styles.icon} />
        </div>
        <input
          className={styles.detail}
          placeholder="Add new task here"
          disabled={isLoadingAddTodo || isErrorAddTodo}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !isLoadingAddTodo && !isErrorAddTodo) {
              dispatch(onAddTask(e.target.value, reloadCount, loginUser));
              e.target.value = "";
            }
          }}
        ></input>
      </div>
    </div>
  );
}

export default AddTask;
