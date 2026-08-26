import styled from "styled-components";

export const VideoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const VideoIframe = styled.iframe`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 4 / 3;
  border: none;
  padding: 2rem 0;
`;
