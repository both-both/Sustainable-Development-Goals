import styled from "styled-components";
import type { DivProps } from "../../types/types";

export const DivStyled = styled.div<DivProps>`
  .main-container {
    width: ${({ width }) => width || "80%"};
    height: ${({ height }) => height};
    border: solid;
  }
`;
