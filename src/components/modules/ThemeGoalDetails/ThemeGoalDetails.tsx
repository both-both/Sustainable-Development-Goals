import { useEffect, useState } from "react";
import { goalProps } from "../GoalCard/GoalCard.types";
import { useParams } from "react-router-dom";

export const ThemeGoalDetails = () => {
  const [apiData, setApiData] = useState<goalProps | null>(null);
  const { goal_id } = useParams();

  const getData = async () => {
    const url = `http://localhost:4000/api/goals/${goal_id}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      setApiData(data);
    }
  };

  useEffect(() => {
    getData();
  }, [goal_id]);

  return (
    <div>
      {apiData && (
        <>
          <h2>{apiData.title}</h2>
          <p>{apiData.byline}</p>
          {apiData.description}
        </>
      )}
    </div>
  );
};
