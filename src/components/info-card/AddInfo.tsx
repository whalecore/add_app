import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface AddProps {
  currentUser: string;
}

const AddInfo = (props: AddProps): JSX.Element => {
  return (
    <div>
      <h3 className="display-6 mt-5">Привет, {props.currentUser}!</h3>
      <p className="lead">Здесь ты можешь сложить любые числа.</p>
      <p>Воспользуйся полями в правой части экрана и нажми на кнопку "Далее"</p>
    </div>
  );
};

export default AddInfo;
