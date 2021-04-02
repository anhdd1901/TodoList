export default function handleGetTodoList(gotList) {
  return {
    type: "handleGetTodoList",
    payload: {
      gotList,
    },
  };
}
