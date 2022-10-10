import React, { useEffect, useState } from 'react';

import { IconButton, Typography } from '../../../Components';
import useOuterClick from '../../../Hooks/useOuterClick';
import { Backdrop } from '../../Bases/Backdrop';
import { ModalContainer } from './styles';

export interface ModalProps {
  title?: string;
  children: React.ReactNode | JSX.Element;
  open?: boolean;
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal = ({ title, children, open = false, onClose, size = 'sm' }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const wrapperRef = useOuterClick(handleClose);

  return (
    <>
      {isOpen ? (
        <Backdrop>
          <ModalContainer ref={wrapperRef} size={size}>
            <div>
              <div>
                <IconButton onClick={handleClose} icon="close" />
              </div>
              <div>
                <Typography variant="h4">{title}</Typography>
              </div>
            </div>
            <div>{children}</div>
          </ModalContainer>
        </Backdrop>
      ) : null}
    </>
  );
};

export default Modal;
