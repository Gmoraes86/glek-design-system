import React, { ReactElement, useState } from 'react';

import { Col, Icon, Row } from '../../../Components';
import {
  Clickable,
  CollapseContainer,
  CollapseContent,
  CollapseHeader,
  IconDiv,
  Title,
} from './styles';

interface CollapseProps {
  title: string;
  widgets?: ReactElement[];
  isOpen?: boolean;
  onToggle?: () => void;
  children: ReactElement | string;
  padding?: number[];
  margin?: number[];
}

const Collapse = ({
  title,
  widgets,
  isOpen,
  onToggle,
  children,
  margin,
  padding,
}: CollapseProps) => {
  const [toogle, setToogle] = useState(isOpen || false);

  const handleClick = () => {
    setToogle(!toogle);
    onToggle && onToggle();
  };

  return (
    <CollapseContainer margin={margin} padding={padding}>
      <CollapseHeader key="collapse-header">
        <Row align>
          <Col md={6}>
            <Title>{title}</Title>
          </Col>
          <Col md={6}>
            <Row justify="end">
              <Col>{widgets}</Col>
              <Col>
                <Clickable onClick={handleClick}>
                  <IconDiv collapse={toogle}>
                    <Icon size="xl" icon="arrowDown" />
                  </IconDiv>
                </Clickable>
              </Col>
            </Row>
          </Col>
        </Row>
      </CollapseHeader>
      <CollapseContent key="collapse-content" toogle={toogle}>
        {children}
      </CollapseContent>
    </CollapseContainer>
  );
};

export default Collapse;
