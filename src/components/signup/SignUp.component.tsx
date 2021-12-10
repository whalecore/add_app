import React, { SyntheticEvent, useState } from "react";
import { observer } from "mobx-react";

import { Form, FormGroup, Input, Label } from "reactstrap";

import { UserInterface, userStore } from "../../stores/userStore";
import { checkEmail } from "../../common/utils/checkEmail";
import CustomButton from "../button/CustomButton.component";

const SignUp: React.FC = () => {
  const [userInput, setUserInput] = useState<UserInterface>({
    email: "",
    password: "",
    isLogged: false,
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e: SyntheticEvent): void => {
    const { name, value } = e.target as HTMLTextAreaElement;

    if (name === "email" && !checkEmail(value)) {
      setEmailError("Неправильный адрес email");
    } else if (name === "email" && checkEmail(value)) {
      setEmailError("");
    }

    setUserInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSignIn = (): void => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        isLogged: true,
      };
    });
    if (userInput) userStore.signin(userInput);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        className="w-50"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input
            className="mt-2"
            type="text"
            name="email"
            value={userInput?.email}
            onChange={(e) => {
              handleChange(e);
            }}
            invalid={emailError ? true : undefined}
          />
          <Label for="email">Пароль</Label>
          <Input
            type="password"
            name="password"
            value={userInput?.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <div className="text-center">
            <CustomButton
              title="Войти"
              className={`mt-2 ${
                userInput.email && userInput.password && !emailError
                  ? ""
                  : "disabled"
              }`}
              handleClick={handleSignIn}
            />
          </div>
        </FormGroup>
      </Form>
    </div>
  );
};

export default observer(SignUp);
