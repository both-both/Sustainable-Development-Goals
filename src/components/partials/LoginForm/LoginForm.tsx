import { useForm } from "react-hook-form";
import { Button } from "../../elements/Button/Button";
import type { FormValues } from "./LoginForm.types";
import { FormGroup } from "../../modules/FormGroup/FormGroup";
import { Input } from "../../elements/Input/Input";
import { Label } from "../../elements/Label/Label";
import { LoginFormStyled } from "./LoginForm.Styles";
import { ErrorText } from "../../elements/ErrorText/ErrorText";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <LoginFormStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <div>
            <Label htmlFor="username">Brugernavn:</Label>
            <Input type="text" {...register("username", { required: true })} />
          </div>
          {errors.username && <ErrorText>Brugernavn skal udfyldes</ErrorText>}
        </FormGroup>
        <FormGroup>
          <div>
            <Label htmlFor="password">Adgangskode:</Label>
            <Input
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && <ErrorText>Adgangskode skal udfyldes</ErrorText>}
        </FormGroup>
        <FormGroup>
          {" "}
          <Button type="submit" textValue="Send" />
        </FormGroup>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
