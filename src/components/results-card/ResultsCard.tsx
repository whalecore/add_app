// Компонент для отображения результатов

import React from "react";
import { observer } from "mobx-react";

import { Card, Table } from "react-bootstrap";

import { resStore } from "../../App";

const ResultsCard = observer((): JSX.Element => {
  const sum = resStore.sumNumbers();

  return (
    <Card className="w-100">
      <Card.Title className="mt-2">Результат вычисления</Card.Title>
      <Card.Body>
        <Table width="100px" className="float-start" striped bordered hover>
          <thead>
            <tr>
              <th>Число</th>
            </tr>
          </thead>
          {/* Выдаем результаты в виде двух таблиц, если в строчке число больше 10, то оно будет выделено зеленым цветом */}
          <tbody>
            {resStore.numbers.map((number) => {
              return (
                <tr key={number}>
                  {number > 10 ? <td style={{ color: "green" }}>{number}</td> : <td>{number}</td>}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Table className="float-end" striped bordered hover>
          <thead>
            <tr>
              <th>Результат сложения</th>
            </tr>
          </thead>
          <tbody>
            {/* Если в строчке число больше 10, то оно будет выделено зеленым цветом */}
            <tr>{sum > 10 ? <td style={{ color: "green" }}>{sum}</td> : <td>{sum}</td>}</tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
});

export default ResultsCard;
