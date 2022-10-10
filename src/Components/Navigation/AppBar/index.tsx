import React, { ReactElement } from 'react';

import { AppBarContainer, LeftContainer, RightContainer } from './styles';

interface AppBarProps {
  leftItems?: ReactElement[];
  rightItems?: ReactElement[];
  children?: ReactElement;
}

const AppBar = ({ leftItems, rightItems, children }: AppBarProps) => {
  return (
    <AppBarContainer>
      {!!leftItems && <LeftContainer>{leftItems}</LeftContainer>}
      {children}
      {!!rightItems && <RightContainer>{rightItems}</RightContainer>}
    </AppBarContainer>
  );
};

export default AppBar;
