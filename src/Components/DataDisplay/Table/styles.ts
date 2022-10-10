import styled from 'styled-components';

interface PageButtonProps {
  active?: boolean;
  disabled?: boolean;
}
interface IconDivProps {
  disabled?: boolean;
}
interface TableHeaderCellProps {
  sortable: boolean;
  active?: boolean;
  arrowDirection?: 'ASC' | 'DESC';
}

export const TableBase = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  overflow: hidden;
`;

export const TableTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
`;

export const TableHeader = styled.thead`
  height: 64px;
`;

export const TableHeaderCell = styled.th<TableHeaderCellProps>`
  background-color: rgba(227, 227, 231, 0.5);

  text-align: left;
  text-align: ${(props) => props.align};
  padding: 0 24px;
  gap: 5;
  cursor: ${(props) => (props.sortable ? 'pointer' : 'default')};
  ${(props) =>
    props.sortable &&
    !props.active &&
    `
      &:hover {        
        &::after {
          font-size: 16px;
          position: relative;
          display: inline-block;
          top: 1px;
          left: 3px;
          opacity: 0.4;
          content: "\\25BE";
        }
      }`}
  ${(props) =>
    props.active &&
    props.arrowDirection === 'ASC' &&
    `
      &::after {
        font-size: 16px;
        content: "\\25BE";
        position: relative;
        display: inline-block;
        top: 1px;
        left: 3px;
      }
      `}
    ${(props) =>
    props.active &&
    props.arrowDirection === 'DESC' &&
    `
      &::after {
        font-size: 16px;
        content: "\\25B4";
        position: relative;       
        display: inline-block;
        top: 1px;
        left: 3px;
      }
    `}
    justify-content: space-between;
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

export const TableRow = styled.tr`
  height: 64px;
  background-color: #ffffff;

  &:nth-child(even) {
    height: 62px;
    background-color: #f6f6f7;
    border-bottom: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
  }
`;

export const TableCell = styled.td`
  text-align: left;
  text-align: ${(props) => props.align};
  padding: 0 24px;
`;

export const TableFooter = styled.div`
  background-color: #ffffff;
  height: 64px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageButton = styled.button<PageButtonProps>`
  transition: ${(props) => (props.active ? 'none' : '0.3s')};
  width: ${(props) => (props.active ? '46px' : '32px')};
  height: ${(props) => (props.active ? '44px' : '32px')};
  border-radius: ${(props) => (props.active ? '4px' : '2px')};
  margin: auto 5px;
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  background-color: ${(props) => (props.active ? props.theme.colors.primary.main : 'transparent')};
  border: ${(props) => (props.active ? 'none' : `1px solid ${props.theme.colors.grey.dark[4]}`)};
  color: ${(props) => (props.active ? 'white' : props.theme.colors.secondary.main)};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const IconDiv = styled.div<IconDivProps>`
  margin: auto;
  padding: 0;
  align-items: center;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const TableFooterLeft = styled.div`
  display: flex;
`;

export const TableFooterRight = styled.div`
  display: flex;
`;
