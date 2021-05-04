import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  /* padding-bottom: 1rem; */

  font: normal 1.25rem "Open Sans", sans-serif;

  label {
    display: flex;
    flex-direction: column;

    margin: 2rem 1rem;

    font-size: 0.87rem;
    font-weight: 600;

    color: var(--gray-300);

    input {
      height: 4.15rem;
      text-align: center;

      font-size: 1.4rem;

      margin-top: 0.45rem;

      border: 1px solid #ccc;
      border-radius: 0.45rem;

      background-color: #fffbe6;

      &::placeholder {
        font-weight: 400;
        /* font-size: 1.4rem; */
        color: var(--gray-300);
      }
    }
  }
`;

interface CheckinButtonProps {
  isActive: boolean;
}

export const Button = styled.button<CheckinButtonProps>`
  margin: 0 1rem;
  height: 4.15rem;
  border-radius: 0.25rem;

  font-weight: 600;
  font-style: normal;

  /* color: ${(props) => (props.isActive ? `var(--gray-300)` : "#FFF")}; */
  color: var(--gray-300);
  background: var(--gray-100);

  transition: filter 0.2s;

  &:hover:not(.saida) {
    filter: brightness(0.8);
  }

  &.entrada {
    margin-bottom: 3rem;
  }

  &.active {
    color: var(--white);
    background: ${(props) =>
      props.isActive ? `var(--green-300)` : `var(--red-btn)`};
  }

  &.disabled {
    cursor: not-allowed;
  }
`;
