import styled from "styled-components";

export const SubjectCardStyled = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  padding: 1.5rem;
`;
