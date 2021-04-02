import styles from "./Title.module.css";
import {
  handleChangeCompletedListShownStatus,
  handleChangeUncompletedListShownStatus,
} from "./../Actions/handleChangeShownStatus";

import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

function Title({ NameOfTitle, NumberOfTask }) {
  let dispatch = useDispatch();
  let isUncompletedListShown = useSelector(
    (state) => state.showStatus.isUncompletedListShown
  );
  let isCompletedListShown = useSelector(
    (state) => state.showStatus.isCompletedListShown
  );
  let isShownStatus =
    NameOfTitle === "Completed" ? isCompletedListShown : isUncompletedListShown;

  let clickChangeShownStatus = (nameOfTitle, currentShownStatus) => {
    if (nameOfTitle === "Completed")
      dispatch(handleChangeCompletedListShownStatus(!currentShownStatus));
    else dispatch(handleChangeUncompletedListShownStatus(!currentShownStatus));
  };
  return (
    <div className={styles.task}>
      <div
        onClick={() => clickChangeShownStatus(NameOfTitle, isShownStatus)}
        className={styles.main}
      >
        <div className={styles.pointer}>
          {isShownStatus ? (
            <DownOutlined style={{ color: "white" }} />
          ) : (
            <RightOutlined style={{ color: "white" }} />
          )}
        </div>
        <div className={styles.title}>
          {NameOfTitle + " (" + NumberOfTask + ")"}
        </div>
      </div>
    </div>
  );
}

export default Title;
