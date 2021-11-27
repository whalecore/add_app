import React, { SyntheticEvent, useState } from "react";
import { observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import OperationPage from "./pages/operation-page/operation-page";
import EntryPoint from "./components/entry-point/EntryPoint";
import Header from "./components/header/Header";
import SignIn from "./components/sign-in/Sign-in";

import { User, userStore } from "./store/userStore";

import resultsStore from "./store/resultsStore";

export const resStore = resultsStore();

export const store = userStore();

const App = observer((): JSX.Element => {
  const handleSubmit = (user: User) => {
    store.signin(user);
  };

  const handleSignOut = (user: User) => {
    store.signout(user);
  };

  return (
    <Router>
      <Header logOut={handleSignOut} currentUser={store.userData} />
      <Switch>
        <Route exact path="/" component={EntryPoint} />
        <Route path="/signin">
          {store.userData.isLogged ? (
            <Redirect to="/add" />
          ) : (
            <SignIn onSubmit={handleSubmit} />
          )}
        </Route>
        <Route path="/add">
          {store.userData.isLogged ? <OperationPage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
});

export default App;
