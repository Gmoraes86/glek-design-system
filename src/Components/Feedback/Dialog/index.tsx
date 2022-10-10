import React, { useEffect, useState } from 'react';

import { Backdrop } from '../../../Components/Bases/Backdrop';
import { Button, Typography } from '../../../Components/General';
import { Col } from '../../../Components/Layout';
import useOuterClick from '../../../Hooks/useOuterClick';
import { DialogContainer, DialogContent, DialogFooter, DialogGrid, DialogHeader } from './styles';

interface DialogProps {
  type: 'confirmDelete' | 'confirmClose';
  open: boolean;
  onClose?: () => void;
  onAcceptClick?: () => void;
  onCancelClick?: () => void;
}

const Dialog = ({ type, onAcceptClick, onCancelClick, onClose, open }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
    onCancelClick && onCancelClick();
  };

  const handleCancel = () => {
    setIsOpen(false);
    onCancelClick && onCancelClick();
    onClose && onClose();
  };

  const handleAccept = () => {
    setIsOpen(false);
    onAcceptClick && onAcceptClick();
  };

  const wrapperRef = useOuterClick(handleClose);

  const renderTitle = () => {
    switch (type) {
      case 'confirmDelete':
        return <Typography variant="h5">Confirmação de exclusão</Typography>;
      case 'confirmClose':
        return <Typography variant="h5">Confirmar fechamento</Typography>;
      default:
        return <Typography variant="h5">Titulo do Dialog</Typography>;
    }
  };

  const renderDescription = () => {
    switch (type) {
      case 'confirmDelete':
        return (
          <Typography variant="body">
            Tem certeza que deseja exluir esse item? Essa ação não poderá ser desfeita!
          </Typography>
        );
      case 'confirmClose':
        return (
          <Typography variant="body">
            Você está fechando o formulário sem salvar, isto perderá os dados alterados!
          </Typography>
        );
      default:
        return <Typography variant="body">Titulo do Dialog</Typography>;
    }
  };

  return (
    <>
      {isOpen ? (
        <Backdrop opacity="0.6">
          <DialogContainer ref={wrapperRef}>
            <DialogGrid>
              <DialogHeader>{renderTitle()}</DialogHeader>
              <DialogContent>{renderDescription()}</DialogContent>
              <DialogFooter>
                <Col>
                  <Button onClick={() => handleCancel()} variant="secondary">
                    Cancelar
                  </Button>
                </Col>
                <Col margin={[0, 0, 0, 15]}>
                  <Button color="error" onClick={() => handleAccept()}>
                    CONFIRMAR
                  </Button>
                </Col>
              </DialogFooter>
            </DialogGrid>
          </DialogContainer>
        </Backdrop>
      ) : null}
    </>
  );
};

export default Dialog;
