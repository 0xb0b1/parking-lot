import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import DataInput from "./components/DataInput";

import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { OpenMenuProvider } from "./hooks/useOpenMenu";
import { FormEvent, useState } from "react";
import CheckoutPaymentModal from "./components/CheckoutPaymentModal";
import { useValidateInput } from "./hooks/useValidateInput";

// import { api } from "./services/api";

Modal.setAppElement("#root");

function App() {
  // hooks to open the modal
  const [isNewCheckoutModalOpen, setIsNewCheckoutModalOpen] = useState(false);

  const { isFormValid } = useValidateInput();

  function handleOpenCheckoutModal() {
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
      <GlobalStyle />
      <NavBar />
      <Menu />
      <DataInput onOpenCheckoutModal={handleOpenCheckoutModal} />
      <CheckoutPaymentModal
        isOpen={isNewCheckoutModalOpen}
        onRequestClose={handleCloseCheckoutModal}
      />
    </OpenMenuProvider>
  );
}

export default App;
