import { alignProp, justifyProp } from './styledTypes';

export const getMarginProp = (margin?: number | number[]): string => {
  if (margin) {
    if (typeof margin === 'number') {
      return `margin: ${margin}px !important;`;
    } else if (margin.length > 1) {
      return margin.length === 2
        ? `margin: ${margin[0]}px ${margin[1]}px !important;`
        : margin.length === 4
        ? `margin: ${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px !important;`
        : '';
    }
  }
  return '';
};

export const getPaddingProp = (padding?: number | number[]): string => {
  if (padding) {
    if (typeof padding === 'number') {
      return `padding: ${padding}px !important;`;
    } else if (padding.length > 1) {
      return padding.length === 2
        ? `padding: ${padding[0]}px ${padding[1]}px !important;`
        : padding.length === 4
        ? `padding: ${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px !important;`
        : '';
    }
  }
  return '';
};

export const getJustifyProp = (justify: justifyProp): string => {
  return typeof justify === 'boolean' && justify
    ? 'justify-content: center;'
    : justify === 'start'
    ? 'justify-content: flex-start;'
    : justify === 'end'
    ? 'justify-content: flex-end;'
    : justify === 'between'
    ? 'justify-content: space-between;'
    : justify === 'evenly'
    ? 'justify-content: space-evenly;'
    : '';
};

export const getAlignProp = (align: alignProp): string => {
  return typeof align === 'boolean' && align
    ? 'align-items: center;'
    : align === 'start'
    ? 'align-items: flex-start;'
    : align === 'end'
    ? 'align-items: flex-end;'
    : '';
};
