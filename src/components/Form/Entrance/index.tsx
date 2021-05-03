import axios from "axios";
import { useValidateInput } from "../../../hooks/useValidateInput";
import { Form } from "../styles";

function Entrance() {
  const { plateNumber, isFormValid, handleSetPlateNumber } = useValidateInput();

  async function handleConfirmCheckin() {
    if (isFormValid) {
      // post request when clicked in "Confirmar Entrada"
      try {
        axios({
          method: "post",
          url: "https://parking-lot-to-pfz.herokuapp.com/parking",
          data: { plate: plateNumber },
          headers: { "Content-Type": "application/json" },
        }).then((response) => response.data);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <>
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
          onClick={handleConfirmCheckin}
          type="button"
          className={isFormValid ? "entrada active" : "entrada disabled"}
        >
          CONFIRMAR ENTRADA
        </button>
      </Form>
    </>
  );
}

export default Entrance;
