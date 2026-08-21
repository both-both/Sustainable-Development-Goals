import { goals } from "../../../data/goals";
import { GoalGridStyled } from "./GoalGrid.Styled";

export const GoalGrid = () => {
  return (
    <GoalGridStyled>
      {goals.map((goal, index) => (
        <img key={index} src={goal.src} alt={goal.alt} />
      ))}
    </GoalGridStyled>
  );
};
