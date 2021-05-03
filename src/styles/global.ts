import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f2f2f2;
    --white: #fff;
    
    --orange: #F1B147;

    --green-100: #0E8A54;
    --green-300: #11CC7C;
    --green-500: #48DD90;
    --green-800: #35E4BD;

    --btn-green: #28DD91;

    --gray-100: #DADADA;
    --gray-300: #9B9B9B;
    --gray-600: #4A4A4A;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.5%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
  }

  body, input, textarea, button {
    font: 1rem 400 "Open Sans", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }

  .react-modal-content {
    width: 100%;
    max-width: 31.18rem;

    height: 100%;
    max-height: 28rem;
    overflow-y: scroll;

    background: var(--background);

    padding: 2rem;
    margin: 0.65rem;

    position: relative;
    border-radius: 0.25rem;

    opacity: 0.95;

    &::-webkit-scrollbar {
      width: 5px;
      background-color: var(--green-300);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--green-500);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--green-100);
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: var(--green-800);
    }
  }
`;
