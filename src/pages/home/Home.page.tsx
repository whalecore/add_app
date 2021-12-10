import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import { userStore } from "../../stores/userStore";

const HomePage = (): JSX.Element => {
  const renderContent = (): JSX.Element => {
    return userStore.userData.isLogged ? (
      <div>
        <h2>Перейти к сложению</h2>
        <Button tag={Link} to="/ops">
          К сложению
        </Button>
      </div>
    ) : (
      <div>
        <h2>Добро пожаловать!</h2>
        <Button tag={Link} to="/signup">
          Войти
        </Button>
      </div>
    );
  };
  return <div className="mt-2 text-center">{renderContent()}</div>;
};

export default HomePage;
