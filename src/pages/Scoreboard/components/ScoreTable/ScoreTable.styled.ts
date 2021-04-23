import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import { default as MuiTableCell } from '@material-ui/core/TableCell';

export const TableContainerComponent = styled(Paper)`
  border-radius: 2px !important;
  box-shadow: rgb(0 0 0 / 4%) 0 3px 5px !important;
`;

interface TableHeaderRowProps {
  color: string;
}

export const TableHeaderRow = styled(TableRow)<TableHeaderRowProps>`
  background-color: ${({ color }) => color};
  padding: 10px !important;
`;

export const TableCell = styled(MuiTableCell)`
  padding: 10px !important;
  text-align: center !important;
`;

export const TableTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const TitleSpan = styled.span`
  margin-left: 5px;
`;
