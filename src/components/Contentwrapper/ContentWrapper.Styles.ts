import styled from "styled-components";

export const ContentWrapperStyled = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["secondary"]};
  display: flex;

  h1 {
    width: 80%;
    margin: auto;
    align-items: center;
  }
`;
