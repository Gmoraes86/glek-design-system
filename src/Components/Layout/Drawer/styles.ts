import styled, { keyframes } from 'styled-components';

import { ColContainer, GridContainer } from '../Grid/styles';

interface DrawerContainerProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  collapse: boolean;
}

interface DivTransitionProps {
  collapse?: boolean;
}

interface ColProps {
  align?: boolean;
}

interface GridProps {
  padding?: boolean;
}

const getDrawerWidth = (size: string): string => {
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

export const slide = (size: string) => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${size};
  }
`;

export const DrawerContainer = styled.div<DrawerContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ size }) => getDrawerWidth(size)};
  animation-duration: 0.3s;
  animation-name: ${({ size }) => slide(getDrawerWidth(size))};
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

export const IconDiv = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 32px;
  justify-content: center;
  height: 32px;
  margin-right: 15px;
`;

export const DivTransition = styled.div<DivTransitionProps>`
  // opacity: ${(props) => (!props.collapse ? 0 : 1)};
`;

export const Col = styled(ColContainer)<ColProps>`
  ${({ align }) => align && 'align-items: center;'}
`;

export const Grid = styled(GridContainer)<GridProps>`
  ${({ padding }) => padding && 'padding: 25px; width: auto;'}
`;
