import { goals } from "../../../data/goals";
import { GoalCard } from "../GoalCard/GoalCard";
import { GoalGridStyled } from "./GoalGrid.Styled";

export const GoalGrid = () => {
  return (
    <GoalGridStyled>
      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          id={goal.id}
          title={goal.title}
          color={goal.color}
          icon={goal.icon}
        />
      ))}
    </GoalGridStyled>
  );
};
