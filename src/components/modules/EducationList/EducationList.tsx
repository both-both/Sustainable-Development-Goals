import { EducationListStyled } from "./EducationList.Styled";
import { EducationCard } from "../EducationCard/EducationCard";
import { useEffect, useState } from "react";
import { Loader } from "../../elements/Loader/Loader";

type Education = {
  id: number;
  name: string;
  color: string;
};
export const EducationList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Education[]>([]);
  const [error, setError] = useState<string>("");

  const url = "http://localhost:4000/api/education";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData: Education[] = await response.json();
        setTimeout(() => {
          setData(jsonData);
          setIsLoading(false);
        }, 2000);
      } catch (err) {
        setError("Der opstod en fejl, på siden");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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
      {data.map((item) => (
        <EducationCard key={item.id} title={item.name} color={item.color} />
      ))}
      {error && <p>{error}</p>}
    </EducationListStyled>
  );
};
