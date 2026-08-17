import type { NavbarProps } from "../../types/types";
import { Li } from "../Li/Li";
import { Ul } from "../Ul/Ul";
import { NavLink } from "react-router-dom";

export const NavBar = ({ children }: NavbarProps) => {
  return (
    <nav>
      <Ul>
        <Li>
          <NavLink to="/">Verdensmål</NavLink>
          <NavLink to="/education-page">Undervisning</NavLink>
          <NavLink to="/custom-goal"> Byg dit eget mål</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Kontakt os</NavLink>
        </Li>
      </Ul>
    </nav>
  );
};
