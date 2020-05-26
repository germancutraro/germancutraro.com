import Document, { Html, Head } from 'next/document';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
 ${normalize}

  body {
    --bgColor: #FAF5F2;
    --textColor: #22211D;
    --iconColor: #000;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
  }

  html, body {
    background-color: var(--bgColor);
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
  }

  body {
    background-color: var(--bgColor);
    transition: background-color 0.2s linear;
  }

  body.dark {
    --bgColor: #1B1C22;
    --textColor: white;
    --iconColor: #fff;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
