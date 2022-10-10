import React from 'react';

import { Typography } from '../../../Components/General';
import { ImageContainer, ImageTag, NoImageContainer, Placeholder } from './styles';

interface ImageProps {
  src: string;
  alt?: string;
  maxWidth?: string | number;
  label: string;
}

const Image = ({ src, alt, maxWidth, label }: ImageProps) => {
  const renderNoImage = (label: string) => (
    <>
      <Typography variant="label">{label}</Typography>
      <NoImageContainer>
        {/* <ImagePlaceholder src={imgFile} alt="no-image" /> */}
        <Placeholder>Imagem não carregada</Placeholder>
      </NoImageContainer>
    </>
  );

  return (
    <>
      {src ? (
        <ImageContainer maxWidth={maxWidth}>
          <Typography variant="label">{label}</Typography>
          <ImageTag src={src} alt={alt} />
        </ImageContainer>
      ) : (
        renderNoImage(label)
      )}
    </>
  );
};
export default Image;
