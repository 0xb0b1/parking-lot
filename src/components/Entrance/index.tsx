import { useState } from "react";
import { useForm } from "react-hook-form";

import { Container, Buttons, InputButton, Form, HistoryButton } from "./styles";

// interface FormProps {
//   handleSubmit: () => void;
// }

function Entrance() {
  // const { handleSubmit } = useForm<FormProps>();
  // const onSubmit = (data: FormProps) => console.log(data);

  const [inputType, setInputType] = useState("entrada");

  const [isFormValid, setIsFormValid] = useState(true);

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
