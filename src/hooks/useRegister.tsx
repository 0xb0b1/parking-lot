import { createContext, ReactNode, useContext, useState } from "react";

import { api } from "../services/api";
import { useValidateInput } from "./useValidateInput";

interface PlateProps {
  time: string;
  paid: boolean;
  left: boolean;
  plate: string;
  reservation: string;
}

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextData {
  newPlate: PlateProps[];
  handlePostData: (plateData: PlateProps[]) => Promise<void>;
}

export const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData
);

export function RegisterProvider({ children }: RegisterProviderProps) {
  const [newPlate, setPlate] = useState<PlateProps[]>([]);

  const { plateNumber } = useValidateInput();

  async function handlePostData(plateData: PlateProps[]) {
    const data = await api
      .post(`/${plateNumber}`, plateData)
      .then((response) => response.data);

    setPlate(data);
  }

  return (
    <RegisterContext.Provider value={{ newPlate, handlePostData }}>
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);

  return context;
}
