import { useState } from "react";

import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import DataInput from "./components/DataInput";

import Modal from "react-modal";

import CheckoutPaymentModal from "./components/Modal/CheckoutPaymentModal";
import CheckoutCompleteModal from "./components/Modal/CheckoutCompleteModal";

// context hooks
import { OpenMenuProvider } from "./hooks/useOpenMenu";
import { useValidateInput } from "./hooks/useValidateInput";
import { PaymentProvider } from "./hooks/usePayment";
import { HistoryProvider } from "./hooks/useHistory";
import { RegisterProvider } from "./hooks/useRegister";

import { GlobalStyle } from "./styles/global";
// import { api } from "./services/api";

Modal.setAppElement("#root");

function App() {
  // hooks to open the modal
  const [isNewCheckoutModalOpen, setIsNewCheckoutModalOpen] = useState(false);

  const [
    isNewCheckoutCompleteModalOpen,
    setIsNewCheckoutCompleteModalOpen,
  ] = useState(false);

  const { isFormValid } = useValidateInput();

  function handleOpenCheckoutModal() {
    // if the plate number is valid, we open de modal.
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

  return (
    <OpenMenuProvider>
      <PaymentProvider>
        <RegisterProvider>
          <HistoryProvider>
            <GlobalStyle />
            <NavBar />
            <Menu />
            <DataInput
              onOpenCheckoutModal={handleOpenCheckoutModal}
              onOpenCheckoutCompleteModal={handleOpenCheckoutCompleteModal}
            />
            <CheckoutPaymentModal
              isOpen={isNewCheckoutModalOpen}
              onRequestClose={handleCloseCheckoutModal}
            />
            <CheckoutCompleteModal
              isOpen={isNewCheckoutCompleteModalOpen}
              onRequestClose={handleCloseCheckoutCompleteModal}
            />
          </HistoryProvider>
        </RegisterProvider>
      </PaymentProvider>
    </OpenMenuProvider>
  );
}

export default App;
