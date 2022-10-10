import React from 'react';

import { ChipBase, ChipText } from './styles';

interface ChipProps {
  label: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
}

const Chip = ({ label, variant }: ChipProps) => {
  return (
    <ChipBase variant={variant}>
      <ChipText color={variant} variant="b-sm-sb">
        {label}
      </ChipText>
    </ChipBase>
  );
};

export default Chip;
