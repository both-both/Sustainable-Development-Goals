import type { DivProps } from "../../types/types";
import { DivStyled } from "./Div.Styled";

export const Div = ({ children, className, as }: DivProps) => {
  return (
    <DivStyled as={as} className={className}>
      {children}
    </DivStyled>
  );
};
