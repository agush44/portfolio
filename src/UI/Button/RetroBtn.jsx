import { Button } from "./RetroBtn.styles";

const RetroBtn = ({ children }) => {
  return (
    <div>
      <Button>{children}</Button>
    </div>
  );
};

export default RetroBtn;
