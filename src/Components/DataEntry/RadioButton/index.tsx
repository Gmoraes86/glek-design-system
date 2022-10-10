import React from 'react';

import { Row } from '../../../Components/Layout';
import {
  Item,
  Label,
  RadioButtonCheck,
  RadioButtonContainer,
  RadioButtonCustom,
  Wrapper,
} from './styles';

interface RadioButtonProps {
  radioArray: any[];
  checked?: boolean;
  name: string;
  label?: string;
  disabled?: boolean;
  value?: string | number;
}

const RadioButton = ({ radioArray, name, disabled, label }: RadioButtonProps) => {
  return (
    <RadioButtonContainer>
      <Row margin={[0, 0, 10, 0]}>
        <Label>{label}</Label>
      </Row>
      <Wrapper>
        {radioArray.map((item, index) => (
          <Item key={index}>
            <RadioButtonCustom
              // {...inputRef(name)}
              type="radio"
              id={`RadioButton-${name}-${item.value}`}
              name={name}
              value={item.value}
              disabled={disabled}
            />
            <RadioButtonCheck />
            <Label htmlFor={`RadioButton-${name}-${item.value}`}>{item.label}</Label>
          </Item>
        ))}
      </Wrapper>
    </RadioButtonContainer>
  );
};

export default RadioButton;
