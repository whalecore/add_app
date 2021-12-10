import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

import CustomButton from "../button/CustomButton.component";
import OpsItem from "../ops-item/OpsItem.component";

import OpsConfirm from "../ops-item/ops-field/OpsConfirm";
import LoadingModal from "../loading-modal/LoadingModal.component";
import OpsEnter from "../ops-item/ops-field/OpsEnter";
import OpsResult from "../ops-item/ops-field/OpsResult";

import { opsItems } from "../../common/opsItems";

import { opsStore } from "../../stores/opsStore";
import { Helmet } from "react-helmet";

const OpsIter = () => {
  const [itemIndex, setItemIndex] = useState<number>(0);

  useEffect(() => {
    if (itemIndex === 2) {
      setTimeout(() => {
        setItemIndex(3);
      }, 5600);
    }
  });

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
        return (
          <React.Fragment>
            <Helmet>
              <title>Ввод данных</title>
            </Helmet>
            <OpsEnter />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <Helmet>
              <title>Подтвердите данные</title>
            </Helmet>
            <OpsConfirm />
          </React.Fragment>
        );
      case 2:
        return (
          <Helmet>
            <title>Расчет</title>
          </Helmet>
        );
      case 3:
        return (
          <React.Fragment>
            <Helmet>
              <title>Результат</title>
            </Helmet>
            <OpsResult />
          </React.Fragment>
        );
    }
  };

  const backButton = (): JSX.Element => {
    if (itemIndex === 1) {
      return (
        <CustomButton
          className="me-2"
          title="Назад"
          handleClick={() => {
            decItem();
            opsStore.cleaArray();
            opsStore.clearFilteredArray();
          }}
        />
      );
    } else if (itemIndex === 3) {
      return (
        <CustomButton
          className="me-2"
          title="Заново"
          handleClick={() => {
            setItemIndex(0);
          }}
        />
      );
    }
    return (
      <CustomButton
        className={`me-2 ${itemIndex === 0 ? "disabled" : ""}`}
        title="Назад"
        handleClick={decItem}
      />
    );
  };

  return (
    <React.Fragment>
      {itemIndex === 2 && <LoadingModal onShow={true} keyboardStatus={false} />}
      <OpsItem
        title={opsItems[itemIndex].content.title}
        body={opsItems[itemIndex].content.body}
      >
        {renderContent()}
      </OpsItem>
      <div className="mx-auto mt-3 d-flex justify-content-center">
        {backButton()}
        <CustomButton
          className={`ms-2 ${
            opsStore.numsArray.length < 2 || itemIndex === 3 ? "disabled" : ""
          }`}
          title="Далее"
          handleClick={incItem}
        />
      </div>
    </React.Fragment>
  );
};

export default observer(OpsIter);
