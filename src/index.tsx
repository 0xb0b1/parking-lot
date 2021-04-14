import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ValidateInputProvider } from "./hooks/useValidateInput";

ReactDOM.render(
  <React.StrictMode>
    <ValidateInputProvider>
      <App />
    </ValidateInputProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
