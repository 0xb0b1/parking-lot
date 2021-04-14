import { FormEvent, useState } from "react";
import { useValidateInput } from "../../hooks/useValidateInput";

import Modal from "react-modal";

import { Container, ConfirmButton, ExitButton } from "./styles";

interface CheckoutPaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function CheckoutPaymentModal({
  isOpen,
  onRequestClose,
}: CheckoutPaymentModalProps) {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const { plateNumber } = useValidateInput();

  async function handlePayment(event: FormEvent) {
    event.preventDefault();

    // payment logic goes here

    setPaymentCompleted(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <span>Confirmar pagamento do placa abaixo?</span>
        <h3>{plateNumber}</h3>
        <ConfirmButton type="button">CONFIRMAR</ConfirmButton>
        <ExitButton type="button">VOLTAR</ExitButton>
      </Container>
    </Modal>
  );
}

export default CheckoutPaymentModal;
