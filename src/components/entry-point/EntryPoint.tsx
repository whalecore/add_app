// Компонент для первой страницы приложения
import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import { Button, Container } from "react-bootstrap";

interface EntryPointProps {
  loggedIn: boolean;
}

const EntryPoint = observer((props: EntryPointProps): JSX.Element => {
  return (
    <Container className="py-5 mt-3 border text-dark rounded-3">
      <h1>Операция "Сложение"</h1>
      <p className="col-md-8 fs-4 lead">
        Здесь вы сможете сложить любые числа. Одно, два или сколько вам
        потребуется - сложение еще никогда не было таким простым!
      </p>
      {/* Если юзер залогинен, то кнопка будет вести на страницу сложения, если нет - на страницу входа */}
      {props.loggedIn ? (
        <Link to="/add">
          <Button size="lg" variant="outline-secondary">
            К операции сложения
          </Button>
        </Link>
      ) : (
        <Link to="/signin">
          <Button size="lg" variant="outline-secondary">
            Вход
          </Button>
        </Link>
      )}
    </Container>
  );
});

export default EntryPoint;
