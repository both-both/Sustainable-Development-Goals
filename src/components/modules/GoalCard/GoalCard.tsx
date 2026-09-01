import parse from "html-react-parser/lib/index";
import { GoalCardStyled } from "./GoalCard.Styled";
import type { goalProps } from "./GoalCard.types";

export const GoalCard = ({ id, title, color, icon }: goalProps) => {
  return (
    <GoalCardStyled color={color}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{parse(icon)}</div>
    </GoalCardStyled>
  );
};
