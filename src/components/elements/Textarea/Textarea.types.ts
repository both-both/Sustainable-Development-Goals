import type { ChangeEvent, FocusEvent } from "react";

export type TextareaProps = {
  name: string;
  id?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  value?: string;
};
