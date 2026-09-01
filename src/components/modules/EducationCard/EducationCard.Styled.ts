import styled from "styled-components";

export const EducationCardStyled = styled.div<{ $bgColor: string }>`
  background-color: #${(props) => props.$bgColor};
  padding: 1.5rem;
`;
