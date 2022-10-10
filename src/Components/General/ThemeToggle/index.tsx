import React from 'react';

import { Typography } from '../../';
import { CheckBox, CheckBoxLabel, SwitchContainer } from './styles';

export interface SwitchProps {
  checked?: boolean;
  name: string;
  label?: string;
  disabled?: boolean;
  theme?: boolean;
  onChange?: any;
}

const ThemeToggle = ({ name, label, theme, onChange }: SwitchProps) => {
  return (
    <SwitchContainer>
      <CheckBox
        id={`checkbox-${name}`}
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={theme}
      />
      <CheckBoxLabel htmlFor={`checkbox-${name}`} />
      {!!label && <Typography variant="label">{label}</Typography>}
    </SwitchContainer>
  );
};

export default ThemeToggle;
