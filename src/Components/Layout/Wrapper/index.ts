import styled from 'styled-components';

import { alignProp, justifyProp } from '../../../Utils/styledTypes';

interface WrapperProps {
  position?: string;
  width?: string;
  height?: string;
  justify?: justifyProp;
  align?: alignProp;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  ${({ position }) => position && `position: ${position};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;

export default Wrapper;
