import { useState } from "react";

import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import DataInput from "./components/DataInput";

import Modal from "react-modal";

import CheckoutPaymentModal from "./components/Modal/CheckoutPaymentModal";
import CheckoutCompleteModal from "./components/Modal/CheckoutCompleteModal";
import HistoryModal from "./components/Modal/HistoryModal";

// context hooks
import { OpenMenuProvider } from "./hooks/useOpenMenu";
import { useValidateInput } from "./hooks/useValidateInput";
import { PaymentProvider } from "./hooks/usePayment";
import { HistoryProvider } from "./hooks/useHistory";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  const [isNewCheckoutModalOpen, setIsNewCheckoutModalOpen] = useState(false);

  const [
    isNewCheckoutCompleteModalOpen,
    setIsNewCheckoutCompleteModalOpen,
  ] = useState(false);

  const [isNewHistoryModalOpen, setIsnewHistoryModalOpen] = useState(false);

  const { isFormValid } = useValidateInput();

  function handleOpenCheckoutModal() {
    if (isFormValid) {
      setIsNewCheckoutModalOpen(true);
    }
  }

  function handleCloseCheckoutModal() {
    setIsNewCheckoutModalOpen(false);
  }

  function handleOpenCheckoutCompleteModal() {
    if (isFormValid) {
      setIsNewCheckoutCompleteModalOpen(true);
    }
  }

  function handleCloseCheckoutCompleteModal() {
    setIsNewCheckoutCompleteModalOpen(false);
  }

  function handleOpenHistoryModal() {
    if (isFormValid) {
      setIsnewHistoryModalOpen(true);
    }
  }

  function handleCloseHistoryModal() {
    setIsnewHistoryModalOpen(false);
  }

  return (
    <OpenMenuProvider>
      <PaymentProvider>
        <HistoryProvider>
          <GlobalStyle />
          <NavBar />
          <Menu />
          <DataInput
            onOpenCheckoutModal={handleOpenCheckoutModal}
            onOpenCheckoutCompleteModal={handleOpenCheckoutCompleteModal}
            onOpenHistoryModal={handleOpenHistoryModal}
          />
          <CheckoutPaymentModal
            isOpen={isNewCheckoutModalOpen}
            onRequestClose={handleCloseCheckoutModal}
          />
          <CheckoutCompleteModal
            isOpen={isNewCheckoutCompleteModalOpen}
            onRequestClose={handleCloseCheckoutCompleteModal}
          />

          <HistoryModal
            isOpen={isNewHistoryModalOpen}
            onRequestClose={handleCloseHistoryModal}
          ></HistoryModal>
        </HistoryProvider>
      </PaymentProvider>
    </OpenMenuProvider>
  );
}

export default App;
