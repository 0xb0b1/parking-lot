import { FormEvent } from "react";
import { useState } from "react";
import { useValidateInput } from "../../../hooks/useValidateInput";

import { Form, Button } from "./styles";

function Entrance() {
  const { plateNumber, isFormValid, handleSetPlateNumber } = useValidateInput();

  // later I'll use context api to push data to localStorage or
  // an API and save it.
  const [checkinCompleted, setCheckinCompleted] = useState(false);

  function handleCompleteCheckin(event: FormEvent) {
    event.preventDefault();

    setCheckinCompleted(true);
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
      <Button
        isActive={checkinCompleted}
        type="button"
        className={isFormValid ? "entrada active" : "entrada disabled"}
        onClick={handleCompleteCheckin}
      >
        {checkinCompleted && isFormValid
          ? "ENTRADA CONCLÚIDA"
          : "CONFIRMAR ENTRADA"}
      </Button>
    </Form>
  );
}

export default Entrance;
