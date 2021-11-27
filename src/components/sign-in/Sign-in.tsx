import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

import { userStore, User } from "../../store/userStore";

const store = userStore();

const SignIn = observer((): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User>({
    email: "",
    password: "",
    isLogged: false,
  });

  const handleChange = (event: any): void => {
    setCurrentUser((prevUser) => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e: any): void => {
    //   store.signin(currentUser);
    e.preventDefault();
    setCurrentUser((prevState) => {
      return {
        ...prevState,
        isLogged: true,
      };
    });
    store.signin(currentUser);
    console.log(currentUser);
    console.log(store.userData);
  };

  return (
    <div className="d-md-flex justify-content-evenly">
      <form onSubmit={handleSubmit} className="mt-5 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ваш Email</Form.Label>
          <Form.Control
            name="email"
            value={currentUser.email}
            onChange={handleChange}
            type="email"
            placeholder="Адрес Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            value={currentUser.password}
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Пароль"
          />
        </Form.Group>
        {currentUser.email && currentUser.password ? (
          // <Link to="/add">
          <Button variant="success" type="submit">
            Вход
          </Button>
        ) : (
          // </Link>
          <Button variant="secondary" type="submit" disabled>
            Введите данные
          </Button>
        )}
      </form>
      {store.userData.isLogged ? "Logged in!" : "Not logged in"}
    </div>
  );
});

export default SignIn;
