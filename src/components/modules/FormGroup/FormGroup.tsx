import { FormGroupStyled } from "./FormGroup.Styled";
import type { FormGroupProps } from "./FormGroup.types";

export const FormGroup = ({ children }: FormGroupProps) => {
  return <FormGroupStyled>{children}</FormGroupStyled>;
};
