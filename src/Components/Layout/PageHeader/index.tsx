import React, { ReactElement } from 'react';

import { Typography } from '../../General';
import { Col, Row } from '../Grid';
import { Grid } from './styles';

interface PageHeaderProps {
  title?: string;
  widgets?: ReactElement[] | any;
}

const PageHeader = ({ title, widgets }: PageHeaderProps) => {
  return (
    <Grid>
      <Row justify="between" align margin={[16, 0]}>
        <Col>
          <Typography variant="h4">{title}</Typography>
        </Col>
        <Col>
          {!!widgets &&
            widgets.map((widget: ReactElement, index: number) => <span key={index}>{widget}</span>)}
        </Col>
      </Row>
    </Grid>
  );
};

export default PageHeader;
