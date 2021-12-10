import { Button } from "reactstrap";
import { observer } from "mobx-react";

interface CustomButtonProps {
  title: string;
  className?: string;
  handleClick(): void;
}

const CustomButton = ({ title, className, handleClick }: CustomButtonProps) => {
  return (
    <Button className={className} onClick={handleClick}>
      {title}
    </Button>
  );
};

export default observer(CustomButton);
