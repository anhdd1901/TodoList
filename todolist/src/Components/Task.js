import styles from "./Task.module.css";

import {
  StarOutlined,
  StarFilled,
  CheckCircleFilled,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { ClickCompleted, ClickFavorite } from "./../Actions/thunk";

function Task({ Task }) {
  const dispatch = useDispatch();
  let reloadCount = useSelector((state) => state.statuses.reloadCount);

  return (
    <div className={styles.task}>
      <div className={styles.main}>
        <div
          onClick={() =>
            dispatch(ClickCompleted(Task.id, !Task.isCompleted, reloadCount))
          }
          className={styles.pointer}
        >
          {!Task.isCompleted ? (
            <MinusCircleOutlined />
          ) : (
            <CheckCircleFilled style={{ color: "#5c6fbb" }} />
          )}
        </div>
        <div
          className={`${styles.detail} ${
            Task.isCompleted ? styles.isCompleted : ""
          }`}
        >
          {Task.taskName}
        </div>
      </div>
      <div
        onClick={() =>
          dispatch(ClickFavorite(Task.id, !Task.isFavorite, reloadCount))
        }
        className={`${styles.pointer} ${Task.isCompleted ? styles.hide : ""}`}
      >
        {!Task.isFavorite ? (
          <StarOutlined />
        ) : (
          <StarFilled style={{ color: "#5c6fbb" }} />
        )}
      </div>
    </div>
  );
}

export default Task;
