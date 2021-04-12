import React, { useEffect } from "react";

import NavBar from "./components/NavBar";

import { GlobalStyle } from "./styles/global";

import { api } from "./services/api";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
}

export default App;
