import { useForm } from "react-hook-form";
import { Button } from "../../elements/Button/Button";
import type { FormValues } from "./LoginForm.types";
import { FormGroup } from "../../modules/FormGroup/FormGroup";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <label htmlFor="username">Brugernavn:</label>
        <input type="text" {...register("username", { required: true })} />
        {errors.username && (
          <span style={{ color: "red" }}>Brugernavn skal udfyldes</span>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Adgangskode:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && (
          <span style={{ color: "red" }}>Adgangskode skal udfyldes</span>
        )}
      </FormGroup>
      <FormGroup>
        {" "}
        <Button type="submit" textValue="Send" />
      </FormGroup>
    </form>
  );
};

export default LoginForm;
