import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Entrance from "./components/Entrance";

import { GlobalStyle } from "./styles/global";
import { OpenMenuProvider } from "./hooks/useOpenMenu";

// import { api } from "./services/api";

function App() {
  return (
    <OpenMenuProvider>
      <GlobalStyle />
      <NavBar />
      <Menu />
      <Entrance />
    </OpenMenuProvider>
  );
}

export default App;
