import type { NavbarProps } from "../../../types/types";
import { Li } from "../../elements/Li/Li";
import { Ul } from "../../elements/Ul/Ul";
import { NavLink } from "react-router-dom";
import { NavBarStyled } from "./NavBar.Styled";

export const NavBar = ({}: NavbarProps) => {
  return (
    <NavBarStyled>
      <Ul>
        <Li>
          <NavLink to="/">Verdensmål</NavLink>
        </Li>
        <Li>
          <NavLink to="/themes">Temaer</NavLink>
        </Li>
        <Li>
          {" "}
          <NavLink to="/education-page">Undervisning</NavLink>
        </Li>
        <Li>
          <NavLink to="/custom-goal"> Byg dit eget mål</NavLink>
        </Li>
        <Li>
          <NavLink to="/faq">FAQ</NavLink>
        </Li>
        <Li>
          <NavLink to="/contact">Kontakt os</NavLink>
        </Li>
        <Li>
          <NavLink to="/login">Login</NavLink>
        </Li>
      </Ul>
    </NavBarStyled>
  );
};
