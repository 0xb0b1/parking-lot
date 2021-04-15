import { createContext, ReactNode, useContext, useState } from "react";

import { api } from "../services/api";

interface PlateProps {
  time: string;
  paid: boolean;
  left: boolean;
  plate: string;
  reservation: string;
}

interface HistoryProviderProps {
  children: ReactNode;
}

interface HistoryContextData {
  plate: PlateProps[];
  handleFetchData: (plate: string) => Promise<void>;
}

export const HistoryContext = createContext<HistoryContextData>(
  {} as HistoryContextData
);

export function HistoryProvider({ children }: HistoryProviderProps) {
  const [plate, setPlate] = useState<PlateProps[]>([]);

  // const { plateNumber } = useValidateInput();

  async function handleFetchData(plate: string) {
    const data = await api.get(`/${plate}`).then((response) => response.data);

    setPlate(data);
  }

  return (
    <HistoryContext.Provider value={{ plate, handleFetchData }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);

  return context;
}
