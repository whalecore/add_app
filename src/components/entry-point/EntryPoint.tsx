import React from "react";
import { Link } from "react-router-dom";

import { Button, Container } from "react-bootstrap";

const EntryPoint = (): JSX.Element => {
  return (
    <Container className="py-5 mt-3 border text-dark rounded-3" >
      <h1>Операция "Сложение"</h1>
      <p className="col-md-8 fs-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link to="/signin"><Button size="lg" variant='outline-dark'>Вход</Button></Link>
    </Container>
  );
};

export default EntryPoint;
