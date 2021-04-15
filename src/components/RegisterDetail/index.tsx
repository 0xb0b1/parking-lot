import { Container, Content } from "./styles";

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
      <Content>
        <div className="plate">
          <span>PLACA</span>
          <span>ABC-1234</span>
        </div>
        <div className="status">
          <span>STATUS</span>
          <span>STACIONADO</span>
        </div>
        <div className="time">
          <span>{paid ? "TEMPO TOTAL" : "TEMPO ATUAL"}</span>
          <span>1h20 min</span>
        </div>
        <div className="paid">
          <span>PAGAMENTO</span>
          <span>-</span>
        </div>
      </Content>
    </Container>
  );
}

export default RegisterDetail;
