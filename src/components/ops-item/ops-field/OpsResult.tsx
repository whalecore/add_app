import React from "react";
import { observer } from "mobx-react";

import { Table } from "react-bootstrap";

import { opsStore } from "../../../stores/opsStore";

const OpsResult: React.FC = () => {
  const sum = opsStore.sumNumbers();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Число</th>
        </tr>
      </thead>
      <tbody>
        {opsStore.numsArray.map((num: number, index: number) => {
          return <tr key={index}>
            <td>
              <span style={num > 10 ? { color: "green" } : { color: "black" }}>
                {num}
              </span>
            </td>
          </tr>;
        })}
        <tr>
          <td>
            <strong>ИТОГОВАЯ СУММА: </strong>
            <span style={sum > 10 ? { color: "green" } : { color: "black" }}>
              {sum}
            </span>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default observer(OpsResult);