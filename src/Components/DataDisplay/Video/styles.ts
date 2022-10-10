import styled from 'styled-components';

interface VideoContainerProps {
  maxWidth?: string | number;
}

export const VideoContainer = styled.video.attrs({
  autoplay: true,
  controls: true,
  loop: true,
})<VideoContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px; min-width: ${maxWidth}px;`};
`;
