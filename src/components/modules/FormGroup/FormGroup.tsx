import { FormGroupStyled } from "./FormGroup.Styled";
import type { FormGroupProps } from "./FormGroup.types";

export const FormGroup = ({ children, className }: FormGroupProps) => {
  return <FormGroupStyled>{children}</FormGroupStyled>;
};
