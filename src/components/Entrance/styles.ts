import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  background: var(--white);

  /* border-radius: 0.45rem; */
`;

export const Buttons = styled.div`
  display: flex;
  border-radius: 0.45rem;
`;

interface InputButtonProps {
  isActive: boolean;
}

export const InputButton = styled.button<InputButtonProps>`
  width: 100%;
  height: 3.4rem;

  border-bottom: ${(props) => (props.isActive ? `2px solid var(--cyan)` : "")};

  background: ${(props) => (props.isActive ? "#FFF" : "")};

  color: ${(props) => (props.isActive ? `var(--cyan)` : `var(--gray-300)`)};
`;

interface FormProps {
  isFormValid: boolean;
}

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

  button {
    margin: 0 1rem;
    height: 4.15rem;

    font-weight: 600;
    font-style: normal;

    border-radius: 0.45rem;

    color: var(--gray-300);
    background: var(--gray-100);

    &.active {
      color: var(--white);
      background: var(--btn-green);
    }

    &.pagamento {
      color: var(--white);
      background: var(--violet);
    }

    &.saida {
      background: var(--white);
      border: 1px solid #dadada;

      margin-top: 2rem;
    }
  }
`;

export const HistoryButton = styled.div`
  color: #00bcd4;
  padding: 2rem 1rem;

  cursor: pointer;

  font: 600 0.93rem "Open Sans", sans-serif;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
`;
