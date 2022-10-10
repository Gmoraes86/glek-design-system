import styled from 'styled-components';

import { getMarginProp, getPaddingProp } from '../../../Utils/styledProps';
import { BoxContainerProps } from './index';

export const BoxContainer = styled.div<BoxContainerProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  ${({ margin }) => getMarginProp(margin)}
  ${({ padding }) => getPaddingProp(padding)}
    ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ display }) => display && `display: ${display};`}
    width: 100%;
`;
