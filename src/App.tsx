import { Footer } from "./components/organisms/Footer/Footer";
import { Main } from "./components/Main/Main";
import { AppRouter } from "./router/AppRouter/AppRouter";
import { Header } from "./components/organisms/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <AppRouter />
      </Main>
      <Footer />
    </>
  );
};

export default App;
