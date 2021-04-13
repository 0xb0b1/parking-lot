import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import DataInput from "./components/DataInput";

import { GlobalStyle } from "./styles/global";
import { OpenMenuProvider } from "./hooks/useOpenMenu";
import { ValidateInputProvider } from "./hooks/useValidateInput";

// import { api } from "./services/api";

function App() {
  return (
    <OpenMenuProvider>
      <ValidateInputProvider>
        <GlobalStyle />
        <NavBar />
        <Menu />
        <DataInput />
      </ValidateInputProvider>
    </OpenMenuProvider>
  );
}

export default App;
