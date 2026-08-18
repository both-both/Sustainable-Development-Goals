import styled from "styled-components";
import footerBg from "../../assets/images/Footer Background.png";

export const FooterStyled = styled.footer`
  background-image: url(${footerBg});

  .footer-container {
    padding: 3rem 0;
    display: flex;
    gap: 20rem;
    justify-content: space-between;
    width: 80%;
    margin: auto;
  }
  .left-container,
  .right-container {
    width: 40%;
  }
  .logos-top {
    display: flex;
    gap: 2rem;
    padding-bottom: 1rem;
  }
  img {
    width: fit-content;
  }
  .headline-footer {
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts["secondary"]};
    color: ${({ theme }) => theme.colors.light};
  }
  p {
    padding-bottom: 3rem;
    font-family: ${({ theme }) => theme.fonts["primary"]};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.light};
  }
`;
