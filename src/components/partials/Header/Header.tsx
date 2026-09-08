import { NavBar } from "../../partials/NavBar/NavBar";
import { Div } from "../../elements/Div/Div";

import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";
import logo from "../../../assets/images/Logo.png";
import { ThemeToggleButton } from "../../elements/ThemeToggleButton/ThemeToggleButton";

export const Header = () => {
  return (
    <>
      <Div className="blue-bar"></Div>
      <HeaderStyled>
        <Link to="/">
          <img src={logo} alt="FN's Verdensmål logo" />
        </Link>
        <NavBar />
        <ThemeToggleButton />
      </HeaderStyled>
    </>
  );
};
