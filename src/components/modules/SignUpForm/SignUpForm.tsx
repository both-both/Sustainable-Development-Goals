import { Button } from "../../elements/Button/Button";
import { Input } from "../../elements/Input/Input";
import { SignUpFormStyled } from "./SignUpForm.Styled";

export const SignUpForm = () => {
  const handleClick = () => {
    alert("Tak for din tilmelding");
  };
  return (
    <SignUpFormStyled>
      <Input type="email" name="email" placeholder="Indtast din email" />
      <Button type="button" textValue="Tilmeld" onClick={handleClick} />
    </SignUpFormStyled>
  );
};
