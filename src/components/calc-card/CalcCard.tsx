import React, { useEffect, useState } from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";

import { resStore } from "../../App";

const CalcCard = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log(resStore.numbers);
  }, [num]);

  return (
    <Card style={{ width: "26rem" }}>
      <Card.Body>
        <Card.Title>Введите числа по одному в поле ниже</Card.Title>
        <Card.Body>
          <Card.Text>
            Добавленные вами числа: <br />
            {resStore.numbers.join(', ')}
          </Card.Text>
          <InputGroup size="sm" className="mt-1">
            <FormControl
              value={num}
              name="addNums"
              onChange={(e) => {
                setNum(parseInt(e.target.value));
              }}
            />
            <Button
              onClick={() => {
                resStore.addNumbers(num);
              }}
              variant="outline-secondary"
              id="button-addon1"
            >
              Добавить
            </Button>
          </InputGroup>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default CalcCard;
