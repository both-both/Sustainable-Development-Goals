import styled from "styled-components";
import { FormGroup } from "../FormGroup/FormGroup";

export const CustomGoalDesignerStyled = styled.div`
  display: flex;
  gap: 10%;
  padding-top: 2rem;
`;

export const WideFormGroup = styled(FormGroup)`
  width: 25rem;
`;

export const FormStyled = styled.form`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const ButtonRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-end;
`;
