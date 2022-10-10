import styled from 'styled-components';

import { ButtonProps } from './index';
interface IconDivProps {
  iconLeft?: boolean;
  iconRight?: boolean;
}

const getVariant = (variant: string, color: string, themeColors: any) => {
  switch (variant) {
    case 'primary':
      return `
      border: 1px solid transparent;
      background-color: ${themeColors[color].main};
      color: ${themeColors.white};
    `;
    case 'secondary':
      return `
      border: 1px solid ${themeColors[color].main};
      background-color: transparent;
      color: ${themeColors[color].main};
    `;
    case 'link':
      return `
      border: 1px solid transparent;
      background-color: transparent;
      padding: 8px 16px;
      height: 32px;
      color: ${themeColors[color].main};
      `;
    default:
      return `
      border: 1px solid transparent;
      background-color: ${themeColors[color].main};
      color: ${themeColors.white};
    `;
  }
};

export const BaseButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: ${(props) =>
    props.size === 'small' ? '12px 24px' : props.size === 'large' ? '16px 48px' : '17px 32px'};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: 0.2s;
  height: ${(props) =>
    props.size === 'small' ? '45px' : props.size === 'large' ? '59px' : '53px'};
  ${(props) => getVariant(props.variant || 'primary', props.color || 'primary', props.theme.colors)}
  ${({ disabled }) => disabled && 'font-weight: 600; opacity: 0.4;'}
`;
export const IconDiv = styled.div<IconDivProps>`
  position: relative;
  ${(props) => props.iconLeft && `margin-right: 8px`}
  ${(props) => props.iconRight && `margin-left: 8px;`}
  flex-direction: row;
  align-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  height: 32px;
  width: 32px;
`;
