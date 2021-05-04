import { useContext } from "react";
import { createContext, ReactNode, useState } from "react";
import { useValidateInput } from "./useValidateInput";
interface PaymentProviderProps {
  children: ReactNode;
}
interface PaymentContextData {
  isPaymentComplete: boolean;
  // plateNumber: string;
  handlePayment: (plate: string) => Promise<void>;
}

export const PaymentContext = createContext<PaymentContextData>(
  {} as PaymentContextData
);

export function PaymentProvider({ children }: PaymentProviderProps) {
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const { isFormValid } = useValidateInput();

  async function handlePayment(plate: string) {
    if (isFormValid) {
      setIsPaymentComplete(true);
    }
  }

  return (
    <PaymentContext.Provider value={{ isPaymentComplete, handlePayment }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);

  return context;
}
