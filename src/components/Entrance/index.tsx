import { useState } from "react";
import { useForm } from "react-hook-form";

import { Container, Buttons, InputButton, Form, HistoryButton } from "./styles";

interface FormProps {
  handleSubmit: () => void;
}

function Entrance() {
  const { handleSubmit } = useForm<FormProps>();
  const onSubmit = (data: FormProps) => console.log(data);

  const [inputType, setInputType] = useState("entrada");

  // const [isActiveButton, setIsActiveButton] = useState(false);

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Número da placa:
            <input type="text" placeholder="AAA-0000" />
            <button>CONFIRMAR ENTRADA</button>
          </label>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Número da placa:
            <input type="text" pattern="" placeholder="AAA-0000" />
            <button className="">PAGAMENTO</button>
            <button className="saida">SAÍDA</button>
          </label>
        </Form>
      )}
      <HistoryButton>
        <span>Ver Historico</span>
      </HistoryButton>
    </Container>
  );
}

export default Entrance;
