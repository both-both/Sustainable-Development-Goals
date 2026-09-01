import { Link } from "react-router-dom";
import { goals } from "../../../data/goals";
import { GoalCard } from "../GoalCard/GoalCard";
import { GoalGridStyled } from "./GoalGrid.Styled";

export const GoalGrid = () => {
  return (
    <GoalGridStyled>
      {goals.length === 0 ? (
        <p>Der er ingen verdensmål her</p>
      ) : (
        goals.map((goal) => (
          <Link key={goal.id} to={`/goals/${goal.id}`}>
            <GoalCard
              id={goal.id}
              title={goal.title}
              color={goal.color}
              icon={goal.icon}
            />
          </Link>
        ))
      )}
    </GoalGridStyled>
  );
};
