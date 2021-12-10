import React, { SyntheticEvent, useEffect, useState } from "react";
import { Input } from "reactstrap";

import CustomButton from "../../button/CustomButton.component";

import { opsStore } from "../../../stores/opsStore";
import { checkInput } from "../../../common/utils/checkInput";
import { observer } from "mobx-react";

const OpsEnter = (): JSX.Element => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [tempNum, setTempNum] = useState<number>();

  useEffect(() => {
    opsStore.setNumbers(numbers);

    const listener = (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        handleTempNumAdd();
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  const handleArrayChange =
    (e: SyntheticEvent) =>
    (index: number): void => {
      const { value } = e.target as HTMLTextAreaElement;

      if (!checkInput(value)) {
        setNumbers((prevArr) => {
          prevArr[index] = parseInt(value);
          return [...prevArr];
        });
      }
      return;
    };

  const handleTempNumChange = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLTextAreaElement;

    if (!checkInput(value)) {
      setTempNum(parseInt(value));
    }

    if (Number.isNaN(parseInt(value))) {
      setTempNum(0);
    }
  };

  const handleTempNumAdd = (): void => {
    if (tempNum) setNumbers([...numbers, tempNum]);
    setTempNum(0);
  };

  return (
    <React.Fragment>
      {numbers.map((number, index) => {
        return (
          <Input
            className="mt-1 mb-1"
            type="text"
            value={number ? number : ""}
            key={index}
            onChange={(e) => {
              if (Number.isNaN(parseInt(e.target.value))) e.target.value = "0"
              handleArrayChange(e)(index);
            }}
          />
        );
      })}
      <Input
        type="text"
        value={tempNum ? tempNum : ""}
        onChange={(e) => {
          handleTempNumChange(e);
        }}
      />
      <CustomButton
        title="Добавить"
        className="mt-2"
        handleClick={handleTempNumAdd}
      />
    </React.Fragment>
  );
};

export default observer(OpsEnter);
