import React from "react";
import { Helmet } from "react-helmet";

import EntryPoint from "../../components/entry-point/EntryPoint";

import { store } from "../../App";

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Helmet>
        <title>Операция "Сложение"</title>
      </Helmet>
      <EntryPoint loggedIn={store.userData.isLogged} />
    </div>
  );
};

export default HomePage;
