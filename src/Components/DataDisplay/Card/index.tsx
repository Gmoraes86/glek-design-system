import React, { ReactElement } from 'react';

import { CardContainer, CardTitle } from './styles';

export interface CardContainerProps {
  children: ReactElement;
  title?: string;
  titleVariant?: any;
  titleColor?: any;
  [x: string]: any;
}

const Card = ({
  children,
  title,
  titleVariant,
  titleColor,
  ...rest
}: CardContainerProps): ReactElement => {
  return (
    <CardContainer {...rest}>
      <>
        {!!title && (
          <CardTitle color={titleColor} variant={titleVariant}>
            {title}
          </CardTitle>
        )}
        {children}
      </>
    </CardContainer>
  );
};

export default Card;
