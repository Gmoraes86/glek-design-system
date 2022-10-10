import React from 'react';

import { SkeletonItem } from './styles';

export interface SkeletonProps {
  type: 'text' | 'avatar' | 'card';
}

const Skeleton = ({ type }: SkeletonProps) => {
  return <SkeletonItem type={type} />;
};

export default Skeleton;
