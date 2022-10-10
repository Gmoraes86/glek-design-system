import React from 'react';

import { Typography } from '../../';
import { CheckBox, CheckBoxLabel, SwitchContainer } from './styles';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name: string;
  label?: string;
  disabled?: boolean;
}

const Switch = ({ name, label, disabled }: SwitchProps) => {
  return (
    <SwitchContainer disabled={disabled}>
      <CheckBox id={`checkbox-${name}`} type="checkbox" name={name} disabled={disabled} />
      <CheckBoxLabel htmlFor={`checkbox-${name}`} />
      {!!label && <Typography variant="label">{label}</Typography>}
    </SwitchContainer>
  );
};

export default Switch;
