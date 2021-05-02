import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);

  width: 100%;
  max-width: 420px;

  margin: 2rem auto;

  @media (min-width: 768px) {
    max-width: 720px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  border-radius: 0.25rem;
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
