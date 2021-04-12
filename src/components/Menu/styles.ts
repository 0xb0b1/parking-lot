import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: flex-start; */

  /* transform: translateX(-100%); */

  background: var(--cyan);

  height: calc(100vh - 4rem);
  width: 100%;
  text-align: left;

  /* margin-top: 0.05rem; */

  padding: 0.85rem;

  position: absolute;
  /* top: 0; */
  left: 0;

  transition: transform 0.3s ease-in-out;

  @media (min-width: 568px) {
    width: 30%;
  }

  a {
    font-size: 1.24rem;
    font-weight: normal;

    padding: 2rem 0;

    color: #fff;
    text-decoration: none;

    transition: filter 0.3s linear;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
