import React from 'react';

import { Typography } from '../../../Components/General';
import { ContainerInput, DatePickerContainer, Input, Label } from './styles';

interface DatePickerProps {
  checked?: boolean;
  onChange?: () => void;
  name: string;
  error?: any;
  label?: string;
  disabled?: boolean;
  type?: 'date' | 'time' | 'datetime';
  range?: boolean;
}

const DatePicker = ({ name, label, disabled, error, type = 'date' }: DatePickerProps) => {
  return (
    <DatePickerContainer>
      {!!label && <Label htmlFor={`datepicker-${name}`}>{label}</Label>}
      <ContainerInput>
        <Input
          id={`datepicker-${name}`}
          type={type === 'datetime' ? 'datetime-local' : type}
          name={name}
          disabled={disabled}
        />
      </ContainerInput>
      {!!error && (
        <Typography variant="b-sm" color="error">
          {error?.message}
        </Typography>
      )}
    </DatePickerContainer>
  );
};

export default DatePicker;
