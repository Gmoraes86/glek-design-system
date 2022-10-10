import React, { ReactElement } from 'react';

import { alignProp, justifyProp } from '../../../Utils/styledTypes';
import { ColContainer, GridContainer, RowContainer } from './styles';

export interface GridProps {
  children: ReactElement | ReactElement[] | string;
}

export interface RowProps {
  padding?: number[];
  margin?: number[];
  children: ReactElement | ReactElement[] | string;
  justify?: justifyProp;
  align?: alignProp;
}

export interface ColProps {
  padding?: number[];
  margin?: number[];
  children?: ReactElement | ReactElement[] | string;
  sm?: number; // mobile
  md?: number; // tablet
  lg?: number; // laptop
  xl?: number; // desktop
}

export const Grid = ({ children }: GridProps): ReactElement => {
  return <GridContainer>{children}</GridContainer>;
};

export const Row = ({ children, padding, margin, align, justify }: RowProps): ReactElement => {
  return (
    <RowContainer padding={padding} margin={margin} align={align} justify={justify}>
      {children}
    </RowContainer>
  );
};

export const Col = ({ children, padding, margin, sm, md, lg, xl }: ColProps): ReactElement => {
  return (
    <ColContainer padding={padding} margin={margin} sm={sm} md={md} lg={lg} xl={xl}>
      {children}
    </ColContainer>
  );
};
