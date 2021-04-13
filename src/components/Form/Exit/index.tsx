import { useValidateInput } from "../../../hooks/useValidateInput";
import { Form, HistoryButton } from "../styles";

function Exit() {
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
      <button type="button" className={isFormValid ? "pagamento" : "disabled"}>
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
  );
}

export default Exit;
