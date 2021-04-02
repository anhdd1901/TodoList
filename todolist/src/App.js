import Home from "./Page/Home";
import Login from "./Page/Login";
import Profile from "./Page/Profile";
import LoginFailed from "./Page/LoginFailed";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/loginFailed">
          <LoginFailed />
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
