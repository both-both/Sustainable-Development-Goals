import styled from "styled-components";
import { resetList } from "../../../styled/mixins";

export const GoalCardStyled = styled.li<{ color: string }>`
  ${resetList}

  background-color: #${(props) => props.color};
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  aspect-ratio: 1 / 1;
  padding: 0.75rem;

  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: auto 1fr;
  max-height: 11rem;

  div:first-child {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    text-align: center;
  }
  div:nth-child(2) {
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding-left: 0.5rem;
    padding-top: 0.2rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.1rem;
    text-align: left;
    font-weight: normal;
    line-height: 1.1;
  }

  div:nth-child(3) {
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  svg {
    width: 55%;
    height: 55%;
    fill: ${({ theme }) => theme.colors.light};
  }
`;
