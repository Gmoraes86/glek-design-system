import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 170px;
`;

export const InputBaseOutline = styled.textarea`
  border: 1px solid #e3e3e7;
  border-radius: 4px;
  padding: ${(props) => props.theme.spacing[1]} ${(props) => props.theme.spacing[3]};
  height: 150px;

  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #242424;

  &:focus {
    outline: none !important;
    border-color: #ff823a;
  }
  ::placeholder {
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #bebbb6;
  }
`;

export const InputLabel = styled.label`
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
