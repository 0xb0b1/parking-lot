import { useEffect } from "react";
import { useRegister } from "../../../../hooks/useRegister";
import { useValidateInput } from "../../../../hooks/useValidateInput";
import LoadingImg from "../../../../images/icons/loading.svg";
import Registered from "../Registered";

import { Container } from "./styles";

interface IProps {
  registeredCheck: () => void;
}

function LoadingEntrance({ registeredCheck }: IProps) {
  useEffect(() => {
    setInterval(() => {
      registeredCheck();
    }, 1000);

    clearInterval();
  });

  return (
    <Container>
      <img src={LoadingImg} alt="Loading" />
      <span>Registrando...</span>
    </Container>
  );
}

export default LoadingEntrance;
