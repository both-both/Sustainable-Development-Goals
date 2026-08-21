import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { SignUpFormStyled } from "./SignUpForm.Styled";

export const SignUpForm = () => {
  const handleClick = () => {
    alert("Tak for din tilmelding");
  };
  return (
    <SignUpFormStyled>
      <Input type="email" name="email" placeholder="Indtast din email" />
      <Button textValue="Tilmeld" onClick={handleClick} />
    </SignUpFormStyled>
  );
};
