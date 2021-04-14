import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  background: var(--white);

  /* border-radius: 0.45rem; */
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
