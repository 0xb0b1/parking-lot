import { useOpenMenu } from "../../hooks/useOpenMenu";
import { Container } from "./styles";

function Menu() {
  const { isOpenMenu } = useOpenMenu();

  return (
    <Container
      style={{
        transform: isOpenMenu ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <a href="/entradas">
        <span onClick={() => console.log("Entrada")}>Entrada</span>
      </a>
      <a href="/saidas">
        <span>Saída</span>
      </a>
    </Container>
  );
}

export default Menu;
