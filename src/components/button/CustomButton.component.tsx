import { Button } from "reactstrap";

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

export default CustomButton;
