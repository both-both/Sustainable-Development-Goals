import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";
import { FormGroupStyled } from "./FormGroup.Styled";
import type { FormGroupProps } from "./FormGroup.types";

const FormGroup = ({ type, name, placeholder, title }: FormGroupProps) => {
  return (
    <FormGroupStyled>
      <Label htmlFor={name} title={title}></Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </FormGroupStyled>
  );
};

export default FormGroup;
