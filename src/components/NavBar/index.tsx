// import { useState } from "react";

import { Container, NavLogo, Hamburger } from "./styles";

// import { HiMenu } from "react-icons/hi";
import OpenMenu from "../../images/icons/menu.svg";
import CloseMenu from "../../images/icons/close.svg";

import Logo from "../../images/logo_parking.svg";
import { useOpenMenu } from "../../hooks/useOpenMenu";

function NavBar() {
  // const [isActiveMenu, setIsActiveMenu] = useState(false);
  const { isOpenMenu, handleShowMenu } = useOpenMenu();

  return (
    <Container>
      <NavLogo>
        <img src={Logo} alt="Logo" />
      </NavLogo>
      <Hamburger>
        <img
          onClick={handleShowMenu}
          src={isOpenMenu ? CloseMenu : OpenMenu}
          alt="Menu Icon"
        />
      </Hamburger>
    </Container>
  );
}

export default NavBar;
