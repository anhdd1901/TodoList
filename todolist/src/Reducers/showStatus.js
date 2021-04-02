const initialState = {
  isUncompletedListShown: true,
  isCompletedListShown: true,
};

export default function showStatus(state = initialState, action) {
  switch (action.type) {
    case "handleChangeUncompletedListShownStatus": {
      return {
        ...state,
        isUncompletedListShown: action.payload.targetedStatus,
      };
    }
    case "handleChangeCompletedListShownStatus": {
      return {
        ...state,
        isCompletedListShown: action.payload.targetedStatus,
      };
    }
    default: {
      return state;
    }
  }
}
