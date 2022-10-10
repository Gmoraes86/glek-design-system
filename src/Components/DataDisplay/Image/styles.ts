import styled from 'styled-components';

import { Label as TypographyLabel } from '../../General/Typography/styles';

interface ImageContainerProps {
  maxWidth?: string | number;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px; min-width: ${maxWidth}px;`};
`;

export const ImageTag = styled.img`
  width: 100%;
  height: auto;
`;

export const NoImageContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 250px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(221, 229, 223, 0.5);
  border: 1px solid #dde5e9;
  border-radius: 4px;
  background: #f6f6f7;
  padding: 0 30px;
`;

export const Placeholder = styled(TypographyLabel)`
  color: #bebbb6;
`;

export const ImagePlaceholder = styled.img`
  height: 80px;
  width: 60px;
`;
