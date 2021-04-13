import { useContext } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ValidationProviderProps {
  children: ReactNode;
}

interface ValidationContextData {
  isFormValid: boolean;
  plateNumber: string;
  handleSetPlateNumber: (event: string) => void;
}

export const ValidateInputContext = createContext<ValidationContextData>(
  {} as ValidationContextData
);

export function ValidateInputProvider({ children }: ValidationProviderProps) {
  // hook to save the form valid status
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // save the plate number
  const [plateNumber, setPlateNumber] = useState<string>("");

  useEffect(() => {
    const regTest = new RegExp("^([A-Za-z]{3})-[0-9]{4}$");
    regTest.test(plateNumber) ? setIsFormValid(true) : setIsFormValid(false);
  }, [plateNumber]);

  function handleSetPlateNumber(event: string) {
    setPlateNumber(event);
  }

  return (
    <ValidateInputContext.Provider
      value={{ isFormValid, plateNumber, handleSetPlateNumber }}
    >
      {children}
    </ValidateInputContext.Provider>
  );
}

export function useValidateInput() {
  const context = useContext(ValidateInputContext);

  return context;
}
