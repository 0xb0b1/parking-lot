import { Container } from "./styles";

import BackIcon from "../../images/Shape.png";

interface RegisterDetailProps {
  plate: string;
  status: string;
  time: string;
  paid: string;
  leaveRegister: () => void;
}

function RegisterDetail({
  plate,
  status,
  time,
  paid,
  leaveRegister,
}: RegisterDetailProps) {
  return (
    <Container>
      <img onClick={leaveRegister} src={BackIcon} alt="Go Back Arrow" />
      <div className="plate">
        <span>PLACA</span>
        <span>{plate}</span>
      </div>
      <div className="status">
        <span>STATUS</span>
        <span>{status}</span>
      </div>
      <div className="time">
        <span>{paid ? "TEMPO TOTAL" : "TEMPO ATUAL"}</span>
        <span>{time}</span>
      </div>
      <div className="paid">
        <span>PAGAMENTO</span>
        <span>{paid}</span>
      </div>
    </Container>
  );
}

export default RegisterDetail;
