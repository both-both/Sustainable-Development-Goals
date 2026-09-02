import { Button } from "../../elements/Button/Button";
import { Input } from "../../elements/Input/Input";
import { Label } from "../../elements/Label/Label";
import { Textarea } from "../../elements/Textarea/Textarea";
import { FormGroup } from "../FormGroup/FormGroup";
import { ContactFormStyled } from "./ContactForm.Styled";

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <fieldset>
        <FormGroup>
          <div>
            <Label htmlFor="name">Navn:</Label>
            <Input type="text" name="name" placeholder="Indtast dit navn" />
          </div>
        </FormGroup>

        <FormGroup>
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" name="email" placeholder="Indtast din email" />
          </div>
        </FormGroup>

        <FormGroup>
          <div>
            <Label htmlFor="message">Besked:</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Indtast din besked her"
              rows={5}
            />
          </div>
        </FormGroup>

        <Button type="submit" textValue="Send" />
      </fieldset>
    </ContactFormStyled>
  );
};
