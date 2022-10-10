import styled from 'styled-components';

import { getMarginProp, getPaddingProp } from '../../../Utils/styledProps';
import { TabContentProps, TabsMenuItemProps } from '.';

export const TabsContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  width: 100%;
  height: 53px;
  border-radius: 18px 18px 0px 0px;
  align-items: center;
`;
export const TabContentContainer = styled.div<TabContentProps>`
  display: flex;
  background: #f6f6f7;
  flex-wrap: wrap;
  ${({ margin }) => getMarginProp(margin)}
  ${({ padding }) => getPaddingProp(padding)}
`;

export const TabsItem = styled.div<TabsMenuItemProps>`
  cursor: pointer;
  display: flex;
  margin: 5px 0;
  width: 100%;
  height: 53px;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.active
      ? `
        height: 53px;
        border-radius: 18px 18px 0px 0px;
        z-index: 10;
        background-color: ${props.theme.colors.grey.light[5]};
        border-bottom: 2px solid ${props.theme.colors.primary.main} !important;
        border: none;

        & > span {
          padding-top: 2px;
        }
        `
      : ''};
`;
