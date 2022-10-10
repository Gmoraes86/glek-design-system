import React, { useState } from 'react';

import { Icon, Typography } from '../../../Components';
import useOuterClick from '../../../Hooks/useOuterClick';
import {
  Clickable,
  CollapseContainer,
  Container,
  IconDiv,
  Input,
  ItemContainer,
  Link,
} from './styles';

interface MenuProps {
  title: string;
  // children?: ReactElement[],
  valuesArray: { label: string; value: string }[];
  router?: boolean;
}

const Menu = ({ valuesArray, title, router }: MenuProps) => {
  const [collapse, setCollapse] = useState(true);
  const wrapperRef = useOuterClick(() => {
    setCollapse(true);
  });

  return (
    <Container ref={wrapperRef} onClick={() => setCollapse(!collapse)}>
      <Clickable>
        <Input>
          <Typography variant="d1">{title}</Typography>
        </Input>
        <IconDiv collapse={collapse}>
          <Icon icon="arrowDown" color="grey" />
        </IconDiv>
      </Clickable>
      {!collapse && (
        <CollapseContainer>
          {valuesArray.map((item: { value: string; label: string }, index: number) => (
            <ItemContainer key={index} onClick={() => setCollapse(true)}>
              {router ? (
                <Link to={item.value}>{item.label}</Link>
              ) : (
                <Typography variant="body">{item.label}</Typography>
              )}
            </ItemContainer>
          ))}
        </CollapseContainer>
      )}
    </Container>
  );
};

export default Menu;
