import { Container } from "../LoadingEntrance/styles";

import RegisteredImg from "../../../../images/icons/round-done-button.svg";
import { useEffect } from "react";

interface IProps {
  backToHome: () => void;
}

function Registered({ backToHome }: IProps) {
  useEffect(() => {
    setTimeout(() => {
      backToHome();
    }, 1000);

    clearInterval();
  });

  return (
    <Container>
      <img src={RegisteredImg} alt="Loading" />
      <span>Registrado</span>
    </Container>
  );
}

export default Registered;
