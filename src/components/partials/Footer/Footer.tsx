import type { FooterProps } from "./Footer.types";
import { FooterStyled } from "./Footer.Styled";
import UNDP from "../../../assets/images/UNDP Logo.png";
import MS from "../../../assets/images/MS Logo.png";
import GG from "../../../assets/images/Globale Gymnasier Logo.png";
import Danida from "../../../assets/images/Danida Logo.png";

import { SignUpForm } from "../../modules/SignUpForm/SignUpForm";

export const Footer = ({ children }: FooterProps) => {
  return (
    <FooterStyled>
      <div className="footer-container">
        <div className="left-container">
          <p className="headline-footer">Om Hjemmeside</p>
          <p>
            Dette digitale læringssite er udviklet af UNDP's nordiske kontor i
            Danmark, Globale Gymnasier og Mellemfolkeligt Samvirke/VerdensKlasse
            med støtte fra Danidas Oplysningsbevilling.
          </p>
          <p>
            Vores mål med dette site er at give lærere og elever på landets
            ungdomsuddannelser mulighed for at opnå viden, holdninger og
            handlingskompetence i forhold til FN's verdensmål for bæredygtig
            udvikling. Sitet opdateres løbende med nyeste statistik, viden og
            nye undervisningsforløb.
          </p>
          <p className="headline-footer">Tilmeld nyhedsbrev</p>
          <p>
            Tilmeld dig vores nyhedsbrev og få sidste nyt tilsendt direkte til
            din indbakke.
          </p>
          <SignUpForm />
        </div>
        <div className="right-container">
          <p className="headline-footer">Organisationerne bag</p>
          <div className="logos-top">
            <img src={UNDP} alt="UNDP logo" />
            <img src={MS} alt="Mellemfolkeligt Samvirke logo" />
          </div>
          <img src={GG} alt="Globale Gymnasier logo" />
          <p className="headline-footer">
            Udviklet med støtte fra Danidas Oplysningsbevilling
          </p>

          <img src={Danida} alt="Danida logo" />
        </div>
      </div>
      {children}
    </FooterStyled>
  );
};
