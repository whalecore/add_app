import React from "react";
import { observer } from "mobx-react";

import { Card, Table } from "react-bootstrap";

import { resStore } from "../../App";

const ResultsCard = observer(() => {
  return (
    <Card>
      <Card.Title className="mt-2">Результат вычисления</Card.Title>
      <Card.Body>
        <Table width="100px" className="float-start" striped bordered hover>
          <thead>
              <tr>
            <th>Число</th>
            </tr>
          </thead>
          <tbody>
            {resStore.numbers.map((number) => {
              return (
                <tr key={number}>
                  <td >{number}</td>
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
                <tr>
                    <td>
                        {resStore.sumNumbers()}
                    </td>
                </tr>
            </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
});

export default ResultsCard;
