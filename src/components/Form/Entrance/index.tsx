import { useValidateInput } from "../../../hooks/useValidateInput";
import { Form } from "../styles";

// import { ValidateInputProvider } from "../../../hooks/useValidateInput";

function Entrance() {
  const { plateNumber, isFormValid, handleSetPlateNumber } = useValidateInput();
  return (
    <Form>
      <label>
        Número da placa:
        <input
          type="text"
          max="8"
          pattern="^([A-Z]{3})-[0-9]{4}$"
          placeholder="AAA-0000"
          value={plateNumber}
          onChange={(event) => handleSetPlateNumber(event.target.value)}
        />
      </label>
      <button
        type="button"
        className={isFormValid ? "entrada active" : "entrada disabled"}
      >
        CONFIRMAR ENTRADA
      </button>
    </Form>
  );
}

export default Entrance;
