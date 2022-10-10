import { ReactElement } from 'react';
import styled from 'styled-components';

import { getMarginProp, getPaddingProp } from '../../../Utils/styledProps';
import { LLarge as TypographyLabelLarge } from '../../General/Typography/styles';

interface CollapseContainer {
  padding?: number | number[];
  margin?: number | number[];
  children: ReactElement[];
}

export const CollapseContainer = styled.div<CollapseContainer>`
  display: flex;
  flex-direction: column;
  ${({ margin }) => getMarginProp(margin)}
  ${({ padding }) => getPaddingProp(padding)}
  border-bottom: 1px solid #FA4616;
  width: 100%;
`;
export const CollapseHeader = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 56px;
  align-items: center;
  padding: 0px 12px;
`;

interface CollapseHeaderProps {
  toogle: boolean;
}

export const CollapseContent = styled.div<CollapseHeaderProps>`
  width: 100%;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.25s ease-out;

  ${({ toogle }) =>
    toogle &&
    `
    transition: max-height 0.25s ease-in;
    max-height: 1000px;
  `}
`;

export const Clickable = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

interface IconDivProps {
  collapse?: boolean;
}

export const IconDiv = styled.div<IconDivProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transition: -webkit-transform 0.2s linear;
  -ms-transition: -ms-transform 0.2s linear;
  transition: transform 0.2s linear;
  ${(props) =>
    !props.collapse &&
    `
    transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
`}
`;

export const Title = styled(TypographyLabelLarge)`
  color: ${(props) => props.theme.colors.primary.main};
  text-overflow: ellipsis;
  width: 600px;
  white-space: nowrap;
  overflow: hidden;
`;
