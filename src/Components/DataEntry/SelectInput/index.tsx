import React, { useState } from 'react';

import { Icon, Typography } from '../../../Components';
import {
  ClickableContainer,
  CollapseContainer,
  Container,
  IconDiv,
  Input,
  ItemContainer,
} from './styles';

const SelectInput = ({ valuesArray }: any) => {
  const [value, setValue] = useState('Selecione o valor');
  const [collapse, setCollapse] = useState(true);

  return (
    <Container>
      <ClickableContainer>
        <Input>{value}</Input>
        <IconDiv onClick={() => setCollapse(!collapse)}>
          <Icon icon="arrowDown" />
        </IconDiv>
      </ClickableContainer>
      {!collapse ? (
        <CollapseContainer>
          {valuesArray.map((item: { value: string; label: string }, index: number) => (
            <ItemContainer
              key={index}
              last={index === valuesArray.length - 1}
              onClick={() => {
                setValue(item.value);
                setCollapse(true);
              }}
            >
              <Typography variant="b-sm">{item.label}</Typography>
            </ItemContainer>
          ))}
        </CollapseContainer>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default SelectInput;
