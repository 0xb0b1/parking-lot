import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--cyan);
  height: 4rem;

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
