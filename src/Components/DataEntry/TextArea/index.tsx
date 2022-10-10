import React, { useState } from 'react';

import { Typography } from '../../../Components/General';
import { InputBaseOutline, InputLabel, TextAreaContainer } from './styles';

interface TextAreaProps {
  placeholder?: string;
  onChange?: any;
  name?: string;
  label?: string;
  value?: string;
  error?: any;
}

const TextArea = ({ label, placeholder, onChange, name, value, error }: TextAreaProps) => {
  const [valueTemp, setValue] = useState(value);
  const handleChange = (value: any) => {
    setValue(value.toString());
    onChange && onChange(value.toString());
  };

  return (
    <TextAreaContainer>
      {!!label && <InputLabel htmlFor={`checkbox-${name}`}>{label}</InputLabel>}
      <InputBaseOutline
        id={`input-${name}`}
        placeholder={placeholder}
        // { ...inputRef(name)}
        onChange={handleChange}
        value={valueTemp}
      />
      {!!error && (
        <Typography variant="b-sm" color="error">
          {error?.message}
        </Typography>
      )}
    </TextAreaContainer>
  );
};

export default TextArea;
