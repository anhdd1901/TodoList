const users = [
  {
    name: "Admin",
    id: "admin",
    password: "123",
  },
  {
    name: "Đức Anh",
    id: "anhdd",
    password: "321",
  },
  {
    name: "người lạ ơi",
    id: "guest",
    password: "121",
  },
];

export default function login(state = { users: users, user: {} }, action) {
  switch (action.type) {
    case "handleLogin":
      return { ...state, user: action.payload.loginUser };

    default:
      return state;
  }
}
