import React from "react";

interface AddProps {
  currentUser: string;
}

const AddInfo = (props: AddProps): JSX.Element => {
  const maskedEmail = (email: string): string => {
    const domainName = email.substr(email.indexOf("@") + 2).replace(/\.\w+/, "");
    const cleanEmail = email.replace(domainName, "*".repeat(domainName.length))
    return cleanEmail;
  }

  return (
    <div>
      <h3 className="display-6 mt-5">Привет, {maskedEmail(props.currentUser)}!</h3>
      <p className="lead">Здесь ты можешь сложить любые числа.</p>
      <p>Воспользуйся полями в правой части экрана и нажми на кнопку "Далее"</p>
    </div>
  );
};

export default AddInfo;
