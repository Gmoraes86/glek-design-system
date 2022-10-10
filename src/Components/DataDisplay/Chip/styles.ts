import styled from 'styled-components';

import { Typography } from '../../General';

interface ChipBaseProps {
  color?: 'success' | 'error' | 'warning' | 'info';
  variant?: 'success' | 'error' | 'warning' | 'info';
}

interface ChipTextProps {
  variant?: string;
}

const getBackgroundColor = (variant?: string, colors?: any) => {
  if (colors) {
    return variant ? colors[variant] : colors.default;
  }
};

export const ChipBase = styled.div<ChipBaseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 31px;
  border: 1px solid ${(props) => getBackgroundColor(props.variant, props.theme.colors).main};
  background-color: ${({ theme, variant }) => getBackgroundColor(variant, theme.colors).light[3]};
  width: 73px;
  padding: 4px 8px;
  transition: 0.2s;
  margin: auto;
  opacity: 0.9;
`;

export const ChipText = styled(Typography)<ChipTextProps>`
  color: ${(props) => getBackgroundColor(props.color, props.theme.colors).dark[1]};
  font-weight: 600;
  font-size: 12px;
`;
