import React, { ReactElement } from 'react';

import { Icon, Typography } from '../../General';
import { StyledAvatar } from './styles';

interface AvatarProps {
  children?: ReactElement | string;
}

const Avatar = ({ children }: AvatarProps) => {
  return (
    <StyledAvatar>
      {children ? (
        <Typography variant="b-lg-sb" color="primary">
          {children}
        </Typography>
      ) : (
        <Icon icon="user" color="primary" />
      )}
    </StyledAvatar>
  );
};

export default Avatar;
