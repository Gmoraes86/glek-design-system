import React, { ReactElement } from 'react';

import * as icons from '../../../Icons';
import { IconImg } from './styled';

interface AllIconsProps {
  [key: string]: any;
}

export interface IconProps {
  icon?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  url?: string;
  color?: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary' | 'grey';
}

const Icon = ({
  icon = 'primary',
  size = 'md',
  disabled,
  color = 'primary',
}: IconProps): ReactElement => {
  return (
    <IconImg size={size} color={color} url={(icons as AllIconsProps)[icon]} disabled={disabled} />
  );
};

export default Icon;
