import { ButtonStyled } from "./Button.Styled";
import type { ButtonProps } from "./Button.types";

export const Button = ({ textValue, onClick }: ButtonProps) => {
  return <ButtonStyled onClick={onClick}>{textValue}</ButtonStyled>;
};
