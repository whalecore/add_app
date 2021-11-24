import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import { userStore } from "../../store/user";

interface HeaderProps {
  currentUser: boolean;
}

const Header = observer((props: HeaderProps): JSX.Element => {
  return (
    <Navbar bg="secondary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" style={{ marginLeft: "20px" }}>
          Сложение
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/add">Сложить</Nav.Link>
          {props.currentUser ? (
            <Nav.Link href="/" onClick={() => userStore.logout}>
              Выйти
            </Nav.Link>
          ) : (
            <Nav.Link href="/login">Войти</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default Header;
