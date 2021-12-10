import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  NavItem,
} from "reactstrap";

import { userStore } from "../../stores/userStore";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const loggedIn = (): JSX.Element => {
    return userStore.userData.isLogged ? (
      <NavLink
        onClick={() => {
          userStore.signout();
        }}
        tag={Link}
        to="/add_app"
      >
        Выйти из аккаунта
      </NavLink>
    ) : (
      <NavLink tag={Link} to="/signup">
        Войти в аккаунт
      </NavLink>
    );
  };

  return (
    <Navbar className="mb-3" color="light" expand="md" light>
      <NavbarBrand tag={Link} to="/add_app">сложение</NavbarBrand>
      <NavbarToggler
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/ops">
              К сложению
            </NavLink>
          </NavItem>
          <NavItem>{loggedIn()}</NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default observer(Header);
