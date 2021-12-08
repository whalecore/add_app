import React, { useState } from "react";

import CustomButton from "../../components/button/Button.component";
import OpsItem from "../../components/ops-item/OpsItem.component";

import { opsItems } from "../../common/opsItems";

import { opsStore } from "../../stores/opsStore";

const OpsPage = () => {
  const [itemIndex, setItemIndex] = useState<number>(0);

  console.log(itemIndex);
  const decItem = (): void => {
    if (itemIndex === 0) return;
    setItemIndex(itemIndex - 1);
  };

  const incItem = (): void => {
    if (itemIndex === 3) return;
    setItemIndex(itemIndex + 1);
  };

  // TODO:
  // рендер карточки в зависимости от условий + взаимодействие с состоянием из opsStore

  return (
    <div>
      <OpsItem
        title={opsItems[itemIndex].content.title}
        body={opsItems[itemIndex].content.body}
      />
      <div className="mx-auto">
        <CustomButton title="Назад" handleClick={decItem} />
        <CustomButton title="Далее" handleClick={incItem} />
      </div>
    </div>
  );
};

export default OpsPage;
