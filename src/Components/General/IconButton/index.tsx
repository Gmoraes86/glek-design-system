import React from 'react';

import { Icon, Tooltip } from './../../../Components';
import { BaseButton } from './styles';

interface ButtonProps {
  onClick?: () => void;
  icon: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  tooltip?: string;
  color?: 'info' | 'success' | 'warning' | 'error';
}

const IconButton = ({ onClick, type = 'button', disabled, icon, tooltip, color }: ButtonProps) => {
  return (
    <>
      <Tooltip text={tooltip}>
        <BaseButton
          color={color}
          type={type}
          disabled={disabled}
          //size={size}
          onClick={onClick}
        >
          <Icon icon={icon} color={color} size="md" />
        </BaseButton>
      </Tooltip>
    </>
  );
};

export default IconButton;
