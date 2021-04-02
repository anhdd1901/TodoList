import styles from "./Home.module.css";
import AddTask from "../Components/AddTask";
import UnCompletedList from "../Components/UncompletedList";
import CompletedList from "../Components/CompletedList";
import Title from "../Components/Title";
import { refreshTodoList, ClickRefresh } from "./../Actions/thunk";
import Logout from './Logout'

import React from "react";
import lodash from "lodash";
import { LoadingOutlined, RedoOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.login.user);
  const TaskList = useSelector((state) => state.taskList.gotList);
  let [uncompletedList, completedList] = lodash.partition(TaskList, {
    isCompleted: false,
  });

  let isLoading = useSelector((state) => state.statuses.isLoading);
  let isError = useSelector((state) => state.statuses.isError);
  let reloadCount = useSelector((state) => state.statuses.reloadCount);
  let isLoadingClickComplete = useSelector(
    (state) => state.statuses.isLoadingClickComplete
  );
  let isErrorClickComplete = useSelector(
    (state) => state.statuses.isErrorClickComplete
  );
  let isLoadingClickFavourite = useSelector(
    (state) => state.statuses.isLoadingClickFavourite
  );
  let isErrorClickFavourite = useSelector(
    (state) => state.statuses.isErrorClickFavourite
  );
  let isLoadingAddTodo = useSelector(
    (state) => state.statuses.isLoadingAddTodo
  );
  let isErrorAddTodo = useSelector((state) => state.statuses.isErrorAddTodo);
  let isUncompletedListShown = useSelector(
    (state) => state.showStatus.isUncompletedListShown
  );
  let isCompletedListShown = useSelector(
    (state) => state.showStatus.isCompletedListShown
  );

  // Xử lý download dữ liệu về
  React.useEffect(() => {
    dispatch(refreshTodoList(loginUser));
  }, [reloadCount, loginUser, dispatch]);

  // Click nút chuyển trang
  const history = useHistory();
  const clickButton = React.useCallback((Page) => {
    history.push(Page);
  },[history]);

  return (
    <div className={styles.all}>
      <div className={styles.main}>
        <div className={styles.head}>Hello {loginUser.name}!</div>
        <AddTask />
        {isError ||
        isErrorClickComplete ||
        isErrorClickFavourite ||
        isErrorAddTodo ? (
          <RedoOutlined
            onClick={() => dispatch(ClickRefresh(reloadCount))}
            className={styles.icon}
          />
        ) : isLoading ||
          isLoadingClickComplete ||
          isLoadingClickFavourite ||
          isLoadingAddTodo ? (
          <LoadingOutlined className={styles.icon} />
        ) : (
          <>
            <Title
              NameOfTitle={"Uncompleted"}
              NumberOfTask={uncompletedList.length}
            />
            {isUncompletedListShown ? (
              <UnCompletedList List={uncompletedList} />
            ) : (
              ""
            )}
            <Title
              NameOfTitle={"Completed"}
              NumberOfTask={completedList.length}
            />
            {isCompletedListShown ? <CompletedList List={completedList} /> : ""}
          </>
        )}
        <div style={{ width: "102%", display: "flex" }}>
          <Logout clickButton={clickButton} />
          <button
            onClick={() => clickButton("/profile")}
            className={styles.logoutButton}
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
