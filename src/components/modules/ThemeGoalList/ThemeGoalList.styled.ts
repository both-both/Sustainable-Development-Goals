import styled from "styled-components";
import { resetList } from "../../../styled/mixins";

export const ThemeGoalListStyled = styled.div`
  ${resetList}
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  a {
    text-decoration: none;
  }
`;
