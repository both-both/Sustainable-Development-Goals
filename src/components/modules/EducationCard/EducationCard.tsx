import type { EducationCardProps } from "./EducationCard.types";
import { EducationCardStyled } from "./EducationCard.Styled";

export const EducationCard = ({ name, color }: EducationCardProps) => (
  <EducationCardStyled $bgColor={color}>
    <h2>{name}</h2>
  </EducationCardStyled>
);
