import { useValidateInput } from "../../hooks/useValidateInput";

import { useHistory } from "../../hooks/useHistory";

import { Container, Header, Content } from "./styles";

import BackIcon from "../../images/Shape.png";
import NotPaidIcon from "../../images/icons/notpaid.svg";

interface IProps {
  LeaveHistory: () => void;
}

function PlateHistory({ LeaveHistory }: IProps) {
  const { plateNumber } = useValidateInput();

  const { plate } = useHistory();

  return (
    <Container>
      <Header>
        <img onClick={LeaveHistory} src={BackIcon} alt="Go Back Arrow" />
        <span>Placa {plateNumber}</span>
      </Header>
      <Content>
        {plate
          .filter((paid) => paid.paid !== true)
          .map((item) => (
            <div className="box" onClick={() => console.log(item.time)}>
              <div className="time">
                <span>TEMPO ATUAL</span>
                <span>{item.time}</span>
              </div>
              <div className="payment">
                <span>PAGAMENTO</span>
                <img src={NotPaidIcon} alt="not paid" />
              </div>
            </div>
          ))}
        {plate
          .filter((paid) => paid.paid === true)
          .map((item) => (
            <div className="box" onClick={() => console.log(item.time)}>
              <div className="time">
                <span>TEMPO TOTAL</span>
                <span>{item.time}</span>
              </div>
              <div className="payment">
                <span>PAGAMENTO</span>
                <span>Pago</span>
              </div>
            </div>
          ))}
      </Content>
    </Container>
  );
}

export default PlateHistory;
