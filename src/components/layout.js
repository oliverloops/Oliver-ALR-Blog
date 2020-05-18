import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: rgb(244, 245, 241);
  }
`;

const Layout = ({ children }) => (
  <>
    <main
      css={`
        max-width: 90vw;
        margin: 2.5rem auto 4rem;
        width: 58%;
        position: static;

        @media (min-width: 300px) and (max-width: 359px) {
          width: 80%;
        }

        @media (min-width: 360px) and (max-width: 768px) {
          width: 75%;
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          width: 60%;
        }
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
