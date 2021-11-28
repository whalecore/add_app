import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { Form, Button } from "react-bootstrap";

import { User } from "../../store/userStore";

interface SignInProps {
  onSubmit: Function;
}

const SignIn = observer((props: SignInProps): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User>({
    email: "",
    password: "",
    isLogged: false,
  });

  return (
    <div className="d-md-flex justify-content-evenly">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(currentUser);
        }}
        className="mt-5 mx-auto"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ваш Email</Form.Label>
          <Form.Control
            onChange={(e) => {
              const { name, value } = e.target;
              setCurrentUser((prevState) => {
                return {
                  ...prevState,
                  [name]: value,
                };
              });
            }}
            name="email"
            placeholder="Адрес Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            onChange={(e) => {
              const { name, value } = e.target;
              setCurrentUser((prevState) => {
                return {
                  ...prevState,
                  [name]: value,
                };
              });
            }}
            name="password"
            type="password"
            placeholder="Пароль"
          />
        </Form.Group>
        {currentUser.email && currentUser.password ? (
          <Button variant="success" type="submit">
            Вход
          </Button>
        ) : (
          <Button variant="secondary" type="submit" disabled>
            Введите данные
          </Button>
        )}
      </Form>
    </div>
  );
});

export default SignIn;
