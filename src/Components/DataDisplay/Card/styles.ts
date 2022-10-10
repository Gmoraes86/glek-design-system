import styled from 'styled-components';

import { Typography } from '../../General';
import { CardContainerProps } from './index';

export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${(props) => props.theme.colors.white} !important;
  border-radius: ${(props) => props.theme.borderRadius.large} !important;
  padding: ${(props) => props.theme.spacing[2]} !important;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

export const CardTitle = styled(Typography)`
  font-size: ${(props) => props.theme.fontSize[4]} !important;
  font-weight: ${(props) => props.theme.fontWeight.bold} !important;
  margin-bottom: ${(props) => props.theme.spacing[2]} !important;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.dark[2]} !important; ;
`;
