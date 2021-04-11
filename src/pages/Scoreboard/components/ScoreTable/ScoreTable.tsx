import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { RankShard } from '../../../../types/Ranking';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TableContainerComponent, TableHeaderRow, TableCell, TableTitleWrapper, TitleSpan } from './ScoreTable.styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import TextRow from 'react-placeholder/lib/placeholders/TextRow';
import { useSelector } from 'react-redux';
import { State } from '../../../../redux/reducer';
import { Link } from 'react-router-dom';

interface ScoreTableProps {
  title?: string;
  titleIcon?: string;
  headerTitles: [string, string, string];
  headerColor: string;
  firstPlaceIcon: IconProp;
  firstPlaceIconColor: string;
  data?: Array<RankShard>;
  rowsPerPage: number;
  loading?: boolean;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const ScoreTable: React.FC<ScoreTableProps> = (props) => {
  const [page, setPage] = useState(0);
  const { market, world } = useSelector((state: State) => state.global);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);

  return (
    <React.Fragment>
      <TableTitleWrapper>
        <img src={props.titleIcon} alt={props.title} height={30} />
        <TitleSpan>{props.title}</TitleSpan>
      </TableTitleWrapper>
      <TableContainer component={TableContainerComponent}>
        <Table>
          <TableHead>
            <TableHeaderRow backgroundColor={props.headerColor}>
              {props.headerTitles.map((title) => (
                <TableCell component="th">{title}</TableCell>
              ))}
            </TableHeaderRow>
          </TableHead>
          <TableBody>
            {props.loading || !props.data
              ? Array.from(Array(props.rowsPerPage)).map(() => (
                  <TableRow>
                    <TableCell height={20}>
                      <TextRow color="#E0E0E0" maxHeight={20} style={{ margin: 0 }} />
                    </TableCell>
                    <TableCell>
                      <TextRow color="#E0E0E0" maxHeight={20} style={{ margin: 0 }} />
                    </TableCell>
                    <TableCell>
                      <TextRow color="#E0E0E0" maxHeight={20} style={{ margin: 0 }} />
                    </TableCell>
                  </TableRow>
                ))
              : props.data
                  .slice(page * props.rowsPerPage, page * props.rowsPerPage + props.rowsPerPage)
                  .map((rankShard) => (
                    <TableRow>
                      {console.log(rankShard)}
                      <TableCell>
                        {rankShard.index === 1 ? (
                          <FontAwesomeIcon icon={props.firstPlaceIcon} color={props.firstPlaceIconColor} />
                        ) : (
                          rankShard.index
                        )}
                      </TableCell>
                      <TableCell>
                        <Link to={`/player/${market}${world}/${rankShard.id}`}>{rankShard.name}</Link>
                      </TableCell>
                      <TableCell>{rankShard.points}</TableCell>
                    </TableRow>
                  ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={props.data?.length || 0}
                onPageChange={handleChangePage}
                page={page}
                rowsPerPageOptions={[]}
                rowsPerPage={props.rowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default ScoreTable;
