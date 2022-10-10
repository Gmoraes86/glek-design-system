import styled from 'styled-components';

import { mediaQueries } from '../../../Utils/breakPoints';
import {
  getAlignProp,
  getJustifyProp,
  getMarginProp,
  getPaddingProp,
} from '../../../Utils/styledProps';
import { alignProp, justifyProp } from '../../../Utils/styledTypes';

interface GridContainerProps {
  flex?: boolean;
}

interface RowContainerProps {
  flex?: boolean;
  justify?: justifyProp;
  align?: alignProp;
  padding?: number[];
  margin?: number[];
}

interface ColContainerProps {
  flex?: boolean;
  padding?: number[];
  margin?: number[];
  sm?: number; // smartphone
  md?: number; // tablet
  lg?: number; // laptop
  xl?: number; // desktop
}

export const GridContainer = styled.div<GridContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`;

export const RowContainer = styled.div<RowContainerProps>`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  align-items: flex-start;
  justify-content: flex-start;
  ${({ justify }) => getJustifyProp(justify || 'start')};
  ${({ align }) => getAlignProp(align || 'start')};

  ${({ margin }) => getMarginProp(margin)}
  ${({ padding }) => getPaddingProp(padding)}
`;

export const ColContainer = styled.div<ColContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ md }) => md && `flex: ${md};`};
  /* 
  @media ${mediaQueries.mobile} { 
    ${({ sm }) => sm && `flex: ${sm};`};
  }
  @media ${mediaQueries.tablet} { 
    ${({ md }) => md && `flex: ${md};`};
  }
  @media ${mediaQueries.laptop} { 
    ${({ lg }) => lg && `flex: ${lg};`};
  }
  @media ${mediaQueries.desktop} { 
    ${({ xl }) => xl && `flex: ${xl};`};
  } */

  ${({ margin }) => getMarginProp(margin)}
  ${({ padding }) => getPaddingProp(padding)}
`;
