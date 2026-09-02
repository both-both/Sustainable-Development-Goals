import { LabelStyled } from "./Label.Styled";
import type { LabelProps } from "./Label.Types";

export const Label = ({ htmlFor, className, children }: LabelProps) => {
  return (
    <LabelStyled htmlFor={htmlFor} className={className}>
      {children}
    </LabelStyled>
  );
};
