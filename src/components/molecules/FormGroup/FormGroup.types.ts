import type { ChangeEvent } from "react";

export type FormGroupProps = {
  name: string;
  title: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
