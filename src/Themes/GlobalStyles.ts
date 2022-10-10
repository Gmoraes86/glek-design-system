import { createGlobalStyle } from 'styled-components';

import Mulish from '../Fonts/Mulish/MulishRegular.ttf';
import Poppins from '../Fonts/Poppins/PoppinsRegular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
  }
  @font-face {
    font-family: 'Mulish';
    src: url(${Mulish}) format('truetype');
  }
 
`;
