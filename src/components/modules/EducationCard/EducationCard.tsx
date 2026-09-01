import type { EducationProps } from "./Education.types";
import { EducationCardStyled } from "./EducationCard.Styled";

export const EducationCard = ({ title, color }: EducationProps) => (
  <EducationCardStyled $bgColor={color}>
    <h2>{title}</h2>
  </EducationCardStyled>
);
