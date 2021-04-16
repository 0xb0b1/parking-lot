import { useState } from "react";
import { useValidateInput } from "../../../hooks/useValidateInput";
import { Form } from "../styles";

import LoadingEntrance from "./LoadingEntrance";
import Registered from "./Registered";

function Entrance() {
  const { plateNumber, isFormValid, handleSetPlateNumber } = useValidateInput();

  const [checkin, setCheckin] = useState(false);

  const [registered, setRegistered] = useState(false);
  const [completedRegistration, setCompletedRegistration] = useState(false);

  async function handleConfirmCheckin() {
    if (isFormValid) {
      setCheckin(true);
    }
  }

  function handleCloseChecking() {
    setRegistered(false);
    setCheckin(false);
  }

  return (
    <>
      {checkin ? (
        registered ? (
          <Registered backToHome={handleCloseChecking} />
        ) : (
          <LoadingEntrance registeredCheck={() => setRegistered(true)} />
        )
      ) : (
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
      )}
    </>
  );
}

export default Entrance;
