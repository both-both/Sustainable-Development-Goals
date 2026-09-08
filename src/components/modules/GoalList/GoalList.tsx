import { Link } from "react-router-dom";
import { GoalCard } from "../GoalCard/GoalCard";
import { GoalListStyled } from "./GoalList.Styled";
import { useFetch } from "../../../hooks/useFetch";
import type { GoalListResponse } from "./GoalList.Types";
import { endpoints } from "../../../data/Endpoints";
import { Loader } from "../../elements/Loader/Loader";
import Verdensmål from "../../../assets/images/Verdensmål.png";

export const GoalList = () => {
  const { data, isLoading, error } = useFetch<GoalListResponse>(
    endpoints.goals,
  );

  if (isLoading) {
    return (
      <Loader
        visible={true}
        height="80"
        width="80"
        color="#2BBBDE"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <GoalListStyled>
      {data &&
        data.map((item) => (
          <Link key={item.id} to={`/goals/${item.id}`}>
            <GoalCard
              id={item.id}
              title={item.title}
              color={item.color}
              icon={item.icon}
            />
          </Link>
        ))}
      <img src={Verdensmål} />
    </GoalListStyled>
  );
};
