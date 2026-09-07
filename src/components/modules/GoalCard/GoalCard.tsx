import parse from "html-react-parser/lib/index";
import { GoalCardStyled } from "./GoalCard.Styled";
import type { GoalProps } from "./GoalCard.types";

export const GoalCard = ({ id, title, color, icon }: GoalProps) => {
  return (
    <GoalCardStyled color={color}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{parse(icon)}</div>
    </GoalCardStyled>
  );
};
