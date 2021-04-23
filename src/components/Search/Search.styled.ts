import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import colors from '../../utils/colors';
import { theme } from '../../utils/theme.utils';

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SearchItem = styled.div`
  width: calc(50% - 20px);
  padding-right: 10px;
  padding-left: 10px;

  ${[theme.breakpoints.down('sm')]} {
    width: 100%;
    padding: 5px 0;
  }
`;

export const SearchInput = styled(TextField)`
  border-bottom: 1px ${colors.seaGreen};
`;
