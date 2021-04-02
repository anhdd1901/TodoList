export const handleChangeCompletedListShownStatus = (targetedStatus) => {
  return {
    type: "handleChangeCompletedListShownStatus",
    payload: {
      targetedStatus,
    },
  };
};

export const handleChangeUncompletedListShownStatus = (targetedStatus) => {
  return {
    type: "handleChangeUncompletedListShownStatus",
    payload: {
      targetedStatus,
    },
  };
};
