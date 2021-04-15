import { useValidateInput } from "../../hooks/useValidateInput";

import { Container, Header, Content } from "./styles";

import BackIcon from "../../images/Shape.png";

interface IProps {
  LeaveHistory: () => void;
}

function PlateHistory({ LeaveHistory }: IProps) {
  const { plateNumber } = useValidateInput();

  const plate = [
    {
      time: "1 days 1 hours",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "5ffc64",
    },
    {
      time: "8 days 19 hours",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "6004e2",
    },
    {
      time: "54 seconds",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "601086",
    },
    {
      time: "39 days 20 hours",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "601088",
    },
    {
      time: "5 minutes",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "604517",
    },
    {
      time: "2 minutes",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "604519",
    },
    {
      time: "18 seconds",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "60451a",
    },
    {
      time: "2 minutes",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "60451a",
    },
    {
      time: "1 minutes",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "60451b",
    },
    {
      time: "54 seconds",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "60451b",
    },
    {
      time: "1 minutes",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "60451b",
    },
    {
      time: "3 minutes",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "60451c",
    },
    {
      time: "1 minutes",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "60451d",
    },
    {
      time: "2 days 3 hours",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "60451e",
    },
    {
      time: "37 seconds",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "6047ef",
    },
    {
      time: "1 days 16 hours",
      paid: true,
      left: true,
      plate: "AAA-1234",
      reservation: "605002",
    },
    {
      time: "27 days 18 hours",
      paid: true,
      left: false,
      plate: "AAA-1234",
      reservation: "60525a",
    },
  ];

  return (
    <Container>
      <Header>
        <img onClick={LeaveHistory} src={BackIcon} alt="Go Back Arrow" />
        <span>Placa {plateNumber}</span>
      </Header>
      <Content>
        {plate.map((item) => (
          <div className="box" onClick={() => console.log(item.time)}>
            <div className="time">
              <span>{item.paid ? "TEMPO TOTAL" : "TEMPO ATUAL"}</span>
              <span>{item.time}</span>
            </div>
            <div className="payment">
              <span>PAGAMENTO</span>
              <span>{item.paid ? "Pago" : "-"}</span>
            </div>
          </div>
        ))}
      </Content>
    </Container>
  );
}

export default PlateHistory;
