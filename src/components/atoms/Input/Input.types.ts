import type { ChangeEvent } from "react";

export type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
