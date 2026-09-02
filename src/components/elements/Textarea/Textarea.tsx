import { forwardRef } from "react";
import type { TextareaProps } from "./Textarea.types";
import { TextareaStyled } from "./Textarea.Styled";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { name, id, placeholder, rows, maxLength, onChange, onBlur, value },
    ref,
  ) => {
    return (
      <TextareaStyled
        ref={ref}
        name={name}
        id={id}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    );
  },
);
