import styled from "styled-components";

export const HeaderStyled = styled.header`
  .blue-bar {
    width: 100%;
    height: 30px;
    background-color: ${({ theme }) => theme.colors["primary"]};
  }
  .header-main {
    width: 80%;
    margin: auto;
    padding: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 100%;
  }
`;
