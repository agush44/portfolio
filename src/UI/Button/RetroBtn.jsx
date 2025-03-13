import { Button } from "./RetroBtn.styles";

const RetroBtn = ({ children, onClick }) => {
  return (
    <div>
      <Button onClick={onClick}>{children}</Button>
    </div>
  );
};

export default RetroBtn;
