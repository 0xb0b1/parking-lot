import { useEffect } from "react";
import { useState } from "react";

import { Container, Buttons, InputButton, Form, HistoryButton } from "./styles";

// interface FormProps {
//   handleSubmit: () => void;
// }

function Entrance() {
  // the input button type
  const [inputType, setInputType] = useState("entrada");

  // hook to save the form valid status
  const [isFormValid, setIsFormValid] = useState(false);

  // save the plate number
  const [plateNumber, setPlateNumber] = useState("");

  useEffect(() => {
    const regTest = new RegExp("^([A-Z]{3})-[0-9]{4}$");
    regTest.test(plateNumber) ? setIsFormValid(true) : setIsFormValid(false);
  }, [plateNumber]);

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
      {inputType === "entrada" ? (
        <Form>
          <label>
            Número da placa:
            <input
              type="text"
              pattern="^([A-Z]{3})-[0-9]{4}$"
              placeholder="AAA-0000"
              value={plateNumber}
              onChange={(event) => setPlateNumber(event.target.value)}
            />
          </label>
          <button
            type="button"
            className={isFormValid ? "entrada active" : "entrada disabled"}
          >
            CONFIRMAR ENTRADA
          </button>
        </Form>
      ) : (
        <Form>
          <label>
            Número da placa:
            <input
              type="text"
              pattern="^([A-Z]{3})-[0-9]{4}$"
              placeholder="AAA-0000"
              value={plateNumber}
              onChange={(event) => setPlateNumber(event.target.value)}
            />
          </label>
          <button
            type="button"
            className={isFormValid ? "pagamento" : "disabled"}
          >
            PAGAMENTO
          </button>
          <button
            type="button"
            className="saida"
            style={{ border: isFormValid ? "2px solid #A769B2" : "" }}
          >
            SAÍDA
          </button>
          <HistoryButton>
            <span>Ver Historico</span>
          </HistoryButton>
        </Form>
      )}
    </Container>
  );
}

export default Entrance;
