import React, { memo } from 'react';

import { Indicator, Input, Label } from './styles';

interface CheckboxProps {
  onChange?: any;
  name?: string;
  inputRef?: any;
  label?: string;
  disabled?: boolean;
  value?: string | number | readonly string[];
}

const Checkbox = ({ value, onChange, name, label, disabled, ...rest }: CheckboxProps) => {
  return (
    <Label htmlFor={`checkbox-${name}`}>
      <Input
        id={`checkbox-${name}`}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...rest}
      />
      <Indicator />
      {label}
    </Label>
  );
};

export default memo(Checkbox);
