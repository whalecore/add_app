import React from "react";
import { observer } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";

import AddInfo from "../../components/info-card/AddInfo";

import { store } from "../../App";
import CalcCard from "../../components/calc-card/CalcCard";

const OperationPage = (): JSX.Element => {
  return (
    <Container fluid>
      <Row>
        <Col
          className="border-1 border rounded-3 text-center min-vh-100"
          md="6"
        >
          <AddInfo currentUser={store.userData.email} />
        </Col>
        <Col
          className="border-1 border rounded-3 text-center min-vh-100"
          md="6"
        >
<CalcCard />
        </Col>
      </Row>
    </Container>
  );
};

export default OperationPage;

// const Add = (props: AddProps): JSX.Element => {
//     return (
//       <Container fluid>
//         <Row>
//           <Col className="border-1 border rounded-3 text-center min-vh-100" md="6">
//             <h3 className="display-6 mt-5">Привет, {props.currentUser}!</h3>
//             <p className="lead">Здесь ты можешь сложить любые числа.</p>
//             <p>Воспользуйся полями в правой части экрана и нажми на кнопку "Далее"</p>
//           </Col>
//           <Col className="border-1 border rounded-3 min-vh-100" md="6">
//             123
//           </Col>
//         </Row>
//       </Container>
//     );
//   };
