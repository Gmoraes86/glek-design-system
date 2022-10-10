import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

interface IconDivProps {
  collapse?: boolean;
}

interface CollapseContainerProps {
  collapse?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: transparent;
  border-radius: 4px;
  position: relative;
  height: 100%;
  width: 200px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding-left: 8px;
  height: 30px;
  border: none;
`;

export const Clickable = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const IconDiv = styled.div<IconDivProps>`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: center;
  height: 30px;
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  -ms-transition: -ms-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  ${(props) =>
    props.collapse &&
    `
    transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    `}
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  color: ${(props) => props.theme.colors.grey.dark[2]};
  width: 100%;
  position: relative;
  border-radius: 4px !important;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.grey.light[5]};
  }
`;

export const CollapseContainer = styled.div<CollapseContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0%;
  align-items: center;
  width: 200px;
  min-height: 40px;
  background-color: white;
  border-radius: 4px !important;
  height: ${(props) => (props.collapse ? '0px' : 'auto')};
`;

export const Link = styled(RouterLink)`
  position: relative;
  display: flex;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #909599;
  text-decoration: none;
  width: 100%;
  padding: 8px;
`;
