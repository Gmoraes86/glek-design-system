import styled from 'styled-components';

export const AppBarContainer = styled.div`
  z-index: 2;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.spacing['9']};
  background-color: ${(props) => props.theme.colors.white} !important;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: ${(props) => props.theme.spacing['4']} ${(props) => props.theme.spacing['6']};
  background-color: ${(props) => props.theme.colors.white} !important;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: ${(props) => props.theme.spacing['4']} ${(props) => props.theme.spacing['6']};
  background-color: ${(props) => props.theme.colors.white} !important;
`;
