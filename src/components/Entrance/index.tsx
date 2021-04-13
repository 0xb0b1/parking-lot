import { useEffect } from "react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { Container, Buttons, InputButton, Form, HistoryButton } from "./styles";

// interface FormProps {
//   handleSubmit: () => void;
// }

function Entrance() {
  // const { handleSubmit } = useForm<FormProps>();
  // const onSubmit = (data: FormProps) => console.log(data);

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
          <button className={isFormValid ? "active" : ""}>
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
          <button className={isFormValid ? "pagamento" : ""}>PAGAMENTO</button>
          <button
            className="saida"
            style={{ border: isFormValid ? "2px solid #A769B2" : "" }}
          >
            SAÍDA
          </button>
        </Form>
      )}
      <HistoryButton>
        <span>Ver Historico</span>
      </HistoryButton>
    </Container>
  );
}

export default Entrance;
