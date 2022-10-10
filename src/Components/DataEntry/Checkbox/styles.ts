import styled, { keyframes } from 'styled-components';

export const Label = styled.label`
  position: relative;
  font-size: 14px;
  color: #383632;
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;
`;

export const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(90deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
`;

export const Input = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #c7c9d9;
  background-color: #f2f2f5;
  margin: 0 5px 0 0;
  cursor: pointer;

  ::not(:disabled):checked & {
    background-color: #d1d1d1;
  }

  &:not(:checked):hover {
    background-color: ${(props) => props.theme.colors.grey.light[4]};
  }

  &:checked {
    background-color: ${(props) => props.theme.colors.primary.main};
    &:hover {
      background-color: ${(props) => props.theme.colors.primary.dark[2]};
    }
  }
`;

export const Indicator = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  position: absolute;
  cursor: pointer;

  ${Input}:not(:disabled):checked & {
    background-color: #d1d1d1;
  }
  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    left: 25%;
    top: 2px;
    content: url("data:image/svg+xml,%3Csvg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 5.75018L4.28559 8.75L11.25 1.25' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
`;
