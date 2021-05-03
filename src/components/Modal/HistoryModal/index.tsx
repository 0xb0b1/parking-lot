import Modal from "react-modal";
import { useValidateInput } from "../../../hooks/useValidateInput";

import { Container, Content, Header } from "./styles";

import NotPaidItems from "./NotPaidItems";
import PaidItems from "./PaidItems";

import { FaArrowLeft } from "react-icons/fa";

interface HistoryModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function HistoryModal({ isOpen, onRequestClose }: HistoryModalProps) {
  const { plateNumber } = useValidateInput();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <Header>
            <FaArrowLeft onClick={onRequestClose} />
            <span>Placa {plateNumber}</span>
          </Header>
          <Content>
            <NotPaidItems />
            <PaidItems />
          </Content>
        </Container>
      </Modal>
    </>
  );
}

export default HistoryModal;
