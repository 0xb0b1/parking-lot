import { useValidateInput } from "../../../hooks/useValidateInput";
import { Form } from "../styles";

function Entrance() {
  const { plateNumber, isFormValid, handleSetPlateNumber } = useValidateInput();

  async function handleConfirmCheckin() {
    if (isFormValid) {
      // const data = localStorage.setItem("Plates", JSON.stringify(plateNumber))
    }
  }

  return (
    <Form>
      <label>
        Número da placa:
        <input
          type="text"
          pattern="^([A-Z]{3})-[0-9]{4}$"
          placeholder="AAA-0000"
          value={plateNumber}
          onChange={(event) => handleSetPlateNumber(event.target.value)}
        />
      </label>
      <button
        // onClick={handleConfirmCheckin}
        type="button"
        className={isFormValid ? "entrada active" : "entrada disabled"}
      >
        CONFIRMAR ENTRADA
      </button>
    </Form>
  );
}

export default Entrance;
