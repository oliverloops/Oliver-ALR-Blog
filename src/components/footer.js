import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaTwitter, FaCodepen } from 'react-icons/fa';

const colored = keyframes`
    0% {
        color: rgb(25, 188, 54);
        transition: all 300ms linear;
    } 25% {
        color: rgb(255, 114, 97);
        transition: all 300ms linear;
    } 50% {
        color: rgb(242, 78, 30);
        transition: all 300ms linear;
    } 75% {
        color: rgb(162, 89, 255);
        transition: all 300ms linear;
    } 100% {
        color: rgb(9, 207, 131);
        transition: all 300ms linear;
    }
`;

const Github = styled(FaGithub)`
  width: 34px;
  height: 34px;
  opacity: 0.25;
  padding: 2em 0.35em 1em 0em;

  &:hover {
    color: #000;
    opacity: 1;
    transition: all 200ms linear;
  }
`;

const Twitter = styled(FaTwitter)`
  width: 35px;
  height: 35px;
  opacity: 0.25;
  padding: 2em 0em 1em 0.35em;

  &:hover {
    color: rgb(29, 161, 242);
    opacity: 1;
    transition: all 200ms linear;
  }
`;

const Codepen = styled(FaCodepen)`
  width: 32px;
  height: 32px;
  opacity: 0.25;
  padding: 2em 0em 1em 0.5em;

  &:hover {
    color: #000;
    opacity: 1;
    transition: all 200ms linear;
  }
`;

const Footer = () => (
  <>
    <div
      css={`
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5em;
      `}
    >
      <a
        css={`
          color: rgba(0, 0, 0, 0.75);
          text-decoration: none;
        `}
        href="https://github.com/OliverALR"
      >
        <Github />
      </a>
      <a
        css={`
          color: rgba(0, 0, 0, 0.75);
          text-decoration: none;
        `}
        href="https://twitter.com/theoliveralr"
      >
        <Twitter />
      </a>
      <a
        css={`
          color: rgba(0, 0, 0, 0.75);
          text-decoration: none;
        `}
        href="https://codepen.io/oliverhuxley"
      >
        <Codepen />
      </a>
    </div>

    <small
      css={`
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 0.95em;
        color: rgb(0, 0, 0, 0.5);

        &:hover {
          animation: ${colored} 3s linear infinite;
        }
      `}
    >
      ©2020 This is Oliver ALR
    </small>
  </>
);

export default Footer;
