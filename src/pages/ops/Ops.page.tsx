import React, { useState } from "react";

import CustomButton from "../../components/button/CustomButton.component";
import OpsItem from "../../components/ops-item/OpsItem.component";

import { opsItems } from "../../common/opsItems";
import OpsEnter from "../../components/ops-item/ops-field/OpsEnter";
import OpsConfirm from "../../components/ops-item/ops-field/OpsConfirm";

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

  const renderContent = () => {
    switch (itemIndex) {
      case 0:
        return <OpsEnter />;
      case 1:
        return <OpsConfirm />;
      case 2:
        return;
      case 3:
        return <div>OpsResult</div>;
    }
  };

  return (
    <div>
      <OpsItem
        title={opsItems[itemIndex].content.title}
        body={opsItems[itemIndex].content.body}
        id={opsItems[itemIndex].id}
      >
        {renderContent()}
      </OpsItem>
      <div className="mx-auto mt-3 d-flex justify-content-center">
        <CustomButton className="me-2" title="Назад" handleClick={decItem} />
        <CustomButton className="ms-2" title="Далее" handleClick={incItem} />
      </div>
    </div>
  );
};

export default OpsPage;
