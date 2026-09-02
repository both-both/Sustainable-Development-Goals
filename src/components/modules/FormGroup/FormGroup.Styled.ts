import styled from "styled-components";

export const FormGroupStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem 0 0.3rem;

  div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    flex: 1;
  }

  & Button {
    margin-left: auto;
  }
`;
