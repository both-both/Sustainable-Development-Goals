import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../elements/Button/Button";
import { Input } from "../../elements/Input/Input";
import { ErrorText } from "../../elements/ErrorText/ErrorText";
import { SignUpFormStyled } from "./SignUpForm.Styled";
import { type SignUpValues, signUpSchema } from "./SignUpForm.types";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = (data: SignUpValues) => {
    console.log(data);
    alert("Tak for din tilmelding");
    reset();
  };

  return (
    <SignUpFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="Indtast din email"
        {...register("email")}
      />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      <Button type="submit" textValue="Tilmeld" />
    </SignUpFormStyled>
  );
};
