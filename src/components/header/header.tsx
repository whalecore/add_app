import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";

import { userStore, User } from "../../store/userStore";

const store = userStore();

const Header = observer((): JSX.Element => {
  return (
    <Container>
      <Navbar bg="light" expand="md">
        <Navbar.Brand style={{ marginLeft: "10px" }} as={Link} to="/">
          Операция "Сложение"
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me auto">
            <Nav.Link as={Link} to="/add">
              Сложить
            </Nav.Link>
            {/* {store.users.isLogged ? (
              <Nav.Link
                as={Link}
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  store.signout(store.userData);
                }}
              >
                Выйти из аккаунта {store.userData.email}
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/signin">
                Войти
              </Nav.Link>
            )} */}
            <Nav.Link as={Link} to="/signin">
              Войти
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* {store.users ? "User is logged in!" : "Not logged"} */}
    </Container>
  );
});

export default Header;
