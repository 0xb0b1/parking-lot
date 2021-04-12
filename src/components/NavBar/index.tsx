import { Container, NavLogo, Hamburger } from "./styles";

// import { HiMenu } from "react-icons/hi";
import MenuIcon from "../../images/icons/menu.svg";

import Logo from "../../images/logo_parking.svg";

function NavBar() {
  return (
    <Container>
      <NavLogo>
        <img src={Logo} alt="Logo" />
      </NavLogo>
      <Hamburger>
        <img
          onClick={() => console.log("Clicked")}
          src={MenuIcon}
          alt="Menu Icon"
          style={{ fontSize: "3rem", color: "#FFF", fontStyle: "200" }}
        />
      </Hamburger>
    </Container>
  );
}

export default NavBar;
