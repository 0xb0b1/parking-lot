import { useState } from "react";
import { api } from "../services/api";
import { useValidateInput } from "./useValidateInput";

interface PlateProps {
  plate: Array<{
    time: string;
    paid: boolean;
    left: boolean;
    plate: string;
    reservation: string;
  }>;
}
interface HistoryProps {
  handlePlateData: () => void;
}

export function useHistory() {
  const { plateNumber } = useValidateInput();

  const [plate, setPlate] = useState<PlateProps[]>([]);

  async function handlePlateData<HistoryProps>(plate: string) {
    const data: any = await api
      .get(`${plate}`)
      .then((response) => response.data);
    setPlate(data);
  }

  return [plate, handlePlateData];
}
