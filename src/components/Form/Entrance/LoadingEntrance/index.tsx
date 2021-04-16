import LoadingImg from "../../../../images/icons/loading.svg";

import { Container } from "./styles";

function LoadingEntrance() {
  return (
    <Container>
      <img src={LoadingImg} alt="Loading" />
      <span>Registrando...</span>
    </Container>
  );
}

export default LoadingEntrance;
