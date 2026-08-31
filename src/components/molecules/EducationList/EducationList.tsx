import { EducationListStyled } from "./EducationList.Styled";
import { EducationCard } from "../EducationCard/EducationCard";
import { useEffect, useState } from "react";

type Education = {
  id: number;
  name: string;
  color: string;
};
export const EducationList = () => {
  const [data, setData] = useState<Education[]>([]);
  const [error, setError] = useState<string>("");

  const url = "http://localhost:4000/api/education";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData: Education[] = await response.json();
        setData(jsonData);
      } catch (err) {
        setError("Der opstod en fejl, på siden");
      }
    };
    fetchData();
  }, []);

  return (
    <EducationListStyled>
      {data.map((item) => (
        <EducationCard key={item.id} title={item.name} color={item.color} />
      ))}
      {error && <p>{error}</p>}
    </EducationListStyled>
  );
};
