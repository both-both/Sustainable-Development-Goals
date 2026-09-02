import styled from "styled-components";

export const TextareaStyled = styled.textarea`
  background-color: ${({ theme }) => theme.colors["light"]};
  border: 1px solid ${({ theme }) => theme.colors["dark"]};
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 0.3rem;
  outline: none;
  resize: vertical;
  font-family: inherit;
`;
