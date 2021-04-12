import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

import { GlobalStyle } from "./styles/global";
import { OpenMenuProvider } from "./hooks/useOpenMenu";

// import { api } from "./services/api";

function App() {
  return (
    <OpenMenuProvider>
      <GlobalStyle />
      <NavBar />
      <Menu />
    </OpenMenuProvider>
  );
}

export default App;
