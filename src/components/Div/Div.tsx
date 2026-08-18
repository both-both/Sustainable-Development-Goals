import type { DivProps } from "../../types/types";
import { DivStyled } from "./Div.styled";

export const div = ({
  children,
  className,
  height,
  width,
  color,
}: DivProps) => {
  return <DivStyled height={height}>{children}</DivStyled>;
};
