import styled from 'styled-components';

import { Row } from '../../../Components/Layout';

export const DialogContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 24px;
  width: 500px;
  height: 250px;
  background-color: #fff;
  border-radius: 4px;
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

export const DialogGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const DialogHeader = styled(Row)``;

export const DialogContent = styled(Row)``;

export const DialogFooter = styled(Row)`
    justify: 'end',
    align: true
`;
