import { InputStyled } from "./Input.Styled";
import type { InputProps } from "./Input.types";

export const Input = ({
  type,
  name,
  placeholder,
  onChange,
  value,
}: InputProps) => {
  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
