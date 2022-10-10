import styled from 'styled-components';

import { ModalProps } from './index';

type ModalWidthType = Pick<ModalProps, 'size'>;

const getModalWidth = (size: ModalWidthType): string => {
  switch (size) {
    case 'sm':
      return '300px';
    case 'md':
      return '500px';
    case 'lg':
      return '800px';
    case 'xl':
      return '1000px';
    default:
      return '300px';
  }
};

export const ModalContainer = styled.div<ModalProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: ${(props) => getModalWidth(props.size as ModalWidthType)};
  height: 100%;
  background-color: #fff;
  z-index: 200;
  transition: transform 0.3s ease-in-out;
  overflow: auto;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
