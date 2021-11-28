import React, { useState } from "react";
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

const CalcCard = observer(() => {
  const [num, setNum] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [additionalNum, setAdditionalNum] = useState(0);
  const [lockForm, setLockForm] = useState(false);

  return (
    <Card className="mt-4 ms-3" style={{ width: "300px" }}>
      <Card.Body>
        <Card.Title>Введите числа по одному в поле ниже</Card.Title>
        <Card.Body>
          <Card.Text>
            Добавленные вами числа: <br />
            {resStore.numbers.join(" + ")}
          </Card.Text>
          <InputGroup size="sm" className="mt-1">
            {lockForm ? (
              <FormControl disabled />
            ) : (
              <FormControl
                value={num}
                name="addNumOne"
                onChange={(e) => {
                  const val = parseInt(e.target.value);

                  setNum(Number.isNaN(val) ? 0 : val);
                }}
              />
            )}{" "}
            <span className="me-1 ms-1">+</span>
            {lockForm ? (
              <FormControl disabled />
            ) : (
              <FormControl
                value={numTwo}
                name="addNumTwo"
                onChange={(e) => {
                  const val = parseInt(e.target.value);

                  setNumTwo(Number.isNaN(val) ? 0 : val);
                }}
              />
            )}
          </InputGroup>

          {lockForm ? (
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
              {null}
            </DropdownButton>
          )}
        </Card.Body>
      </Card.Body>
    </Card>
  );
});

export default CalcCard;
