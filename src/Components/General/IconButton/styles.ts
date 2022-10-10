import styled from 'styled-components';

interface BaseButtonProps {
  disabled?: boolean;
  color?: string;
}

export const BaseButton = styled.button<BaseButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0;
  /* margin: 3px 0; */
  border: none;
  cursor: pointer;
  height: 32px;
  width: 32px;
  ${(props) => props.disabled && 'opacity: 0.4; cursor: default;'}
  ${(props) =>
    props.color &&
    `
    background-color: ${props.theme.colors[props.color].light[3]};
  `}
`;
