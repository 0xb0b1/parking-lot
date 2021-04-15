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
import { HistoryProvider } from "./hooks/useHistory";

import { GlobalStyle } from "./styles/global";
// import { api } from "./services/api";

Modal.setAppElement("#root");

function App() {
  // hooks to open the modal
  const [isNewCheckoutModalOpen, setIsNewCheckoutModalOpen] = useState(false);

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

  return (
    <OpenMenuProvider>
      <PaymentProvider>
        <HistoryProvider>
          <GlobalStyle />
          <NavBar />
          <Menu />
          <DataInput onOpenCheckoutModal={handleOpenCheckoutModal} />
          <CheckoutPaymentModal
            isOpen={isNewCheckoutModalOpen}
            onRequestClose={handleCloseCheckoutModal}
          />
        </HistoryProvider>
      </PaymentProvider>
    </OpenMenuProvider>
  );
}

export default App;
