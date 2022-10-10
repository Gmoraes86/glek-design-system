// .storybook/preview.js

import { addDecorator } from '@storybook/react';
import {ThemeProvider} from '../src/Themes/ThemeProvider';
import dark from '../src/Themes/darkTheme'
import light from '../src/Themes/lightTheme'

addDecorator((story) => {
  return (
    <ThemeProvider theme={light}>
      {story()}
    </ThemeProvider>
  );
})


export const parameters = {    
  layout: 'centered',
}