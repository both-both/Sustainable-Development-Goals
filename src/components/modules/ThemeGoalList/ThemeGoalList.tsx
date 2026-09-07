import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeGoalListStyled } from "./ThemeGoalList.styled";
import { GoalCard } from "../GoalCard/GoalCard";
import type { GoalProps } from "../GoalCard/GoalCard.types";

export const ThemeGoalList = () => {
  const [apiData, setApiData] = useState<GoalProps[]>([]);
  const { theme_slug } = useParams();

  const getData = async () => {
    const url = `http://localhost:4000/api/goals/bytheme/${theme_slug}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      setApiData(data);
    }
  };

  useEffect(() => {
    getData();
  }, [theme_slug]);

  return (
    <ThemeGoalListStyled>
      {apiData &&
        apiData.map((item, index) => {
          return (
            <Link to={`/themes/${theme_slug}/${item.id}`} key={index}>
              <GoalCard
                id={Number(item.id)}
                title={item.title}
                color={item.color}
                icon={item.icon}
              />
            </Link>
          );
        })}
    </ThemeGoalListStyled>
  );
};
