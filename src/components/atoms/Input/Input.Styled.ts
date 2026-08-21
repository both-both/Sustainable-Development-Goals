import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors["light"]};
  border: 1px solid ${({ theme }) => theme.colors["dark"]};
  border-radius: 0.3rem;
  padding: 10px 0;
  text-indent: 10px;
  outline: none;
`;
