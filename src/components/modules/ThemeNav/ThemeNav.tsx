import { useEffect, useState } from "react";
import type { ThemeProps } from "./ThemeNav.types";
import { ThemeNavStyled } from "./ThemeNav.styled";
import { NavLink } from "react-router-dom";

export const ThemeNav = () => {
  const [apiData, setApiData] = useState<ThemeProps[]>([]);

  const getData = async () => {
    const url = "http://localhost:4000/api/themes";
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      setApiData(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeNavStyled>
      <h3>Vælg tema:</h3>
      <ul>
        {apiData &&
          apiData.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={`/themes/${item.slug}`}>{item.title}</NavLink>
              </li>
            );
          })}
      </ul>
    </ThemeNavStyled>
  );
};
