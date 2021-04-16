import { FormEvent } from "react";
import { useValidateInput } from "../../../hooks/useValidateInput";

import Modal from "react-modal";

import { Container, ConfirmButton, ExitButton } from "../styles";

interface CheckoutPaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function CheckoutCompleteModal({
  isOpen,
  onRequestClose,
}: CheckoutPaymentModalProps) {
  const { plateNumber } = useValidateInput();

  async function handleCompleteCheckout(event: FormEvent) {
    event.preventDefault();

    // setPaymentCompleted(false);
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
          <span>Confirmar a saída do veiculo da placa abaixo?</span>
          <h3>{plateNumber}</h3>
          <ConfirmButton onClick={handleCompleteCheckout} type="button">
            LIBERAR SAÍDA
          </ConfirmButton>
          <ExitButton onClick={onRequestClose} type="button">
            VOLTAR
          </ExitButton>
        </Container>
      </Modal>
    </>
  );
}

export default CheckoutCompleteModal;
