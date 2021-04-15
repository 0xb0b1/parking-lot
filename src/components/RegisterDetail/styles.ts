import styled from "styled-components";

export const Container = styled.div`
  margin: 0.45rem 0.65rem;
`;

export const Content = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;

  margin-top: 0.95rem;

  font-family: "Open Sans", sans-serif;

  .plate,
  .status,
  .time,
  .paid {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    span:first-child {
      color: var(--gray-300);
      font-size: 0.75rem;
      font-weight: 400;
    }

    span:last-child {
      margin-top: 0.25rem;
    }
  }

  .plate {
    span:last-child {
      color: var(--cyan);
      font-size: 2.375rem;
    }
  }

  .status,
  .time,
  .paid {
    span:last-child {
      font-size: 1.5rem;
    }
  }
`;
