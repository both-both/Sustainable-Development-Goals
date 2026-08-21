import type { SubjectProps } from "../../../types/types";
import { SubjectCardStyled } from "./SubjectCard.Styled";

export const SubjectCard = ({ title, color }: SubjectProps) => (
  <SubjectCardStyled $bgColor={color}>
    <h2>{title}</h2>
  </SubjectCardStyled>
);
