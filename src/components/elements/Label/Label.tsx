import { LabelStyled } from "./Label.Styled";
import type { LabelProps } from "./Label.Types";

export const Label = ({ htmlFor, title }: LabelProps) => {
  return <LabelStyled htmlFor={htmlFor}>{title}</LabelStyled>;
};
