import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  Spinner,
} from "react-bootstrap";

import AddInfo from "../../components/info-card/AddInfo";

import { store } from "../../App";
import { resStore } from "../../App";
import CalcCard from "../../components/calc-card/CalcCard";
import StepsCard from "../../components/steps-card/StepsCard";
import LoadingModal from "../../components/loadingModal/LoadingModal";
import ResultsCard from "../../components/results-card/ResultsCard";

const OperationPage = observer((): JSX.Element => {
  const [index, setIndex] = useState(0);

  const title = () => {
    switch (index) {
      case 0:
        return <h3 className="mt-2">Ввод данных</h3>;
      case 1:
        return <h3 className="mt-2">Подтверждение данных</h3>;
      case 2:
        return <h3 className="mt-2">Расчет</h3>;
      case 3:
        return <h3 className="mt-2">Результат</h3>;
      default:
        return;
    }
  };

  useEffect(() => {
    if (index === 2) {
      setTimeout(() => {
        setIndex(3);
      }, 5600);
    }
  }, [index]);

  const backButton = () => {
    if (index === 0) {
      return (
        <Button className="me-3" variant="outline-secondary" disabled>
          Назад
        </Button>
      );
    } else if (index === 3) {
      return (
        <Button
          onClick={() => {
            setIndex(0);
            resStore.clearNumbersArray();
            
          }}
          className="me-3"
          variant="outline-secondary"
        >
          Заново
        </Button>
      );
    } else {
      <Button
        onClick={() => {
          if (index === 0) {
            return;
          }
          setIndex(index - 1);
        }}
        className="me-3"
        variant="outline-secondary"
      >
        Назад
      </Button>;
    }
  };

  return (
    <Container fluid>
      {index === 2 ? (
        <LoadingModal onShow={true} keyboardStatus={false} />
      ) : null}
      <Row className="d-xs-block vh-100">
        <Col className="border-1 border rounded-3 text-center d-sm-none d-md-block" md="6">
          <AddInfo currentUser={store.userData.email} />
        </Col>
        <Col className="border-1 border rounded-3 text-center" md="6">
          {title()}
          <Carousel
            controls={false}
            indicators={false}
            activeIndex={index}
            variant="dark"
            className="ms-4"
          >
            <Carousel.Item>
              <CalcCard />
            </Carousel.Item>
            <Carousel.Item>
              <StepsCard />
            </Carousel.Item>
            <Carousel.Item>
              <Spinner
                animation="border"
                className="mt-4 mb-3 ms-auto me-auto"
              />
            </Carousel.Item>
            <Carousel.Item>
              <ResultsCard />
            </Carousel.Item>
          </Carousel>
          <div className="mt-3">
            {backButton()}
            {resStore.numbers.length === 0 || index === 3 ? (
              <Button variant="outline-secondary" className="me-5" disabled>
                Далее
              </Button>
            ) : (
              <Button
                onClick={() => {
                  if (index === 3) {
                    return;
                  }
                  setIndex(index + 1);
                }}
                className="me-5"
                variant="outline-secondary"
              >
                Далее
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
});

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
