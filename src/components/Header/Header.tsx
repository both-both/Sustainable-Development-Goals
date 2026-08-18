import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";
import logo from "../../assets/images/Logo.png";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <div className="blue-bar"></div>
          <div className="header-main">
            <Link to="/">
              <img src={logo} alt="FN's Verdensmål logo" />
            </Link>
            <NavBar />
          </div>
        </Container>
      </HeaderStyled>
    </>
  );
};
