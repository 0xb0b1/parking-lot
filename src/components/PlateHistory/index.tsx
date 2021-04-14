import { useEffect, useState } from "react";
import { useValidateInput } from "../../hooks/useValidateInput";
import { api } from "../../services/api";

import { Container, Header } from "./styles";

import BackIcon from "../../images/Shape.png";

interface PlateProps {
  plate: Array<{
    time: string;
    paid: boolean;
    left: boolean;
    plate: string;
    reservation: string;
  }>;
}

interface IProps {
  LeaveHistory: () => void;
}

function PlateHistory({ LeaveHistory }: IProps) {
  const { plateNumber } = useValidateInput();

  // const [plate, setPlate] = useState<PlateProps[]>([]);

  // useEffect(() => {
  //   const request = api.get(`${plateNumber}`);
  //   // setPlate(request);
  //   console.log(request);
  // }, []);

  return (
    <Container>
      <Header>
        <img onClick={LeaveHistory} src={BackIcon} alt="Go Back Arrow" />
        <span>Placa {plateNumber}</span>
      </Header>
    </Container>
  );
}

export default PlateHistory;
