import { Container } from "../LoadingEntrance/styles";

import RegisteredImg from "../../../../images/icons/round-done-button.svg";

interface IProps {
  backToHome: () => void;
}

function Registered({ backToHome }: IProps) {
  setInterval(() => {
    backToHome();
  }, 1000);

  return (
    <Container>
      <img src={RegisteredImg} alt="Loading" />
      <span>Registrado</span>
    </Container>
  );
}

export default Registered;
