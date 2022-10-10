import styled, { keyframes } from 'styled-components';

export const Input = styled.input`
  border: 1px solid #cfcfd4;
  border-radius: 4px;
  width: 100%;
  padding: ${(props) => props.theme.spacing[1]} ${(props) => props.theme.spacing[3]};
  height: 35px;
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #242424;

  &:focus {
    outline: none !important;
    border-color: #ff823a;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #383632;
  padding-bottom: 4px;
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.005em;
`;

export const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  position: relative;
`;

export const DatePickerContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 540px;
`;
