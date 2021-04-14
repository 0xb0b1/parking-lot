import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import DataInput from "./components/DataInput";

import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { OpenMenuProvider } from "./hooks/useOpenMenu";
import { ValidateInputProvider } from "./hooks/useValidateInput";
import { useState } from "react";
import CheckoutPaymentModal from "./components/CheckoutPaymentModal";

// import { api } from "./services/api";

Modal.setAppElement("#root");

function App() {
  // hooks to open the modal
  const [isNewCheckoutModalOpen, setIsNewCheckoutModalOpen] = useState(false);

  function handleOpenCheckoutModal() {
    setIsNewCheckoutModalOpen(true);
  }

  function handleCloseCheckoutModal() {
    setIsNewCheckoutModalOpen(false);
  }

  return (
    <OpenMenuProvider>
      <ValidateInputProvider>
        <GlobalStyle />
        <NavBar />
        <Menu />
        <DataInput onOpenCheckoutModal={handleOpenCheckoutModal} />
        <CheckoutPaymentModal
          isOpen={isNewCheckoutModalOpen}
          onRequestClose={handleCloseCheckoutModal}
        />
      </ValidateInputProvider>
    </OpenMenuProvider>
  );
}

export default App;
