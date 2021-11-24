import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import { userStore } from "../../store/user";

const LoginPage = observer((): JSX.Element => {
  return (
    <Container>
      <Row>
        <Form>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите email"
              onChange={(e) => (userStore.user.userEmail = e.target.value)}
              value={userStore.user.userEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Введите пароль"
              onChange={(e) => (userStore.user.password = e.target.value)}
              value={userStore.user.password}
            />
          </Form.Group>
          {userStore.user.userEmail && userStore.user.password ? (
            <Button
              href="/add"
              variant="success"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                userStore.login(
                  userStore.user.userEmail,
                  userStore.user.password
                );
              }}
            >
              Войти
            </Button>
          ) : (
            <Button variant="secondary" type="submit" disabled>
              Войти
            </Button>
          )}
        </Form>
      </Row>
    </Container>
  );
});

export default LoginPage;
