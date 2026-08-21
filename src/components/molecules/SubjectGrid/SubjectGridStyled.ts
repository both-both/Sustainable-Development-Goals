import styled from "styled-components";

export const SubjectGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 3rem 0;

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors["light"]};
    padding: 3rem;
  }
`;
