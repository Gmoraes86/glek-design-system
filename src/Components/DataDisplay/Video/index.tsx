import React from 'react';

import { VideoContainer } from './styles';

interface VideoProps {
  src: string;
  alt?: string;
  maxWidth?: string | number;
}

const Video = ({ src, maxWidth }: VideoProps) => {
  return (
    <VideoContainer maxWidth={maxWidth} autoplay>
      <source src={src} type="video/webm" />
    </VideoContainer>
  );
};
export default Video;
