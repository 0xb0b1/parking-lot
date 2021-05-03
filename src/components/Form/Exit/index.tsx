import { useValidateInput } from "../../../hooks/useValidateInput";
import { Form, HistoryButton } from "../styles";

interface ExitProps {
  checkoutPayment: () => void;
  completeCheckout: () => void;
}

function Exit({ checkoutPayment, completeCheckout }: ExitProps) {
  const { plateNumber, isFormValid, handleSetPlateNumber } = useValidateInput();

  return (
    <Form>
      <label>
        Número da placa:
        <input
          type="text"
          max="8"
          pattern="^([A-Za-z]{3})-[0-9]{4}$"
          placeholder="AAA-0000"
          value={plateNumber}
          onChange={(event) => handleSetPlateNumber(event.target.value)}
        />
      </label>
      <button
        onClick={checkoutPayment}
        type="button"
        className={isFormValid ? "pagamento" : "disabled"}
      >
        PAGAMENTO
      </button>
      <button
        onClick={completeCheckout}
        type="button"
        className={isFormValid ? "saida active" : "saida"}
      >
        SAÍDA
      </button>
      <HistoryButton>
        <button type="button" className={isFormValid ? "active" : ""}>
          Ver Historico
        </button>
      </HistoryButton>
    </Form>
  );
}

export default Exit;
