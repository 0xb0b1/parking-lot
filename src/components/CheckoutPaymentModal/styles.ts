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
  }

  h3 {
    font-size: 2.375rem;
    font-weight: 400;
    color: var(--cyan);
  }
`;

export const ConfirmButton = styled.button`
  margin: 1.4rem 0;
  height: 4.12rem;
  width: 100%;
  border-radius: 0.25rem;

  font-weight: 600;
  font-style: normal;

  color: var(--white);
  background: var(--violet);
`;

export const ExitButton = styled.button`
  border: 0;
  background: none;
  color: var(--cyan);

  font-weight: 600;

  margin-top: 1rem;
`;
