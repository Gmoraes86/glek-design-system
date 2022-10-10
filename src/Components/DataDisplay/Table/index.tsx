import React, { memo, useMemo, useState } from 'react';

import { Icon, Typography } from '../../../Components';
import Skeleton from '../../Feedback/Skeleton';
import {
  IconDiv,
  PageButton,
  TableBase,
  TableCell,
  TableFooter,
  TableFooterLeft,
  TableFooterRight,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableTitle,
} from './styles';

export interface OrderProps {
  orderBy?: string;
  orderDirection?: 'ASC' | 'DESC';
}

type OrderDirection = OrderProps['orderDirection'];

export type TableLoadState = 'idle' | 'loading' | 'success' | 'error';
export interface TableColumnProps {
  title: string;
  key: string;
  render?: (record: any) => any;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
}

export type Pagination = {
  page?: number;
  pageSize?: number;
  offset?: number;
  totalPages?: number;
  orderBy?: OrderProps['orderBy'];
  orderDirection?: OrderProps['orderDirection'];
  totalResults?: number;
};
export interface TableProps {
  title?: string;
  columns: TableColumnProps[];
  data: any[];
  loadState?: TableLoadState;
  hasPagination?: boolean;
  pagination?: Pagination;
  handleOrder?: (order?: OrderProps) => void;
  onPageChange?: (page: number) => void;
}

const Table = ({
  title,
  columns,
  data,
  loadState,
  hasPagination = false,
  pagination = { totalPages: 1 },
  handleOrder,
  onPageChange,
}: TableProps) => {
  const [orderDirection, setOrderDirection] = useState<OrderDirection>('ASC');
  const [orderArrowDirection, setOrderArrowDirection] = useState<{
    key: string;
    direction: OrderDirection;
  }>();
  const [activePage, setActivePage] = useState(1);

  // Sort arrows
  const handleOrderDirection = () => {
    if (orderDirection === 'ASC') {
      return setOrderDirection('DESC');
    } else {
      return setOrderDirection('ASC');
    }
  };

  const handleOrderArrowDirection = (key: string) => {
    if (orderArrowDirection?.key === key) {
      setOrderArrowDirection({ key: key, direction: orderDirection });
    } else {
      setOrderArrowDirection({ key: key, direction: orderDirection });
    }
  };
  ////

  // Pagination
  const renderPaginationArray = Array.from(Array(pagination?.totalPages).keys());

  const handleOnPageChange = async (page: number) => {
    if (paginationDisabled) return;
    onPageChange && (await onPageChange(page));
    return setActivePage(page);
  };

  const handleNextPage = async () => {
    if (paginationDisabled) return;
    if (activePage < (pagination?.totalPages || 1)) {
      handleOnPageChange(activePage + 1);
      onPageChange && (await onPageChange(activePage + 1));
    }
  };

  const handlePreviousPage = async () => {
    if (paginationDisabled) return;
    if (activePage > 1) {
      handleOnPageChange(activePage - 1);
      onPageChange && (await onPageChange(activePage - 1));
    }
  };

  const paginationDisabled = useMemo(() => {
    return renderPaginationArray?.length === 1;
  }, [renderPaginationArray]);
  ////

  return (
    <div key="table">
      {title && (
        <TableTitle key="table-title">
          <Typography variant="h3" key="table-title-h">
            {title}
          </Typography>
        </TableTitle>
      )}

      <TableBase key="table-base">
        <TableHeader key="table-header">
          <tr key="table-header-tr">
            {columns.length &&
              columns?.map((column, index) => (
                <TableHeaderCell
                  sortable={column.sortable || false}
                  align={column.align}
                  key={`${index}-col`}
                  active={orderArrowDirection?.key === column.key}
                  arrowDirection={orderArrowDirection?.direction}
                  onClick={() => {
                    if (column.sortable) {
                      // Handles order by
                      handleOrderDirection();
                      handleOrderArrowDirection(column.key);
                      if (handleOrder)
                        return handleOrder({ orderBy: column.key, orderDirection: orderDirection });
                    }
                    return;
                  }}
                >
                  <Typography key={`header_text_${index}`} variant="b-sm-sb">
                    {column.title}
                    {/* { column.sortable ? 
                          orderArrowDirection?.key === column.key && orderArrowDirection.direction === 'ASC'  ? <SortIconUp /> 
                          : orderArrowDirection?.key === column.key && orderArrowDirection.direction === 'DESC' ? <SortIconDown /> : null : null
                          } */}
                  </Typography>
                </TableHeaderCell>
              ))}
          </tr>
        </TableHeader>
        <tbody>
          {loadState === 'success' &&
            data?.map((row) => (
              <TableRow key={`${row.id}-row`}>
                {columns.length &&
                  columns?.map((column, index) => (
                    <TableCell key={`${index}-col-row`} align={column.align}>
                      <Typography key={`row-col-${index}_text`} variant="b-sm">
                        {column.render ? column.render(row) : row[column.key] || ''}
                      </Typography>
                    </TableCell>
                  ))}
              </TableRow>
            ))}

          {loadState === 'loading' &&
            [0, 1, 2, 3, 4].map((i) => (
              <TableRow key={`${i}-row`}>
                {columns.length &&
                  columns?.map((column, index) => (
                    <TableCell key={`${index}-row-loading`} align={column.align}>
                      <Skeleton key={`${index}-row-skeleton`} type="text" />
                    </TableCell>
                  ))}
              </TableRow>
            ))}
        </tbody>
      </TableBase>
      {(loadState === 'error' || !columns) && <>Error</>}
      <TableFooter key="table-footer">
        <TableFooterLeft>
          <Typography key="table-footer-text" variant="b-sm">
            Total de registros: {pagination?.totalResults}
          </Typography>
        </TableFooterLeft>
        {hasPagination && (
          <TableFooterRight key="pagination_container">
            <IconDiv
              disabled={paginationDisabled || activePage === 1}
              onClick={async () => await handlePreviousPage()}
            >
              <Icon icon="left" size="sm" disabled={activePage === 1} />
            </IconDiv>
            {renderPaginationArray?.map((el) => (
              <PageButton
                disabled={paginationDisabled}
                active={activePage === el + 1}
                key={el}
                onClick={async () => await handleOnPageChange(el + 1)}
              >
                {el + 1}
              </PageButton>
            ))}
            <IconDiv
              onClick={async () => await handleNextPage()}
              disabled={paginationDisabled || activePage === renderPaginationArray?.length}
            >
              <Icon
                icon="right"
                size="sm"
                disabled={activePage === renderPaginationArray?.length}
              />
            </IconDiv>
          </TableFooterRight>
        )}
      </TableFooter>
    </div>
  );
};

export default memo(Table);
