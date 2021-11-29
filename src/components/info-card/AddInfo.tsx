// Заглушка для левой стороны экрана на странице с проведением сложения
import React from "react";

import { maskEmail } from "../../utils/mask-email";

interface AddProps {
  currentUser: string;
}

const AddInfo = (props: AddProps): JSX.Element => {

  return (
    <div>
      <h3 className="display-6 mt-5">
        Привет, {maskEmail(props.currentUser)}!
      </h3>
      <p className="lead">Здесь ты можешь сложить любые числа.</p>
      <p>Воспользуйся полями в правой части экрана и нажми на кнопку "Далее"</p>
    </div>
  );
};

export default AddInfo;
