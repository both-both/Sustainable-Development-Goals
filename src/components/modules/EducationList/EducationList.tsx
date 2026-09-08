import { EducationListStyled } from "./EducationList.Styled";
import { EducationCard } from "../EducationCard/EducationCard";
import { Loader } from "../../elements/Loader/Loader";

import { useFetch } from "../../../hooks/useFetch";
import { endpoints } from "../../../data/Endpoints";
import type { EducationListResponse } from "./EducationList.types";

export const EducationList = () => {
  const { data, isLoading, error } = useFetch<EducationListResponse>(
    endpoints.education,
  );
  console.log(isLoading);
  if (isLoading) {
    return (
      <Loader
        visible={isLoading}
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

  return (
    <EducationListStyled>
      {data &&
        data.map((item) => (
          <EducationCard key={item.id} name={item.name} color={item.color} />
        ))}
      {error && <p>{error}</p>}
    </EducationListStyled>
  );
};
