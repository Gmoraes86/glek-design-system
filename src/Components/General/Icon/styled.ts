import styled from 'styled-components';

import { IconProps } from './index';

const getSize = (size: string) => {
  switch (size) {
    case 'xs':
      return 'height: 14px; width: 14px;';
    case 'sm':
      return 'height: 16px; width: 16px;';
    case 'md':
      return 'height: 20px; width: 20px;';
    case 'lg':
      return 'height: 24px; width: 24px;';
    case 'xl':
      return 'height: 32px; width: 32px;';
    default: // md
      return 'height: 20px; width: 20px;';
  }
};

export const IconImg = styled.svg<IconProps>`
  ${({ size = 'md' }) => getSize(size)}
  ${({ disabled }) => disabled && 'opacity: 0.3;'};
  -webkit-mask: url(${({ url }) => url}) no-repeat center;
  mask: url(${({ url }) => url}) no-repeat center;
  mask-size: 100%, 100%, contain;
  background-color: ${({ theme, color = 'grey' }) => theme.colors[color].main};
`;
