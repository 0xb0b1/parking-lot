import { FormEvent } from "react";
import { useValidateInput } from "../../../hooks/useValidateInput";

import Modal from "react-modal";

import LoadingImg from "../../../images/icons/loading.svg";
import RegisteredImg from "../../../images/icons/round-done-button.svg";

import { Container, ConfirmButton, ExitButton } from "../styles";

interface CheckoutPaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function CheckoutCompleteModal({
  isOpen,
  onRequestClose,
}: CheckoutPaymentModalProps) {
  const { plateNumber, isFormValid } = useValidateInput();

  async function handleCompleteCheckout(event: FormEvent) {
    event.preventDefault();

    if (isFormValid) {
      // await api.post(`${plateNumber}/out`);
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
        isOpen={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <img src={LoadingImg} alt="Loading" />
        <span>Confirmando...</span>
      </Modal>

      <Modal
        isOpen={false}
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
