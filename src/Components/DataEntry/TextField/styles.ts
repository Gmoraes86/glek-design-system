import styled from 'styled-components';

interface InputBaseOutlineProps {
  iconLeft?: boolean;
  iconRight?: boolean;
}

interface IconDivProps {
  iconLeft?: boolean;
  iconRight?: boolean;
}

export const TextFieldContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

export const InputBaseOutline = styled.input<InputBaseOutlineProps>`
  border: 1px solid #e3e3e7;
  border-radius: 4px;
  padding: ${(props) => props.theme.spacing[1]} ${(props) => props.theme.spacing[3]};
  height: 35px;
  width: 100%;
  ${(props) => props.iconLeft && `padding-left: 60px;`}
  ${(props) => props.iconRight && `padding-right: 60px;`}
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #242424;

  &:focus {
    outline: none !important;
    border-color: #ff823a;
  }
  ::placeholder {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #bebbb6;
  }
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: #383632;
  padding-bottom: 4px;
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.005em;
`;

export const ContainerInput = styled.div`
  display: flex;
  position: relative;
`;

export const IconDiv = styled.div<IconDivProps>`
  position: absolute;
  height: 100%;
  width: 53px;
  ${(props) => props.iconLeft && `left: 0;`}
  ${(props) => props.iconRight && `right: 0;`}
  background-color: gray;
`;
