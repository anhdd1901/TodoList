export default function taskList(state = { gotList: [] }, action) {
  switch (action.type) {
    case "handleGetTodoList": {
      return {
        ...state,
        gotList: action.payload.gotList,
      };
    }

    default: {
      return state;
    }
  }
}
