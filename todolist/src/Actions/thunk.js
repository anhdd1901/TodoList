import {
  getTodoList,
  getClickCompleted,
  getClickFavourite,
  getAddTodo,
} from "./../TodoServices";
import handleGetTodoList from "./../Actions/handleGetTodoList";
import {
  changeLoadingStatus,
  changeErrorStatus,
  changeLoadingClickCompleteStatus,
  changeErrorClickCompleteStatus,
  changeLoadingClickFavouriteStatus,
  changeErrorClickFavouriteStatus,
  changeReloadCount,
  changeErrorAddTodoStatus,
  changeLoadingAddTodoStatus,
} from "./../Actions/changeStatus";

export const refreshTodoList = (loginUser) => {
  return async function (dispatch) {
    try {
      let response = (await getTodoList(loginUser.id)).data.data.map(
        (x) =>
          (x = {
            ...x,
            completedDate: new Date(x.completedDate).getTime(),
            createdDate: new Date(x.createdDate).getTime(),
          })
      );
      dispatch(handleGetTodoList(response));
      dispatch(changeLoadingStatus(false));
    } catch {
      dispatch(changeErrorStatus(true));
    } finally {
      dispatch(changeLoadingStatus(false));
    }
  };
};

export const ClickCompleted = (id, targetedStatus, reloadCount) => {
  return async function (dispatch) {
    dispatch(changeLoadingClickCompleteStatus(true));
    try {
      await getClickCompleted(id, targetedStatus);
      dispatch(changeLoadingClickCompleteStatus(false));
      dispatch(changeReloadCount(reloadCount + 1));
    } catch {
      dispatch(changeErrorClickCompleteStatus(true));
    } finally {
      dispatch(changeLoadingClickCompleteStatus(false));
    }
  };
};

export const ClickFavorite = (id, targetedStatus, reloadCount) => {
  return async function (dispatch) {
    dispatch(changeLoadingClickFavouriteStatus(true));
    try {
      await getClickFavourite(id, targetedStatus);
      dispatch(changeLoadingClickFavouriteStatus(false));
      dispatch(changeReloadCount(reloadCount + 1));
    } catch {
      dispatch(changeErrorClickFavouriteStatus(true));
    } finally {
      dispatch(changeLoadingClickFavouriteStatus(false));
    }
  };
};

export const ClickRefresh = (reloadCount) => {
  return function (dispatch) {
    dispatch(changeLoadingStatus(true));
    dispatch(changeErrorStatus(false));
    dispatch(changeErrorClickCompleteStatus(false));
    dispatch(changeErrorClickFavouriteStatus(false));
    dispatch(changeErrorAddTodoStatus(false));
    dispatch(changeReloadCount(reloadCount + 1));
  };
};

export const onAddTask = (newTask, reloadCount, loginUser) => {
  return async function (dispatch) {
    if (newTask !== "") {
      dispatch(changeLoadingAddTodoStatus(true));
      try {
        await getAddTodo(loginUser.id, newTask);
        dispatch(changeLoadingAddTodoStatus(false));
        dispatch(changeReloadCount(reloadCount + 1));
      } catch {
        dispatch(changeErrorAddTodoStatus(true));
      } finally {
        dispatch(changeLoadingAddTodoStatus(false));
      }
    }
  };
};
