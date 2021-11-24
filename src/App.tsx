import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import AddPage from "./pages/add/add-page";
import LoginPage from "./pages/login/login-page";

import { userStore } from "./store/user";

const App = (): JSX.Element => {
  return (
    <Router>
      <div>
        <Header currentUser={userStore.user.loggedIn ? true : false} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add" component={AddPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
