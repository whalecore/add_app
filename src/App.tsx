import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { observer } from "mobx-react";

import { userStore } from "./stores/userStore";

import HomePage from "./pages/home/Home.page";
import SignUp from "./components/signup/SignUp.component";
import Header from "./components/header/Header.component";
import OpsPage from "./pages/ops/Ops.page";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/add_app" />} />
        <Route path="/add_app" element={<HomePage />} />
        <Route path="/ops" element={userStore.userData.isLogged ? <OpsPage /> : <Navigate to="/signup" />} /> 
        <Route path="/signup" element={userStore.userData.isLogged ? <Navigate to="/add_app" /> : <SignUp />} />
      </Routes>
    </Router>
  );
};

export default observer(App);
