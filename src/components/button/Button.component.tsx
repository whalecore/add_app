import React from "react";

import { Button } from "reactstrap"; 

interface CustomButtonProps {
  title: string;
  handleClick(): void;
}

const CustomButton = ({ title, handleClick }: CustomButtonProps) => {
  return <Button onClick={handleClick}>{title}</Button>;
};

export default CustomButton;
