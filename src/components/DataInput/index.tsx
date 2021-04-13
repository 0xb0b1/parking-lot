import { useEffect } from "react";
import { useState } from "react";

import Entrance from "../Form/Entrance";
import Exit from "../Form/Exit";

import { Container, Buttons, InputButton } from "./styles";

// interface FormProps {
//   handleSubmit: () => void;
// }

function DataInput() {
  // the input button type
  const [inputType, setInputType] = useState("entrada");

  return (
    <Container>
      <Buttons>
        <InputButton
          type="button"
          isActive={inputType === "entrada"}
          onClick={() => setInputType("entrada")}
        >
          Entrada
        </InputButton>
        <InputButton
          type="button"
          isActive={inputType === "saida"}
          onClick={() => setInputType("saida")}
        >
          Saída
        </InputButton>
      </Buttons>
      {inputType === "entrada" ? <Entrance /> : <Exit />}
    </Container>
  );
}

export default DataInput;
