import styled from "styled-components";
import type { DivProps } from "../../types/types";

export const DivStyled = styled.div<DivProps>`
  &.main-container {
    width: ${({ width }) => width || "80%"};
    max-width: 1200px;
    height: ${({ height }) => height};
    margin: 3rem auto;
  }

  &.blue-bar {
    width: ${({ width }) => width || "100%"};
    height: 30px;
    background-color: ${({ theme }) => theme.colors["primary"]};
  }
  &.gray-bar {
    width: 100%;
    margin: auto;
    background-color: ${({ theme }) => theme.colors["secondary"]};
  }

  &.subject-card {
    width: 400px;
    height: 220px;
    background-color: gold;
  }
`;
