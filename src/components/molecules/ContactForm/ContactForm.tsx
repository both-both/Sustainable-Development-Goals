import { Button } from "../../atoms/Button/Button";
import FormGroup from "../FormGroup/FormGroup";
import { ContactFormStyled } from "./ContactForm.Styled";

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <fieldset>
        <FormGroup
          type="text"
          title="Navn:"
          name="name"
          placeholder="Indtast dit navn"
        />
        <FormGroup
          type="email"
          title="Email:"
          name="email"
          placeholder="Indtast din email"
        />
        <FormGroup
          type="text"
          title="Besked:"
          name="message"
          placeholder="Indtast din besked her"
        />
        <Button type="submit" textValue="Send" />
      </fieldset>
    </ContactFormStyled>
  );
};
