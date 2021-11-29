// Навигационная панель для приложения
import React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";
import { User } from "../../store/userStore";

import { maskEmail } from "../../utils/mask-email";

interface HeaderProps {
  currentUser: User;
  logOut: Function;
}

const Header = observer((props: HeaderProps): JSX.Element => {
  return (
    <Container fluid>
      <Navbar bg="light" expand="md">
        <Navbar.Brand style={{ marginLeft: "10px" }} as={Link} to="/">
          Операция "Сложение"
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/add">
              Сложить
            </Nav.Link>
            {/* Если свойство isLogged во внешнем состоянии равно истине, то возвращаем кнопку "выйти из аккаунта" и его логин,
                в ином случае отображаем кнопку "войти" */}
            {props.currentUser.isLogged ? (
              <Nav.Link
                as={Link}
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  props.logOut(props.currentUser);
                }}
              >
                Выйти из аккаунта{" "}
                <Navbar.Text>{maskEmail(props.currentUser.email)}</Navbar.Text>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/signin">
                Войти
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
});

export default Header;
