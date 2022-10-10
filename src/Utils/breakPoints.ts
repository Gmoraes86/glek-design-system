interface BreakPointsProps {
  min: number;
  max: number;
}
interface BreakPoints {
  [key: string]: BreakPointsProps;
}

export const breakPoints: BreakPoints = {
  xs: {
    min: 0,
    max: 575,
  },
  sm: {
    min: 576,
    max: 767,
  },
  md: {
    min: 768,
    max: 991,
  },
  lg: {
    min: 992,
    max: 1199,
  },
  xl: {
    min: 1200,
    max: 1599,
  },
  xxl: {
    min: 1600,
    max: Infinity,
  },
};

export const devicesPoints: BreakPoints = {
  mobile: {
    min: breakPoints.xs.min,
    max: breakPoints.sm.max,
  },
  tablet: {
    min: breakPoints.md.min,
    max: breakPoints.lg.max,
  },
  laptop: {
    min: breakPoints.xl.min,
    max: breakPoints.xl.max,
  },
  desktop: {
    min: breakPoints.xxl.min,
    max: breakPoints.xxl.max,
  },
};

export const mediaQueries: { [key: string]: string } = {
  mobile: `(min-width: ${devicesPoints.mobile.min}px))`,
  tablet: `(min-width: ${devicesPoints.tablet.min}px)`,
  laptop: `(min-width: ${devicesPoints.laptop.min}px)`,
  desktop: `(min-width: ${devicesPoints.desktop.min}px)`,
};
