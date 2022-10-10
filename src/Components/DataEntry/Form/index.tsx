import React, { ReactElement } from 'react';

import { Dialog } from '../../../Components/Feedback';
import { FormCustom } from './styles';

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: ReactElement;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  closeConfirm?: boolean;
  onCloseConfirm?: (statusConfirm: boolean) => void;
}

const Form = ({ children, onSubmit, closeConfirm = false, onCloseConfirm }: FormProps) => {
  return (
    <>
      <FormCustom onSubmit={onSubmit}>{children}</FormCustom>
      <Dialog
        open={closeConfirm}
        type="confirmClose"
        onAcceptClick={() => {
          onCloseConfirm && onCloseConfirm(true);
        }}
        onCancelClick={() => {
          onCloseConfirm && onCloseConfirm(false);
        }}
      />
    </>
  );
};

export default Form;
