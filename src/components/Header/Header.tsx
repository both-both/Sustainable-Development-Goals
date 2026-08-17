import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <>
      <Container>
        <Container>
          <img src="src/assets/images/Logo.png" alt="FN's verdensmål logo" />
          <NavBar />
        </Container>
      </Container>
    </>
  );
};
