import styled, { keyframes } from 'styled-components';

import { SkeletonProps } from './index';

export const skeletonLoading = keyframes`
 0% {
    background-color: #F2F2F5;
  }
  50% {
    background-color: #C1C5DC;
  }
  100% {
    background-color: #F2F2F5;
  }
`;

export const SkeletonItem = styled.div<SkeletonProps>`
  animation: ${skeletonLoading} 3s linear infinite alternate;
  height: 30px;
  background-color: #f2f2f5;
  border-radius: 4px;
`;
