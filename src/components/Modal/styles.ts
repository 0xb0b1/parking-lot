import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    text-align: center;
    margin-bottom: 0.45rem;
    font-size: 1rem;

    width: 196px;
  }

  h3 {
    font-size: 2.375rem;
    font-weight: 400;
    color: var(--green-300);
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 1.4rem;

  height: 4.12rem;
  width: 100%;

  border-radius: 0.25rem;

  font-weight: 600;
  font-style: normal;

  color: var(--white);
  background: var(--green-500);
`;

export const ExitButton = styled.button`
  border: 0;
  background: none;
  color: var(--green-300);

  font-weight: 600;

  margin-top: 1rem;
`;
