import { FormEvent } from "react";
import { useValidateInput } from "../../../hooks/useValidateInput";

import Modal from "react-modal";

import { Container, ConfirmButton, ExitButton } from "../styles";
import { usePayment } from "../../../hooks/usePayment";

interface CheckoutPaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function CheckoutPaymentModal({
  isOpen,
  onRequestClose,
}: CheckoutPaymentModalProps) {
  const { plateNumber } = useValidateInput();

  const { handlePayment } = usePayment();

  async function handleCompletePayment(event: FormEvent) {
    event.preventDefault();

    // payment logic goes here
    handlePayment(plateNumber);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <span>Confirmar pagamento da placa abaixo?</span>
          <h3>{plateNumber}</h3>
          <ConfirmButton onClick={handleCompletePayment} type="button">
            CONFIRMAR
          </ConfirmButton>
          <ExitButton onClick={onRequestClose} type="button">
            VOLTAR
          </ExitButton>
        </Container>
      </Modal>
    </>
  );
}

export default CheckoutPaymentModal;
