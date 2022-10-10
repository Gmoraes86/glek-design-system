import styled from 'styled-components';

interface ISwitchProps {
  disabled?: boolean;
}

export const SwitchContainer = styled.div<ISwitchProps>`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  transition: 0.3s;
  left: 0;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  width: 52px;
  height: 28px;
  background: transparent;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  &::before {
    content: url("data:image/svg+xml,%3Csvg width='14' height='12' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.841797 5.83351L3.9369 9.16665L11.6751 0.833313' stroke='white' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    position: absolute;
    top: 6px;
    left: 8px;
    transition: 0.3s;
  }
  &::after {
    content: '';
    z-index: 2;
    display: block;
    margin: 2px;
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 100px;
    transition: 0.3s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  transition: 0.3s;
  z-index: 1;
  border-radius: 100px;
  width: 42px;
  height: 26px;
  &:not(:checked) + ${CheckBoxLabel} {
    &::before {
      content: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle opacity='0.6' cx='6.5' cy='6.5' r='5.5' stroke='%23FA4616' stroke-width='2.5'/%3E%3C/svg%3E%0A");
      display: block;
      border-radius: 100px;
      top: 7px;
      margin-left: 24px;
      transition: 0.3s;
    }
  }
  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.colors.primary.main};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin-left: 26px;
      transition: 0.3s;
      background: #ffff;
    }
  }
`;
