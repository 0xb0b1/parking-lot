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

  button {
    margin: 0 1rem;
    height: 4.15rem;
    border-radius: 0.25rem;

    font-weight: 600;
    font-style: normal;

    color: var(--gray-300);
    background: var(--gray-100);

    &.entrada {
      margin-bottom: 3rem;
    }

    &.active {
      color: var(--white);
      background: var(--green-300);
    }

    &.disabled {
      cursor: not-allowed;
    }

    &.pagamento {
      color: var(--white);
      background: var(--green-300);
    }

    &.saida {
      background: var(--white);
      border: 1px solid #dadada;

      margin-top: 2rem;

      cursor: not-allowed;

      &.active {
        color: var(--green-300);
        border: 2px solid rgba(20, 204, 124, 0.3);
        cursor: pointer;
      }
    }
  }
`;

export const HistoryButton = styled.div`
  margin: 2rem 1rem;
  height: 4rem;
  border-radius: 0.25rem;

  button {
    padding: 2rem 1rem;

    width: 100%;
    height: 2.5rem;

    border-radius: 0.25rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    font: 600 0.93rem "Open Sans", sans-serif;
    text-transform: uppercase;

    color: transparent;
    background: none;

    &.active {
      color: #fff;
      background: var(--green-300);
      border: 1px solid rgba(20, 204, 124, 0.3);
    }
  }
`;
