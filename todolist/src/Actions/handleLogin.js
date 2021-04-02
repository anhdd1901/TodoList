export default function handleLogin (loginUser) {
  return {
    type: "handleLogin",
    payload: {
      loginUser,
    },
  };
}
