// Компонент для проведения расчетов

import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";

import {
  Card,
  InputGroup,
  Button,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { resStore } from "../../App";

// Интерфейс для получения пропсов из компонента OperationPage
interface CalcCardProps {
  clearAll: boolean;
  clearOff: Function;
}

const CalcCard = observer((props: CalcCardProps) => {
  // состояния для введения чисел
  // по хорошему стоило сделать список, в который добавлялось бы по числу,
  // однако я решил отложить это до момента, когда все карточки я отрефакторю
  // в один компонент
  const [num, setNum] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [additionalNum, setAdditionalNum] = useState(0);
  // состояние для закрытия форм после введения данных
  const [lockForm, setLockForm] = useState(false);

  // Если из родительского компонента пропсом было передано значение true в clearAll
  // то очищаем формы и разлочиваем их. После срабатывания хука возвращаем значение 
  // в исходное положение
  useEffect(() => {
    if (props.clearAll) {
      setNum(0);
      setNumTwo(0);
      setAdditionalNum(0);
      setLockForm(false);
    }
    return () => {
      props.clearOff(false);
    };
    // eslint-disable-next-line
  }, [props.clearAll]);

  const form = (formNumber: number, numFunc: Function) => {
    if (lockForm && !props.clearAll) {
      return <FormControl value={formNumber} disabled />;
    } else {
      return (
        <FormControl
          value={formNumber}
          name="addNumOne"
          onChange={(e) => {
            const val = parseInt(e.target.value);

            numFunc(Number.isNaN(val) ? 0 : val);
          }}
        />
      );
    }
  };

  return (
    <Card className="w-100">
      <Card.Body>
        <Card.Title>Введите числа по одному в поле ниже</Card.Title>
        <Card.Body>
          <InputGroup size="sm" className="mt-1">
            {form(num, setNum)}
            <span className="me-1 ms-1">+</span>
            {form(numTwo, setNumTwo)}
          </InputGroup>

          {lockForm && props.clearAll ? (
            <Button
              size="sm"
              className="mt-2"
              onClick={() => {
                setNum(0);
                setNumTwo(0);
                setAdditionalNum(0);
                setLockForm(false);
                resStore.clearNumbersArray();
              }}
              variant="outline-secondary"
              id="button-addon1"
            >
              Очистить поля
            </Button>
          ) : (
            <Button
              size="sm"
              className="mt-2"
              onClick={() => {
                resStore.addNumbers(num);
                resStore.addNumbers(numTwo);
                console.log(resStore.numbers);
                setLockForm(true);
              }}
              variant="outline-secondary"
              id="button-addon1"
            >
              Добавить
            </Button>
          )}
          {resStore.numbers.length > 1 ? (
            <DropdownButton
              title="Доп. число?"
              className="mt-2"
              size="sm"
              variant="outline-secondary"
            >
              <InputGroup size="sm">
                <FormControl
                  value={additionalNum}
                  name="additionalNum"
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setAdditionalNum(Number.isNaN(val) ? 0 : val);
                  }}
                  className="mt-2 ms-1 me-1"
                />
              </InputGroup>
              <Dropdown.Item variant="outline-secondary">
                <Button
                  onClick={() => {
                    resStore.addNumbers(additionalNum);
                    setAdditionalNum(0);
                  }}
                  className="mt-2"
                  variant="outline-secondary"
                  size="sm"
                >
                  Добавить доп. число
                </Button>
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <DropdownButton
              title="Доп. число?"
              variant="outline-secondary"
              size="sm"
              className="mt-2"
              disabled
            >
              {/* Компонент не работает без детей внутри */}
              {null}
            </DropdownButton>
          )}
        </Card.Body>
      </Card.Body>
    </Card>
  );
});

export default CalcCard;
