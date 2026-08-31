import styled from "styled-components";

export const CustomGoalDesignerStyled = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding-top: 2rem;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  label {
    min-width: 6rem;
  }

  input {
    background-color: ${({ theme }) => theme.colors["light"]};
    border: 1px solid ${({ theme }) => theme.colors["dark"]};
    width: auto;
    padding: 0.5rem 0.75rem;
    border-radius: 0.3rem;
    outline: none;
  }
`;

export const FieldRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem 1rem;

  span {
    flex-basis: 100%;
  }
`;

export const ButtonRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-end;
`;
