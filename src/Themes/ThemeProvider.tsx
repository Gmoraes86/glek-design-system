import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import darkTheme from './darkTheme';
import GlobalStyles from './GlobalStyles';
import baseTheme from './lightTheme';
export * from '../Components';

interface ThemeProviderProps {
  children: ReactElement;
  theme?: string;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme === 'dark' ? darkTheme : baseTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
