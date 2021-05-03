import styled from "styled-components";

export const Container = styled.nav`
  background-color: var(--green-300);
  height: 4rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
`;

export const NavLogo = styled.div``;
export const Hamburger = styled.div`
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
