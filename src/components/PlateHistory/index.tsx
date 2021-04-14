import { useEffect, useState } from "react";
import { useValidateInput } from "../../hooks/useValidateInput";
import { api } from "../../services/api";
import { Container } from "./styles";

interface PlateProps {
  plate: Array<{
    time: string;
    paid: boolean;
    left: boolean;
    plate: string;
    reservation: string;
  }>;
}

function PlateHistory() {
  const { plateNumber } = useValidateInput();

  const [plate, setPlate] = useState<PlateProps[]>([]);

  useEffect(() => {
    const request = api.get(`${plateNumber}`);
    // setPlate(request);
    console.log(request);
  }, []);

  return (
    <Container>
      <h1>PlateHistory</h1>
    </Container>
  );
}

export default PlateHistory;
