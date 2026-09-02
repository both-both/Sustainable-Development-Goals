import styled from "styled-components";

export const ContactFormStyled = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1rem 0 0.3rem;
    border: none;

    & button {
      margin-left: auto;
    }
  }
`;
