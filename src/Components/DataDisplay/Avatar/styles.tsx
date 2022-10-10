import styled from 'styled-components';

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.light[3]};
  color: ${({ theme }) => theme.colors.primary};
`;
