import styled from 'styled-components';

interface ItemContainerProps {
  last?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 285px;
  height: 40px;
  background-color: white;
  border: 1px solid #cfcfd4;
  box-shadow: 0px 0px 2px rgba(250, 70, 22, 0.5);
  border-radius: 4px;
  position: relative;
`;

export const ClickableContainer = styled.div`
  display: flex;
  align-items: center;
  width: 285px;
  height: 40px;
  background-color: white;
  border: 1px solid #cfcfd4;
  box-shadow: 0px 0px 2px rgba(250, 70, 22, 0.5);
  border-radius: 4px;
  position: relative;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding-left: 8px;
  height: 30px;
  border: none;
`;

export const IconDiv = styled.a`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: center;
  height: 30px;
`;

export const ItemContainer = styled.a<ItemContainerProps>`
  display: flex;
  align-items: center;
  width: 235px;
  height: 30px;
  font-size: 8px;
  color: #909599;
  ${(props) => (props.last ? 'border-radius: 0 0 4px 4px;' : '')}

  &:hover {
    background-color: #fa4616;
    color: white;
  }
`;

export const CollapseContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 80px;
  align-items: center;
  justify-content: center;
  width: 235px;
  min-height: 40px;
  background-color: white;
  border-radius: 4px;
`;
