export const changeLoadingStatus = (targetedStatus) => {
  return {
    type: "changeLoadingStatus",
    payload: { targetedStatus },
  };
};

export const changeErrorStatus = (targetedStatus) => {
  return {
    type: "changeErrorStatus",
    payload: { targetedStatus },
  };
};

export const changeLoadingClickCompleteStatus = (targetedStatus) => {
  return {
    type: "changeLoadingClickCompleteStatus",
    payload: { targetedStatus },
  };
};

export const changeErrorClickCompleteStatus = (targetedStatus) => {
  return {
    type: "changeErrorClickCompleteStatus",
    payload: { targetedStatus },
  };
};

export const changeLoadingClickFavouriteStatus = (targetedStatus) => {
  return {
    type: "changeLoadingClickFavouriteStatus",
    payload: { targetedStatus },
  };
};

export const changeErrorClickFavouriteStatus = (targetedStatus) => {
  return {
    type: "changeErrorClickFavouriteStatus",
    payload: { targetedStatus },
  };
};

export const changeLoadingAddTodoStatus = (targetedStatus) => {
  return {
    type: "changeLoadingAddTodoStatus",
    payload: { targetedStatus },
  };
};

export const changeErrorAddTodoStatus = (targetedStatus) => {
  return {
    type: "changeErrorAddTodoStatus",
    payload: { targetedStatus },
  };
};

export const changeReloadCount = (reloadCount) => {
  return {
    type: "changeReloadCount",
    payload: { reloadCount },
  };
};
