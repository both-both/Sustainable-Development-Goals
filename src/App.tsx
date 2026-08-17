import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { AppRouter } from "./components/AppRouter/AppRouter";
import { Header } from "./components/Header/Header";

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
