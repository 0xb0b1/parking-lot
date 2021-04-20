import { FormEvent, useState } from "react";
import { useValidateInput } from "../../../hooks/useValidateInput";

import Modal from "react-modal";

import LoadingImg from "../../../images/icons/loading.svg";
import RegisteredImg from "../../../images/icons/round-done-button.svg";

import { Container, ConfirmButton, ExitButton } from "../styles";
import { usePayment } from "../../../hooks/usePayment";
import { api } from "../../../services/api";

interface CheckoutPaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function CheckoutCompleteModal({
  isOpen,
  onRequestClose,
}: CheckoutPaymentModalProps) {
  const { plateNumber, isFormValid } = useValidateInput();

  const { isPaymentComplete } = usePayment();

  const [activeModal, setActiveModal] = useState("checkoutStart");

  async function handleCompleteCheckout(event: FormEvent) {
    event.preventDefault();

    // setPaymentCompleted(false);
    // setActiveModal("checkout");

    // liberar a saída do veiculo
    if (isFormValid) {
      await api.post(`${plateNumber}/out`);
    }
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

      <Modal
        isOpen={activeModal === "checkout"}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <img src={LoadingImg} alt="Loading" />
        <span>Confirmando...</span>
      </Modal>

      <Modal
        isOpen={activeModal === "checkoutComplete"}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <img src={RegisteredImg} alt="Loading" />
        <span>PAGO!</span>
      </Modal>
    </>
  );
}

export default CheckoutCompleteModal;
