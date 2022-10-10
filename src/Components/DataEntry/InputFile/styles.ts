import styled from 'styled-components';

import { Label as TypographyLabel } from '../../General/Typography/styles';

export const InputFileContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(221, 229, 223, 0.5);
  border: 1px solid #dde5e9;
  border-radius: 4px;
  background: #f6f6f7;

  > label {
    padding-left: 32px;
  }
`;

export const Placeholder = styled(TypographyLabel)`
  color: ${(props) => props.theme.colors.grey.dark[2]};
`;
