import { NavBar } from "../../organisms/NavBar/NavBar";
import { Div } from "../../atoms/Div/Div";

import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";
import logo from "../../../assets/images/Logo.png";

export const Header = () => {
  return (
    <>
      <Div className="blue-bar"></Div>
      <HeaderStyled>
        <Link to="/">
          <img src={logo} alt="FN's Verdensmål logo" />
        </Link>
        <NavBar />
      </HeaderStyled>
    </>
  );
};
