import Axios from "axios";

let api = "http://localhost:5000";
let apiTodo = "/Todo/GetTodos";
let apiAddTodo = "/Todo/AddTodo";
let apiClickComplete = "/Todo/ChangeTaskCompletedState";
let apiClickFavourite = "/Todo/ChangeTaskFavoriteState";

export const getTodoList = async (loginUser) => {
  return await Axios.get(`${api}${apiTodo}`, {
    params: {
      user: loginUser,
    },
  });
};

export const getAddTodo = async (loginUser, taskName) => {
  return await Axios.post(`${api}${apiAddTodo}`, {
    taskName: taskName,
    user: loginUser,
  });
};

export const getClickCompleted = async (id, targetedStatus) => {
  return await Axios.post(`${api}${apiClickComplete}`, {
    taskId: id,
    isCompleted: targetedStatus,
  });
};

export const getClickFavourite = async (id, targetedStatus) => {
  return await Axios.post(`${api}${apiClickFavourite}`, {
    taskId: id,
    isFavorite: targetedStatus,
  });
};
