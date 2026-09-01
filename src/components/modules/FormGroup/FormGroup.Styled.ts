import styled from "styled-components";

export const FormGroupStyled = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0 0.3rem;

  div {
    display: flex;
    margin: 0 1rem;
  }

  label {
    width: 6rem;
  }

  & input {
    padding: 0.5rem 0.75rem;
  }
`;
