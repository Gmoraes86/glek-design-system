import React from 'react';

import {
  BExtraSmall,
  BLarge,
  BLargeSBold,
  BMedium,
  BMediumSBold,
  Boby,
  BobySBold,
  BSmall,
  BSmallSBold,
  D1,
  D2,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Label,
  LExtraLarge,
  LLarge,
  LSmall,
  P,
} from './styles';

export interface TypographyProps {
  children?: React.ReactNode;
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'd1'
    | 'd2'
    | 'paragraph'
    | 'body'
    | 'b-lg'
    | 'b-md'
    | 'b-sm'
    | 'body-sb'
    | 'b-lg-sb'
    | 'b-md-sb'
    | 'b-sm-sb'
    | 'l-xl'
    | 'l-lg'
    | 'label'
    | 'l-sm'
    | 'l-xs';
  color?: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'white';
}

const Typography = ({ children, variant, color }: TypographyProps) => {
  const getVariant = () => {
    switch (variant) {
      case 'h1':
        return <H1 color={color}>{children}</H1>;
      case 'h2':
        return <H2 color={color}>{children}</H2>;
      case 'h3':
        return <H3 color={color}>{children}</H3>;
      case 'h4':
        return <H4 color={color}>{children}</H4>;
      case 'h5':
        return <H5 color={color}>{children}</H5>;
      case 'h6':
        return <H6 color={color}>{children}</H6>;

      case 'd1':
        return <D1 color={color}>{children}</D1>;
      case 'd2':
        return <D2 color={color}>{children}</D2>;

      case 'paragraph':
        return <P color={color}>{children}</P>;

      case 'body':
        return <Boby color={color}>{children}</Boby>;
      case 'b-lg':
        return <BLarge color={color}>{children}</BLarge>;
      case 'b-md':
        return <BMedium color={color}>{children}</BMedium>;
      case 'b-sm':
        return <BSmall color={color}>{children}</BSmall>;

      case 'body-sb':
        return <BobySBold color={color}>{children}</BobySBold>;
      case 'b-lg-sb':
        return <BLargeSBold color={color}>{children}</BLargeSBold>;
      case 'b-md-sb':
        return <BMediumSBold color={color}>{children}</BMediumSBold>;
      case 'b-sm-sb':
        return <BSmallSBold color={color}>{children}</BSmallSBold>;

      case 'l-xl':
        return <LExtraLarge color={color}>{children}</LExtraLarge>;
      case 'l-lg':
        return <LLarge color={color}>{children}</LLarge>;
      case 'label':
        return <Label color={color}>{children}</Label>;
      case 'l-sm':
        return <LSmall color={color}>{children}</LSmall>;
      case 'l-xs':
        return <BExtraSmall color={color}>{children}</BExtraSmall>;

      default:
        return <P color={color}>{children}</P>;
    }
  };

  return getVariant();
};

export default Typography;
