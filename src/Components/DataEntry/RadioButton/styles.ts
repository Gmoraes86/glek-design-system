import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: baseline !important;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
export const Label = styled.label`
  position: relative;
  font-size: 14px;
  margin-left: 4px;
  color: #383632;
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.005em;
`;

export const RadioButtonCheck = styled.label`
  position: absolute;
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f2f2f5;
  border: 1px solid #c7c9d9;
`;

export const RadioButtonCustom = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  min-width: 24px;
  height: 24px;
  top: 50%;
  &:hover ~ ${RadioButtonCheck} {
    background: #c7c9d9;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin: 4px;
      background: #c7c9d9;
    }
  }
  &:checked + ${RadioButtonCheck} {
    background: #fa4616;
    border: 0;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: white;
    }
  }

  &:checked + ${Label} {
    color: #fa4616;
  }
`;
