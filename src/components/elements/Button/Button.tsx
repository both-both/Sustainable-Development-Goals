import { ButtonStyled } from "./Button.Styled";
import type { ButtonProps } from "./Button.types";

export const Button = ({ textValue, onClick, type }: ButtonProps) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {textValue}
    </ButtonStyled>
  );
};
