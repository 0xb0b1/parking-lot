import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* transform: translateX(0); */

  background: var(--green-300);

  height: calc(100vh - 4rem);
  width: 100%;
  text-align: left;

  padding: 2rem 1.15rem;

  position: absolute;
  z-index: 99999;
  left: 0;

  transition: transform 0.3s ease-in-out;

  @media (min-width: 568px) {
    width: 30%;
  }

  a {
    font-size: 1.15rem;
    font-weight: 600;

    padding: 1.25rem 0;

    color: #fff;
    text-decoration: none;

    transition: filter 0.3s linear;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
