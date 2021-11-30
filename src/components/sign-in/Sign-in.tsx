// Компонент для входа в аккаунт. Т.к. не реализована регистрация, то войти можно при любом пароле

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react-lite";

import { Form, Button } from "react-bootstrap";

import { User } from "../../store/userStore";

// Определеяем интерфейс для передачи пропсов в функцию
interface SignInProps {
  onSubmit: Function;
}

const SignIn = observer((props: SignInProps): JSX.Element => {
  // Определяем юзера из полей в локальное состояние для дальнейшей передачи во внешнее состояние
  const [currentUser, setCurrentUser] = useState<User>({
    email: "",
    password: "",
    isLogged: false,
  });
  // Состояние для вывода текста ошибки при некорректном вводе email адреса
  const [emailError, setEmailError] = useState("");

  const emailHandler = (e: any) => {
    const { name, value } = e.target;
    // Определяем маску для совпадения со стандартным email адресом в формате <user>@<example>.<com>
    const regexp = new RegExp(
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    // Если введенный email не совпадает с вышеописанной маской, то в состояние помещаем текст ошибки, который
    // выведем внутри компонента
    if (!regexp.test(String(value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      // В ином случае очистим текст ошибки и проставим данные в поля состояния
      setEmailError("");
      setCurrentUser((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  return (
    <div className="d-md-flex justify-content-evenly">
      <Helmet>
        <title>Вход</title>
      </Helmet>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          // Используем полученный метод из пропсов для входа и сохранения информации во внешнем состоянии
          props.onSubmit(currentUser);
        }}
        className="mt-5 mx-auto"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ваш Email</Form.Label>
          <Form.Control
            onChange={emailHandler}
            name="email"
            placeholder="Адрес Email"
          />
          {/* Если ошибка есть, то выведем ее */}
          {emailError ? (
            <Form.Text style={{ color: "red" }}>{emailError}</Form.Text>
          ) : null}
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
        {/* Если в поля email и пароль было что-то введено, а также в переменной состояния ошибки ничего нет, то активируем кнопку */}
        {currentUser.email.length > 0 &&
        currentUser.password &&
        emailError === "" ? (
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
