import styled from 'styled-components';

interface TooltipTextProps {
  visibility?: boolean;
}

export const TooltipText = styled.span<TooltipTextProps>`
  transition: 0.1s;
  display: none;
  max-width: 160px;
  min-width: 120px;
  background-color: ${(props) => props.theme.colors.grey.dark[3]};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 4px 8px;
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: -20px;
  ::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 20%;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.grey.dark[3]} transparent transparent transparent;
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  justify-content: center;
  display: inline-block;
  :hover span {
    display: inline-block;
    visibility: ${(props: TooltipTextProps) => (props.visibility ? 'hidden' : 'visible')};
  }
`;
