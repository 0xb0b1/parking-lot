import { useState } from "react";

import { useValidateInput } from "../../hooks/useValidateInput";

import RegisterDetail from "../RegisterDetail";

import NotPaidItems from "./NotPaidItems";
import PaidItems from "./PaidItems";

import { Container, Header, Content } from "./styles";

import BackIcon from "../../images/Shape.png";

interface IProps {
  LeaveHistory: () => void;
}

function PlateHistory({ LeaveHistory }: IProps) {
  const { plateNumber } = useValidateInput();

  const [isRegisterDetailOpen, setIsRegisterDetailOpen] = useState(false);

  function handleShowRegisterDetail() {
    setIsRegisterDetailOpen(true);
  }

  function handleCloseRegisterDetail() {
    setIsRegisterDetailOpen(false);
  }

  return (
    <Container>
      {isRegisterDetailOpen ? (
        <RegisterDetail
          plate=""
          status=""
          time=""
          paid=""
          leaveRegister={handleCloseRegisterDetail}
        />
      ) : (
        <Content>
          <Header>
            <img onClick={LeaveHistory} src={BackIcon} alt="Go Back Arrow" />
            <span>Placa {plateNumber}</span>
          </Header>
          <NotPaidItems showRegisterDetail={handleShowRegisterDetail} />
          <PaidItems showRegisterDetail={handleShowRegisterDetail} />
        </Content>
      )}
    </Container>
  );
}

export default PlateHistory;
