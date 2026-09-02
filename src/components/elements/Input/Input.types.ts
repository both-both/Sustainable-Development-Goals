import type { ChangeEvent, FocusEvent } from "react";

export type InputProps = {
  pattern?: string;
  id?: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  value?: string;
  maxLength?: number;
};
