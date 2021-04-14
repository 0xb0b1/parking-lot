import { useState } from "react";

import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import DataInput from "./components/DataInput";

import Modal from "react-modal";

import CheckoutPaymentModal from "./components/CheckoutPaymentModal";

// context hooks
import { OpenMenuProvider } from "./hooks/useOpenMenu";
import { useValidateInput } from "./hooks/useValidateInput";
import { PaymentProvider } from "./hooks/usePayment";

import { GlobalStyle } from "./styles/global";
import PlateHistory from "./components/PlateHistory";
// import { api } from "./services/api";

Modal.setAppElement("#root");

function App() {
  // hooks to open the modal
  const [isNewCheckoutModalOpen, setIsNewCheckoutModalOpen] = useState(false);

  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const { isFormValid } = useValidateInput();

  function handleOpenCheckoutModal() {
    // if the plate number is valid, we open de modal.
    if (isFormValid) {
      setIsNewCheckoutModalOpen(true);
    }

    return;
  }

  function handleCloseCheckoutModal() {
    setIsNewCheckoutModalOpen(false);
  }

  function handleHistory() {
    setIsHistoryOpen(true);
  }

  return (
    <OpenMenuProvider>
      <PaymentProvider>
        <GlobalStyle />
        <NavBar />
        <Menu />
        {isHistoryOpen ? (
          <PlateHistory />
        ) : (
          <DataInput
            onOpenCheckoutModal={handleOpenCheckoutModal}
            onShowHistory={handleHistory}
          />
        )}
        <CheckoutPaymentModal
          isOpen={isNewCheckoutModalOpen}
          onRequestClose={handleCloseCheckoutModal}
        />
      </PaymentProvider>
    </OpenMenuProvider>
  );
}

export default App;
