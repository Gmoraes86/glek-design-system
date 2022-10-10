import React, { ReactElement } from 'react';

import { Typography } from '../../General';
import { TooltipContainer, TooltipText } from './styles';

interface TooltipProps {
  text?: string;
  children: ReactElement | string;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <TooltipContainer>
      {children}
      <TooltipText visibility={!!text}>
        <Typography variant="b-sm" color="white">
          {text}
        </Typography>
      </TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
