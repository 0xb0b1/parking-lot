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

  const [isNewHistoryModalOpen, setIsNewHistoryModalOpen] = useState(false);

  const { isFormValid } = useValidateInput();

  function handleOpenCheckoutModal() {
    isFormValid && setIsNewCheckoutModalOpen(true);
  }

  function handleOpenCheckoutCompleteModal() {
    isFormValid && setIsNewCheckoutCompleteModalOpen(true);
  }

  function handleOpenHistoryModal() {
    isFormValid && setIsNewHistoryModalOpen(true);
  }

  return (
    <OpenMenuProvider>
      <PaymentProvider>
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
          onRequestClose={() => setIsNewCheckoutModalOpen(false)}
        />

        <CheckoutCompleteModal
          isOpen={isNewCheckoutCompleteModalOpen}
          onRequestClose={() => setIsNewCheckoutCompleteModalOpen(false)}
        />

        <HistoryModal
          isOpen={isNewHistoryModalOpen}
          onRequestClose={() => setIsNewHistoryModalOpen(false)}
        />
      </PaymentProvider>
    </OpenMenuProvider>
  );
}

export default App;
