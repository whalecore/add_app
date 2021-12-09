import React, { useState } from "react";

import CustomButton from "../../button/CustomButton.component";

import { opsStore } from "../../../stores/opsStore";
import { InputGroup, Input, Form, Button } from "reactstrap";
import { checkInput } from "../../../common/checkInput";

const OpsConfirm = (): JSX.Element => {
  const [eqNum, setEqNum] = useState<number>();

  return (
    <React.Fragment>
      <br />
      <span className="lead mt-2">
        {opsStore.filteredNumsArray.length
          ? opsStore.filteredNumsArray.join(", ")
          : opsStore.numsArray.join(", ")}
      </span>
      <br />

      <CustomButton
        title="По возрастанию"
        className="mt-2 me-2"
        handleClick={opsStore.sortAsc}
      />
      <CustomButton
        title="По убыванию"
        className="mt-2 ms-2"
        handleClick={opsStore.sortDesc}
      />
      <Form>
        <InputGroup className="mt-2 w-50 mx-auto">
          <Button
            onClick={() => {
              if (eqNum) {
                opsStore.copyArrayToFiltered();
                opsStore.greaterThan(eqNum);
              }
            }}
          >
            Больше, чем:
          </Button>
          <Input
            type="text"
            value={eqNum}
            onChange={(e) => {
              if (!checkInput(e.target.value)) {
                setEqNum(parseInt(e.target.value));
              }
            }}
          />
        </InputGroup>
        <InputGroup className="mt-2 w-50 mx-auto">
          <Input
            type="text"
            value={eqNum}
            onChange={(e) => {
              if (!checkInput(e.target.value)) {
                setEqNum(parseInt(e.target.value));
              }
            }}
          />
          <Button
            onClick={() => {
              if (eqNum) {
                opsStore.copyArrayToFiltered();
                opsStore.lesserThan(eqNum);
              }
            }}
          >
            Меньше, чем:
          </Button>
        </InputGroup>
      </Form>
    </React.Fragment>
  );
};

export default OpsConfirm;
