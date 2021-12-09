import React, { useEffect, useState } from "react";

import { observer } from "mobx-react";

import CustomButton from "../../button/CustomButton.component";

import { opsStore } from "../../../stores/opsStore";
import {
  InputGroup,
  Input,
  Form,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { checkInput } from "../../../common/utils/checkInput";

const OpsConfirm = (): JSX.Element => {
  const [eqNum, setEqNum] = useState<number>();
  const [isOpen, setIsOpen] = useState(false);
  const [greater, setGreater] = useState(true);

  return (
    <div>
      <span className="lead mt-2 d-block">
        {eqNum! > 0 && opsStore.filteredNumsArray.length
          ? opsStore.filteredNumsArray.join(", ")
          : opsStore.numsArray.join(", ")}
      </span>

      <CustomButton
        title="По возрастанию"
        className="mt-2 me-2"
        handleClick={() => {
          opsStore.clearFilteredArray();
          opsStore.sortAsc();
        }}
      />
      <CustomButton
        title="По убыванию"
        className="mt-2 ms-2"
        handleClick={() => {
          opsStore.clearFilteredArray();
          opsStore.sortDesc();
        }}
      />
      <Form>
        <InputGroup className="mt-2 w-70 mx-auto">
          <ButtonDropdown
            toggle={function noRefCheck() {}}
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <DropdownToggle caret>
              {greater ? "Больше, чем" : "Меньше, чем"}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Выберите вариант сравнения</DropdownItem>
              <DropdownItem
                onClick={() => {
                  setGreater(true);
                }}
              >
                Больше, чем
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  setGreater(false);
                }}
              >
                Меньше, чем
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <Input
            type="text"
            value={eqNum ? eqNum : ""}
            name="eqNum"
            onChange={(e) => {
              if (!checkInput(e.target.value)) {
                setEqNum(parseInt(e.target.value));
              }
              if (Number.isNaN(parseInt(e.target.value))) {
                setEqNum(0);
              }
            }}
          />
          <Button
            outline
            onClick={() => {
              if (greater) {
                opsStore.greaterThan(eqNum!);
                return;
              }
              opsStore.lesserThan(eqNum!);
            }}
          >
            Сравнить
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default observer(OpsConfirm);
