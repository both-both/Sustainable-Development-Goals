export type ButtonProps = {
  textValue: string;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
};
