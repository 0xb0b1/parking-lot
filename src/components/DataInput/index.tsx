// import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "../../hooks/useHistory";
import { useValidateInput } from "../../hooks/useValidateInput";

import Entrance from "../Form/Entrance";
import Exit from "../Form/Exit";
import PlateHistory from "../PlateHistory";
import { Container, Buttons, InputButton } from "./styles";

interface DataInputProps {
  onOpenCheckoutModal: () => void;
  onOpenCheckoutCompleteModal: () => void;
}

function DataInput({
  onOpenCheckoutModal,
  onOpenCheckoutCompleteModal,
}: DataInputProps) {
  // the input button type
  const [inputType, setInputType] = useState("entrada");

  const { isFormValid, plateNumber } = useValidateInput();
  const { handleFetchData } = useHistory();

  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  // não consegui mostrar o historico como pedido no layout do figma.
  // onde os botoes de etrada e saida não aparecem.
  // Aqui o historico é mostrado na sessão da Saída, abaixo do botão;
  function handleShowHistory() {
    if (isFormValid) {
      handleFetchData(plateNumber);
      setIsHistoryOpen(true);
    }
  }

  function handleCloseHistory() {
    setIsHistoryOpen(false);
  }

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
        <Entrance />
      ) : isHistoryOpen ? (
        <PlateHistory LeaveHistory={handleCloseHistory} />
      ) : (
        <Exit
          checkoutPayment={onOpenCheckoutModal}
          completeCheckout={onOpenCheckoutCompleteModal}
          showHistory={handleShowHistory}
        />
      )}
    </Container>
  );
}

export default DataInput;
