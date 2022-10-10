import styled from 'styled-components';

interface TextProps {
  color?: string;
}

const getColor = (props: any, color: string) => {
  switch (color) {
    case 'white':
      return props.theme.colors.white;
    default:
      return props.theme.colors[color].main;
  }
};

export const H1 = styled.h1<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize[12]};
  line-height: ${(props) => props.theme.lineHeight.small};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const H2 = styled.h2<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize[10]};
  line-height: ${(props) => props.theme.lineHeight.small};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const H3 = styled.h3<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize[9]};
  line-height: ${(props) => props.theme.lineHeight.small};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
  margin: 0;
`;
export const H4 = styled.h4<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[8]};
  line-height: ${(props) => props.theme.lineHeight.small};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const H5 = styled.h5<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[6]};
  line-height: ${(props) => props.theme.lineHeight.small};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const H6 = styled.h6<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[4]};
  line-height: ${(props) => props.theme.lineHeight.small};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const D1 = styled.span<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.extraLight};
  font-size: ${(props) => props.theme.fontSize[48]};
  line-height: ${(props) => props.theme.lineHeight.small};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const D2 = styled.span<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.extraLight};
  font-size: ${(props) => props.theme.fontSize[11]};
  line-height: ${(props) => props.theme.lineHeight.small};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const P = styled.p<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize[7]};
  line-height: ${(props) => props.theme.lineHeight.medium};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const Boby = styled.span<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize[4]};
  line-height: ${(props) => props.theme.lineHeight.large};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const BLarge = styled.span`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize[6]};
  line-height: ${(props) => props.theme.lineHeight.large};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const BMedium = styled.span`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize[5]};
  line-height: ${(props) => props.theme.lineHeight.large};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const BSmall = styled.span`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize[3]};
  line-height: ${(props) => props.theme.lineHeight.large};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const BobySBold = styled.span<TextProps>`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[4]};
  line-height: ${(props) => props.theme.lineHeight.large};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const BLargeSBold = styled.span`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[6]};
  line-height: ${(props) => props.theme.lineHeight.large};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const BMediumSBold = styled.span`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[5]};
  line-height: ${(props) => props.theme.lineHeight.large};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const BSmallSBold = styled.span`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[3]};
  line-height: ${(props) => props.theme.lineHeight.large};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const LExtraLarge = styled.label`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[5]};
  line-height: ${(props) => props.theme.lineHeight.medium};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const LLarge = styled.label`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[4]};
  line-height: ${(props) => props.theme.lineHeight.medium};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const Label = styled.label`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize[3]};
  line-height: ${(props) => props.theme.lineHeight.medium};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const LSmall = styled.label`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize[2]};
  line-height: ${(props) => props.theme.lineHeight.medium};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
export const BExtraSmall = styled.label`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize[1]};
  line-height: ${(props) => props.theme.lineHeight.medium};
  ${(props) => props.color && `color: ${getColor(props, props.color)}`};
`;
