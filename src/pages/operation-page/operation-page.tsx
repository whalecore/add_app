// Основная страница для проведения вычисления

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
  // Состояние для управления текущим положением карусели в теле возвращаемого компонента
  const [index, setIndex] = useState(0);
  // Состояние для передачи в дочерний компонент CalcCard,
  // если состояние истинно - удаляем введенные пользователем числа и очищаем список в состоянии
  const [clear, setClear] = useState(false);

  // Если состояние index равно 2 (3-й слайд карусели - "расчет") и компонент рендерится заново, 
  // то запускаем таймер на 5,6 секунд, чтобы Modal, который висит после перехода к расчету
  // успел показать анимацию загрузки и не давал пользователю доступа к странице
  useEffect(() => {
    if (index === 2) {
      setTimeout(() => {
        setIndex(3);
      }, 5600);
    }
  }, [index]);

  // Определяем функционал и отображение кнопки "Назад" в зависимости от текущего слайда
  const backButton = () => {
    // Если мы на первом слайде, то кнопка назад недоступна
    if (index === 0) {
      return (
        <Button className="me-3" variant="outline-secondary" disabled>
          Назад
        </Button>
      );
      // Если мы на последнем слайде, то кнопка назад становится кнопкой "Заново"
      // и при нажатии очищает набор чисел во внешнем состоянии, а также устанавливает
      // в локальном состоянии clear значение true, которое передается в CalcCard,
      // в результате чего ранее введенные в формы числа сбрасываются
    } else if (index === 3) {
      return (
        <Button
          onClick={() => {
            setIndex(0);
            resStore.clearNumbersArray();
            setClear(true);
          }}
          className="me-3"
          variant="outline-secondary"
        >
          Заново
        </Button>
      );
      // Во всех остальных случаях проверяем, не на первом ли мы слайде, чтобы не увести карусель в пустой экран
      // и при нажатии на кнопку назад сбрасываем во внешнем состоянии массив с числами и очищаем в CalcCard 
      // формы для ввода чисел
    } else {
      return (
        <Button
          onClick={() => {
            if (index === 0) {
              return;
            }
            resStore.clearNumbersArray();
            setClear(true);
            setIndex(index - 1);
          }}
          className="me-3"
          variant="outline-secondary"
        >
          Назад
        </Button>
      );
    }
  };

  return (
    <Container>
      {index === 2 ? (
        <LoadingModal onShow={true} keyboardStatus={false} />
      ) : null}
      <Row className="d-xs-block vh-100">
        <Col
          className="border-1 border rounded-3 text-center d-sm-none d-md-block"
          md="6"
        >
          <AddInfo currentUser={store.userData.email} />
        </Col>
        <Col className="border-1 border rounded-3 text-center" md="6">
          <Carousel
            controls={false}
            indicators={false}
            activeIndex={index}
            variant="dark"
            className="mt-3"
          >
            <Carousel.Item>
              <CalcCard clearOff={setClear} clearAll={clear} />
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
          <div className="ms-5 d-flex justify-content-center mt-3">
            {backButton()}
            {/* Ограничиваем действие кнопки далее - она будет с пропсом disabled в случае, если во внешнее состояние
                с массивом чисел не было передано ни одного значения, либо если мы на последнем слайде */}
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
