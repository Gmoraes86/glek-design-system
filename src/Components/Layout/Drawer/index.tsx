import React, { ReactElement, useEffect, useState } from 'react';

import { Divider, Icon, Row, Typography } from '../../../Components';
import useOuterClick from '../../../Hooks/useOuterClick';
import { Backdrop } from '../../Bases/Backdrop';
import { Col, DivTransition, DrawerContainer, Grid, IconDiv } from './styles';

interface DrawerProps {
  widget?: ReactElement;
  title?: string;
  children: ReactElement;
  open: boolean;
  onClose?: () => boolean;
  size: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  disableOuterClick?: boolean;
}

const Drawer = ({
  title,
  children,
  open,
  onClose,
  size,
  showCloseButton = false,
  widget,
  disableOuterClick,
}: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = (outerClick = true) => {
    if (disableOuterClick && outerClick) {
      //ignore outer click
    } else {
      if (onClose) {
        setIsOpen(!onClose());
      }
    }
  };

  const wrapperRef = useOuterClick(handleClose);

  return (
    <DivTransition collapse={isOpen}>
      {isOpen ? (
        <Backdrop opacity="0.6">
          <DrawerContainer collapse={isOpen} ref={wrapperRef} size={size}>
            <Grid padding>
              <Row align justify="between">
                <Col align>
                  {showCloseButton && (
                    <IconDiv onClick={() => handleClose(false)}>
                      <Icon icon="arrowRight" color={'primary'} />
                    </IconDiv>
                  )}
                  {title && <Typography variant="h3">{title}</Typography>}
                </Col>
                <Col>{widget}</Col>
              </Row>
              <Divider />
              <Row>{children}</Row>
            </Grid>
          </DrawerContainer>
        </Backdrop>
      ) : null}
    </DivTransition>
  );
};

export default Drawer;
