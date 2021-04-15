import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";
import { useValidateInput } from "./useValidateInput";

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
  plate: PlateProps[] | undefined;
}

export const HistoryContext = createContext<HistoryContextData>(
  {} as HistoryContextData
);

export function HistoryProvider({ children }: HistoryProviderProps) {
  const [plate, setPlate] = useState<PlateProps[]>();

  const { plateNumber } = useValidateInput();

  useEffect(() => {
    const fetchData = async () => {
      const data = await api
        .get(`${plateNumber}`)
        .then((response) => response.data);
      setPlate(data);
    };
    fetchData();
  }, [plateNumber]);

  return (
    <HistoryContext.Provider value={{ plate }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);

  return context;
}
