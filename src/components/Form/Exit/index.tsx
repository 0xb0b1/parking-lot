import { useValidateInput } from "../../../hooks/useValidateInput";
import { Form, HistoryButton } from "../styles";

interface ExitProps {
  checkoutPayment: () => void;
  completeCheckout: () => void;
  showHistory: () => void;
}

function Exit({ checkoutPayment, completeCheckout, showHistory }: ExitProps) {
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
        className="saida"
        style={{
          border: isFormValid ? "2px solid rgba(20, 204, 124, 0.3)" : "",
        }}
      >
        SAÍDA
      </button>
      <HistoryButton onClick={showHistory}>
        <span>Ver Historico</span>
      </HistoryButton>
    </Form>
  );
}

export default Exit;
