import type { ChangeEvent, FormEvent } from "react";

export type CustomGoalFormProps = {
  text: string;
  color: string;
  onTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onColorChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
