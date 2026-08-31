import styled from "styled-components";

export const ContactFormStyled = styled.form`
  fieldset {
    border: 0 none;
    display: flex;
    flex-direction: column;
    width: 50%;

    & button {
      align-self: flex-end;
      margin-top: 2rem;
    }
  }
`;
