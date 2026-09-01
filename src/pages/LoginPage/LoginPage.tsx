import { ContentWrapper } from "../../components/Contentwrapper/ContentWrapper";
import LoginForm from "../../components/partials/LoginForm/LoginForm";

export const LoginPage = () => {
  return (
    <ContentWrapper
      title="Login"
      description="her kan du logge ind på siden"
      showTitle={true}
    >
      <LoginForm />
    </ContentWrapper>
  );
};
