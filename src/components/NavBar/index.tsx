// import { useState } from "react";

import { FaAlignRight } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { Container, NavLogo, Hamburger } from "./styles";

import Logo from "../../images/logo_parking.svg";
import { useOpenMenu } from "../../hooks/useOpenMenu";

function NavBar() {
  const { isOpenMenu, handleShowMenu } = useOpenMenu();

  return (
    <Container>
      <NavLogo>
        <img src={Logo} alt="Logo" />
      </NavLogo>
      <Hamburger>
        {isOpenMenu ? (
          <FiX onClick={handleShowMenu} />
        ) : (
          <FaAlignRight onClick={handleShowMenu} />
        )}
      </Hamburger>
    </Container>
  );
}

export default NavBar;
