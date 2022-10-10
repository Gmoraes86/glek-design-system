import React from 'react';
import styled, { keyframes } from 'styled-components';

const motion = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const logoMotion = keyframes`
  0% {
    transform: scale(1);
  }
  /* POC quickly rotate cart */
  /* 5% {
    transform: scale(1.1);
    transform: rotate(360deg);
  }
  20% {

    transform: rotate(0deg);
  } */
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const LogoDiv = styled.img`
  background-size: fit;
  background-repeat: no-repeat;
  width: 26px;
  height: 26px;
  animation: ${logoMotion} 1.5s linear infinite;
  position: relative;
  top: 52px;
  left: 25px;
`;

const DualRingSpinner = styled.div`
  display: inline;
  padding: 0;
  width: 64px;
  height: 64px;
  :after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50px;
    border: 5px solid ${(props) => props.theme.colors.primary.main};
    border-color: ${(props) => props.theme.colors.primary.main} transparent
      ${(props) => props.theme.colors.primary.main} transparent;
    animation: ${motion} 1.5s linear infinite;
  }
`;

const Spinner = () => (
  <DualRingSpinner>
    <LogoDiv />
  </DualRingSpinner>
);

export default Spinner;
