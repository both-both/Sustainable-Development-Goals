import { Button } from "../../elements/Button/Button";
import { FormGroup } from "../FormGroup/FormGroup";
import { ContactFormStyled } from "./ContactForm.Styled";

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <fieldset>
        <FormGroup>
          <label htmlFor="name">Navn:</label>
          <input type="text" name="name" placeholder="Indtast dit navn" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email:</label>
          <input type="email" title="Email:" placeholder="Indtast din email" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="message">Besked:</label>
          <input type="text" placeholder="Indtast din besked her" />
        </FormGroup>

        <Button type="submit" textValue="Send" />
      </fieldset>
    </ContactFormStyled>
  );
};
