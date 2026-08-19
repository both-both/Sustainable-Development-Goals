import type { SubjectProps } from "../../types/types";
import { SubjectCardStyled } from "./SubjectCardStyled";

export const SubjectCard = ({ title, color }: SubjectProps) => (
  <SubjectCardStyled $bgColor={color}>
    <h3>{title}</h3>
  </SubjectCardStyled>
);
