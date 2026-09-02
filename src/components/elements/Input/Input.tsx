import { forwardRef } from "react";
import { InputStyled } from "./Input.Styled";
import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, placeholder, onChange, onBlur, value }, ref) => {
    return (
      <InputStyled
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    );
  },
);
