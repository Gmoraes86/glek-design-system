import React from 'react';

import { Typography } from '../../../Components/General';
import {
  ContainerInput,
  IconDiv,
  InputBaseOutline,
  InputLabel,
  TextFieldContainer,
} from './styles';

interface TextFieldProps {
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'money' | 'hidden';
  placeholder?: string;
  name?: string;
  inputRef?: any;
  label?: string;
  error?: any;
  iconLeft?: any;
  iconRight?: any;
  maxLength?: number;
}

const TextField = ({
  type = 'text',
  label,
  placeholder,
  name,
  error,
  iconLeft,
  iconRight,
  maxLength,
  ...rest
}: TextFieldProps) => {
  return (
    <TextFieldContainer>
      {!!label && <InputLabel htmlFor={`input-${name}`}>{label}</InputLabel>}
      <ContainerInput>
        {iconLeft && <IconDiv iconLeft></IconDiv>}
        <InputBaseOutline
          iconLeft={iconLeft}
          iconRight={iconRight}
          id={`input-${name}`}
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
          {...rest}
        />
        {iconRight && <IconDiv iconRight></IconDiv>}
      </ContainerInput>
      {!!error && (
        <Typography variant="b-sm" color="error">
          {error?.message}
        </Typography>
      )}
    </TextFieldContainer>
  );
};

export default TextField;
