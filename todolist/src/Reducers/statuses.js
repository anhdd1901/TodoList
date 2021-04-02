const initialState = {
  isLoading: true,
  isError: false,
  reloadCount: 0,
  isLoadingClickComplete: false,
  isErrorClickComplete: false,
  isLoadingClickFavourite: false,
  isErrorClickFavourite: false,
  isLoadingAddTodo: false,
  isErrorAddTodo: false,
};

export default function statuses(state = initialState, action) {
  switch (action.type) {
    case "changeLoadingStatus": {
      return { ...state, isLoading: action.payload.targetedStatus };
    }

    case "changeErrorStatus": {
      return { ...state, isError: action.payload.targetedStatus };
    }

    case "changeReloadCount": {
      return { ...state, reloadCount: action.payload.reloadCount };
    }

    case "changeLoadingClickCompleteStatus": {
      return {
        ...state,
        isLoadingClickComplete: action.payload.targetedStatus,
      };
    }
    case "changeErrorClickCompleteStatus": {
      return {
        ...state,
        isErrorClickComplete: action.payload.targetedStatus,
      };
    }
    case "changeLoadingClickFavouriteStatus": {
      return {
        ...state,
        isLoadingClickFavourite: action.payload.targetedStatus,
      };
    }
    case "changeErrorClickFavouriteStatus": {
      return {
        ...state,
        isErrorClickFavourite: action.payload.targetedStatus,
      };
    }
    case "changeLoadingAddTodoStatus": {
      return {
        ...state,
        isLoadingAddTodo: action.payload.targetedStatus,
      };
    }
    case "changeErrorAddTodoStatus": {
      return {
        ...state,
        isErrorAddTodo: action.payload.targetedStatus,
      };
    }

    default: {
      return state;
    }
  }
}
