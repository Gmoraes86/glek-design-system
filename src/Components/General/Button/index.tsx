import React, { ReactElement } from 'react';

import Icon from '../Icon';
import Typography from '../Typography';
import { BaseButton, IconDiv } from './styles';

export interface ButtonProps {
  onClick?: () => void;
  children: ReactElement | ReactElement[] | string;
  variant?: 'primary' | 'secondary' | 'link';
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  iconLeft?: any;
  iconRight?: any;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  onClick = undefined,
  variant = 'primary',
  size = 'medium',
  iconLeft = null,
  iconRight = undefined,
  iconSize = 'lg',
  type = 'button',
  disabled = false,
  color = 'primary',
}: ButtonProps) => {
  return (
    <BaseButton
      type={type}
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
    >
      {iconLeft && (
        <IconDiv iconLeft>
          <Icon size={iconSize} icon={iconLeft} color={'grey'} />
        </IconDiv>
      )}
      <Typography variant="body">{children}</Typography>
      {iconRight && (
        <IconDiv iconRight>
          <Icon size={iconSize} icon={iconLeft} color={'grey'} />
        </IconDiv>
      )}
    </BaseButton>
  );
};

export default Button;
