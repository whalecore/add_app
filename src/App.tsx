import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { runInAction } from "mobx";

import Add from "./components/add/Add";
import EntryPoint from "./components/entry-point/EntryPoint";
import Header from "./components/header/Header";
import SignIn from "./components/sign-in/Sign-in";

import { userStore } from "./store/userStore";

const store = userStore();

const App = observer((): JSX.Element => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={EntryPoint} />
        <Route path="/signin" component={SignIn} />
        <Route path="/add" component={Add} />
      </Switch>
    </Router>
  );
});

export default App;
