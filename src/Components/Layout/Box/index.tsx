import React, { ReactElement } from 'react';

import { BoxContainer } from './styles';

export interface BoxContainerProps {
  visible?: boolean;
  children: ReactElement;
  padding?: number[];
  margin?: number[];
  justifyContent?: 'start' | 'end' | 'center' | 'space-evenly' | 'space-between' | 'space-around';
  alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  display?: 'flex' | 'block' | 'inline-block' | 'inline' | 'none';
}

const Box = ({
  children,
  visible = true,
  margin = [0, 0, 0, 0],
  padding = [0, 0, 0, 0],
  justifyContent,
  alignItems,
  display,
}: BoxContainerProps): ReactElement => {
  return (
    <BoxContainer
      visible={visible}
      margin={margin}
      padding={padding}
      justifyContent={justifyContent}
      alignItems={alignItems}
      display={display}
    >
      {children}
    </BoxContainer>
  );
};

export default Box;
